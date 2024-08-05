import { createSlice, configureStore } from "@reduxjs/toolkit";
import { TodoItem } from "../types";

export type TodoState = {
  tasks: TodoItem[];
  userIds: number[];
};

const tasksSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
    userIds: [],
  } as TodoState,
  reducers: {
    setTasks: (state, action: { payload: TodoItem[]; type: string }) => {
      state.tasks = action.payload;
      state.userIds = action.payload
        .map((task) => task.userId)
        .filter((value, index, array) => array.indexOf(value) === index);
    },
    addTask: (state, action) => {
      const tasksCopy = [...state.tasks];
      tasksCopy.unshift(action.payload as TodoItem);
      state.tasks = tasksCopy;
    },
    completeTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === (action.payload as number)
          ? { ...task, completed: true }
          : task
      );
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) => task.id !== (action.payload as number)
      );
    },
  },
});

export const { setTasks, addTask, completeTask, deleteTask } =
  tasksSlice.actions;

export const store = configureStore({
  reducer: tasksSlice.reducer,
});
