import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
  padding: 10px 10px 10px 21px;
  background-color: rgba(62, 22, 113, 0.5);
  min-height: 40px;
  cursor: pointer;
`;

export const Title = styled.div<{ $completed: boolean }>`
  font-size: 15px;
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
  color: ${({ $completed }) => ($completed ? "#78CFB0" : "#9e78cf")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
