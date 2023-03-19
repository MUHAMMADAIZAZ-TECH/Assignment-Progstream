import React from "react";
import FooterLogo from "../../../Images/footer-logo.png";
import { Logo, Navigation } from "@/Components/UI-Components";
import { ContactUs, NavData } from "@/Components/Mockups/Mockup";

export default function Footer() {
  return (
    <footer>
      <section id="sec-one">
        <Logo
          Path={FooterLogo}
          className="footer-logo"
          height="100%"
          width="100%"
        />
        <div className="contact" id="contact-use">
          <h3>Contact Info</h3>
          {ContactUs?.map((item, index) => (
            <p key={index} className={item.className}>
              {item.Text}
            </p>
          ))}
        </div>
        <Navigation NavData={NavData} id={"footer-nav-link"} />
      </section>
      <section id="sec-two">
        <h2>Logo © 2020</h2>
      </section>
    </footer>
  );
}
