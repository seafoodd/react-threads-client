import React, { useContext } from "react";
import { ThemeContext } from "../theme-provider";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { FaRegMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { logout, selectIsAuthenticated } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {CiLogout} from 'react-icons/ci';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <div>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">Social Network</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem
            className="lg:flex text-3xl cursor-pointer"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <FaRegMoon /> : <LuSunMedium />}
          </NavbarItem>
          <NavbarItem>
            {isAuthenticated && (
              <Button
                color="default"
                variant={"flat"}
                className={"gap-2"}
                onClick={handleLogout}
              ><CiLogout/> <span>Выйти</span></Button>
            )}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default Header;
