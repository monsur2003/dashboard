import React from "react";

const Link = ({ route }) => {
  // console.log(route.name);

  return (
    <li className="mr-12 hover:bg-pink-600 duration-500 rounded-md">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
