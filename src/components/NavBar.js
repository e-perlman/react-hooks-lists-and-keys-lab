import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkList=links.map((ref)=>{
    return <a href={'#'+ref} key={ref}>{ref}</a>;
  })

  return <nav>{linkList}</nav>;
}

export default NavBar;
