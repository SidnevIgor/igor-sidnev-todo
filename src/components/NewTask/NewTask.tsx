import React, { useState } from "react";
import { Wrapper } from "./NewTask.styled";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { AddBox } from "@mui/icons-material";

type NewTaskProps = {
  onAddClick: (newTask: string) => void;
};

export const NewTask: React.FC<NewTaskProps> = ({ onAddClick }) => {
  const [newTask, setNewTask] = useState<string>("");
  return (
    <Wrapper>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          backgroundColor: "transparent",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "#3E1671",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, color: "white" }}
          placeholder="Add a new task"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (!newTask) {
                return;
              }
              onAddClick(newTask);
              setNewTask("");
            }
          }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          sx={{ p: "10px" }}
          onClick={() => {
            if (!newTask) {
              return;
            }
            onAddClick(newTask);
            setNewTask("");
          }}
        >
          <AddBox style={{ color: "#9E78CF" }} />
        </IconButton>
      </Paper>
    </Wrapper>
  );
};
