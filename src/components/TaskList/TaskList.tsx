import React, { useState } from "react";
import { TodoItem } from "../../types";
import { Scrollable, SubTitle, TaskWrapper, Wrapper } from "./TaskList.styled";
import { Task } from "..";
import { AnimatePresence, motion } from "framer-motion";

type TaskListProps = {
  tasks: TodoItem[];
  chosenUserId?: number;
  onTaskSelect: (taskId: number) => void;
  onTaskComplete: (taskId: number) => void;
  onTaskDelete: (taskId: number) => void;
};

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  chosenUserId,
  onTaskSelect,
  onTaskComplete,
  onTaskDelete,
}) => {
  //const [selectedId, setSelectedId] = useState<any>(null);

  let tasksToDo = tasks.filter((task) => !task.completed);
  let tasksCompleted = tasks.filter((task) => !!task.completed);

  if (!!chosenUserId && chosenUserId > -1) {
    tasksToDo = tasksToDo.filter((task) => task.userId === chosenUserId);
    tasksCompleted = tasksCompleted.filter(
      (task) => task.userId === chosenUserId
    );
  }

  return (
    <Wrapper>
      <TaskWrapper>
        <SubTitle>Tasks to do - {tasksToDo.length}</SubTitle>
        <Scrollable>
          {tasksToDo.map((task) => (
            <motion.div
              layoutId={`${task.id}`}
              onClick={() => onTaskSelect(task.id)}
              key={`task-${task.id}`}
            >
              <Task
                completed={task.completed}
                title={task.title}
                onCompleteClick={() => onTaskComplete(task.id)}
                onDeleteClick={() => onTaskDelete(task.id)}
              />
            </motion.div>
          ))}
        </Scrollable>
      </TaskWrapper>
      <TaskWrapper>
        <SubTitle>Done - {tasksCompleted.length}</SubTitle>
        <Scrollable>
          {tasksCompleted.map((task) => (
            <motion.div
              layoutId={`${task.id}`}
              onClick={() => onTaskSelect(task.id)}
              key={`task-${task.id}`}
            >
              <Task
                completed={task.completed}
                title={task.title}
                key={`task-${task.id}`}
                onCompleteClick={() => onTaskComplete(task.id)}
                onDeleteClick={() => onTaskDelete(task.id)}
              />
            </motion.div>
          ))}
        </Scrollable>
      </TaskWrapper>
    </Wrapper>
  );
};
