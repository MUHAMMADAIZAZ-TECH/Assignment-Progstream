import React, { useState } from "react";
import HeaderLogo from "../../../Images/Group 460.png";
import { NavData } from "@/Components/Mockups/Mockup";
import { Logo, Box, Navigation } from "@/Components/UI-Components";
import { FiAlignJustify } from "react-icons/fi";
export default function Header() {
  const [menuToggle, setMenuToggle] = useState(true);
  return (
    <header id="header">
      <Logo Path={HeaderLogo} className="header-logo" width={175} height={70} />
      <Box Class="red-box" />
      <div className="links">
        <Navigation NavData={NavData} id={menuToggle ? "nav" : ""} />
        <i className="icon" onClick={() => setMenuToggle(!menuToggle)}>
          <FiAlignJustify style={{ width: "50px", height: "40px" }} />
        </i>
      </div>
    </header>
  );
}
