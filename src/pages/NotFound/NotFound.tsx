import Lottie from "react-lottie";
import * as animationData from "./notFound.json";
import { Wrapper } from "./NotFound.styled";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Wrapper>
      <Lottie options={defaultOptions} height={200} width={200} />
      404
      <IconButton
        size="small"
        className="back-btn"
        onClick={() => navigate("/")}
      >
        <ArrowBackIcon style={{ color: "#9e78cf" }} />
      </IconButton>
    </Wrapper>
  );
};
