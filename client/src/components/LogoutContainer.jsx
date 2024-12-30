import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { redirect, useNavigate, Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";

const LogoutContainer = ({ logout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { Logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const avatar = logout?.avatar;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    if (logout) {
      await Logout(navigate);
    }
  };

  return (
    <div
      className="w-[120px] h-[20px] lg:h-[30px] lg:w-[150px]"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {logout ? (
        <>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            startIcon={
              logout ? (
                <Avatar
                  alt="Remy Sharp"
                  src={avatar}
                  sx={{ width: 28, height: 28 }}
                />
              ) : (
                <PersonIcon />
              )
            }
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              color: "white",
              fontSize: { xs: "0.8rem", sm: "1rem" },
              textTransform: "none",
              minWidth: { xs: "90px", sm: "100px" },
            }}
          >
            {logout?.name}
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            disableScrollLock
            sx={{
              "& .MuiPaper-root": {
                minWidth: { xs: "100px", sm: "140px" },
                padding: 0,
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
              },
            }}
          >
            <MenuItem
              sx={{
                padding: { xs: "6px 12px", sm: "10px 16px" },
                fontSize: { xs: "0.9rem", sm: "1rem" },
                color: "#333",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
                borderBottom: "1px solid #e0e0e0",
                "&:last-child": {
                  borderBottom: "none",
                },
              }}
            >
              <NavLink to="/dashboard">Dashboard</NavLink>
            </MenuItem>
            <MenuItem
              sx={{
                padding: { xs: "6px 12px", sm: "10px 16px" },
                fontSize: { xs: "0.9rem", sm: "1rem" },
                color: "#333",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
                borderBottom: "1px solid #e0e0e0",
                "&:last-child": {
                  borderBottom: "none",
                },
              }}
              onClick={handleLogout}
            >
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Button
          onClick={handleLogin}
          sx={{
            color: "white",
            fontSize: { xs: "0.8rem", sm: "1rem" },
            textTransform: "none",
            minWidth: { xs: "90px", sm: "100px" },
          }}
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default LogoutContainer;
