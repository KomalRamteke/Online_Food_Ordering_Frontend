import { Box, Modal } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegistorForm from "./RegistorForm";

export default function Auth() {
  const location = useLocation();
  const navigate = useNavigate();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    outline: "none",
    boxShadow: 24,
    p: 4,
  };
  const handleOnClose = () => {
    navigate("/");
  };
  return (
    <Modal
      className=""
      open={
        location.pathname === "/account/register" ||
        location.pathname === "/account/login"
      }
      onClose={handleOnClose}
    >
      <Box sx={style}>
      {location.pathname === "/account/register"?<RegistorForm/>:<LoginForm/>} 
      </Box>
    </Modal>
  );
}
