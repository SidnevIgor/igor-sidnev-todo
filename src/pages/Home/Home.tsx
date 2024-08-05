import React, { useEffect, useState } from "react";
import { UserFilter, NewTask, TaskList } from "../../components";
import { TodoItem } from "../../types";
import {
  Loader,
  NewTaskWrapper,
  TaskListWrapper,
  Wrapper,
} from "./Home.styled";

import { useSelector, useDispatch } from "react-redux";
import {
  setTasks,
  addTask,
  completeTask,
  deleteTask,
  TodoState,
} from "../../store";
import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useParams } from "react-router-dom";
import { Chip, Grid } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

import Lottie from "react-lottie";
import * as animationData from "./loader.json";

export const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const dispatch = useDispatch();
  const { tasks, userIds } = useSelector((state: TodoState) => state);

  const navigate = useNavigate();
  const { id } = useParams();

  const [chosenUserId, setChosenUserId] = useState<number>(-1);
  const [selectedTaskId, setSelectedTaskId] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((tasks: TodoItem[]) => dispatch(setTasks(tasks)))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!id || !tasks.length) {
      setSelectedTaskId(null);
      return;
    }
    setSelectedTaskId(id);
  }, [id, tasks.length]);

  const selectedTask = tasks.find((t) => t.id == selectedTaskId);

  return (
    <Wrapper>
      <UserFilter
        options={userIds}
        onUserIdSelect={(option) => setChosenUserId(option)}
      />
      <NewTaskWrapper>
        <NewTask
          onAddClick={(title) =>
            dispatch(
              addTask({
                completed: false,
                id: Date.now() + Math.random(), //simple ID randomiser
                title,
                userId: chosenUserId > -1 ? chosenUserId : 10, // we assume this is a current user
              })
            )
          }
        />
      </NewTaskWrapper>
      <TaskListWrapper>
        <TaskList
          tasks={tasks}
          chosenUserId={chosenUserId}
          onTaskSelect={(taskId) => navigate(`/todo/${taskId}`)}
          onTaskComplete={(taskId) => {
            dispatch(completeTask(taskId));
          }}
          onTaskDelete={(taskId) => {
            dispatch(deleteTask(taskId));
          }}
        />
      </TaskListWrapper>
      <AnimatePresence>
        {selectedTaskId && (
          <motion.div layoutId={selectedTaskId} className="selected-task">
            <motion.button onClick={() => navigate("/")} className="close-icon">
              <CloseIcon style={{ color: "#9E78CF" }} />
            </motion.button>
            <motion.div className="fold">
              <motion.div className="task-body">
                <motion.div className="task-header">
                  <motion.div className="task-id">
                    ID: {selectedTask?.id}
                  </motion.div>
                  <motion.div className="task-status">
                    {selectedTask?.completed ? (
                      <Chip label="Completed" color="success" />
                    ) : (
                      <Chip label="To Do" color="default" />
                    )}
                  </motion.div>
                </motion.div>
                <motion.div className="task-user">
                  <Chip
                    icon={<FaceIcon />}
                    label={`User: ${selectedTask?.userId}`}
                    color={"secondary"}
                  />
                </motion.div>
                <motion.div className="task-title">
                  {selectedTask?.title}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {loading && (
        <Loader>
          <Lottie options={defaultOptions} height={200} width={200} />
        </Loader>
      )}
    </Wrapper>
  );
};
