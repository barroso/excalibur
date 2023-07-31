import React from "react";
import MenuItem from "./MenuItem";
import { useState } from "react"; 


export default function Menu() {
  const [activeItem, setActiveItem] = useState<string>("Your Dream");
  const items = [
    {
      title: "Home",
      to: "/"
    },
    {
      title: "Deals",
      to: "/"
    },
    {
      title: "Stores",
      to: "/"
    },
    {
      title: "Help & Contact",
      to: "/about"
    }
  ]
  return (
      <div className="hidden md:flex items-center space-x-1">
        {items.map((item, index) => (
          <MenuItem key={index} title={item.title} to={item.to} active={activeItem === item.title} onClick={() => setActiveItem(item.title)}/>  
        ))} 
      </div>
    );
}