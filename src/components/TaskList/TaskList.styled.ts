import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 4%;
`;

export const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 48%;
  padding: 0 25%;
`;

export const Scrollable = styled(Wrapper)`
  overflow-y: scroll;
  height: 100%;
  gap: 10px;
`;

export const SubTitle = styled.div`
  color: #fff;
  font-size: 17px;
  margin-bottom: 10px;
`;
