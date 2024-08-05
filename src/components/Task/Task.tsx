import { IconButton } from "@mui/material";
import { ActionButtons, Title, Wrapper } from "./Task.styled";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

type TaskProps = {
  title: string;
  completed: boolean;
  onCompleteClick: () => void;
  onDeleteClick: () => void;
};

export const Task: React.FC<TaskProps> = ({
  title,
  completed,
  onCompleteClick,
  onDeleteClick,
}) => {
  return (
    <Wrapper>
      <Title $completed={completed}>{title}</Title>
      {!completed && (
        <ActionButtons>
          <IconButton
            sx={{ width: "30px", height: "30px" }}
            onClick={(e) => {
              e.stopPropagation();
              onCompleteClick();
            }}
          >
            <CheckIcon style={{ color: "#9E78CF" }} />
          </IconButton>
          <IconButton
            sx={{ width: "30px", height: "30px" }}
            onClick={(e) => {
              e.stopPropagation();
              onDeleteClick();
            }}
          >
            <DeleteIcon style={{ color: "#9E78CF" }} />
          </IconButton>
        </ActionButtons>
      )}
    </Wrapper>
  );
};
