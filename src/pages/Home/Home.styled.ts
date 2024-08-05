import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .selected-task {
    background-color: black;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 1;

    .close-icon {
      width: 24px;
      height: 24px;
      margin: 15px;
      margin-left: auto;
      background-color: transparent;
      border: 0;
      cursor: pointer;
    }

    .fold {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      border-radius: 30px 30px 0 0;
      width: 100%;
      height: 100%;

      .task-body {
        display: flex;
        flex-direction: column;
        border: 1px solid #9e78cf;
        width: 50%;
        border-radius: 10px;
        color: #3e1671;
        padding: 10px 15px;
        gap: 20px;

        .task-header {
          justify-content: space-between;
          flex-direction: row;
          display: flex;
        }
        .task-user,
        .task-title {
          display: flex;
          align-items: flex-start;
          text-align: left;
        }
      }
    }
  }
`;

export const NewTaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 15%;
  padding-top: 0%;
`;

export const TaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
`;

export const Loader = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 2;
  align-items: center;
  justify-content: center;
`;
