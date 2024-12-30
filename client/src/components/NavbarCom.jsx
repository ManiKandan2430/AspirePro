import React, { useEffect, useState, useContext } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
} from "@nextui-org/react";
import Logo from "./Logo";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import LogoutContainer from "./LogoutContainer";

const NavbarCom = ({current}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const user = current?.role  

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        {current?(
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />):null
        }
        <NavbarBrand>
          <Link href="/" color="foreground">
            <Logo />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Links */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Login/Logout Button */}
      <NavbarContent justify="end">
        <NavbarItem className="flex bg-blue-500 hover:bg-blue-600 py-1 px-3 rounded-xl">
          <LogoutContainer logout={current} />
        </NavbarItem>
      </NavbarContent>

      {/* Collapsible Menu for Mobile */}
      <NavbarMenu open={isMenuOpen}>
        {links.map((link) => {
          const { text, path, icon } = link;
          if (user !== "admin" && path === "/dashboard/admin") return;
          return (
            <NavLink
              to={path}
              key={text}
              className="block p-2 rounded text-gray-700 hover:bg-blue-500 hover:text-white transition-colors"
              size="lg"
            >
              <span className="px-4">{icon}</span>
              {text}
            </NavLink>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};
export default NavbarCom;
