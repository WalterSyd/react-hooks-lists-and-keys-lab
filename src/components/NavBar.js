import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
//using map to iterate and create a new array under nav links of <a> tags for each link
  const navLinks = links.map((link, index) => {
    return <a key={index} href={`#${link}`}>{link}</a>;
  });
  return (
    <div>
      <nav>{navLinks}</nav>
    </div>
  );
}

export default NavBar;

