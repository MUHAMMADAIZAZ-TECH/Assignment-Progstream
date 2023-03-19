import React from "react";

const Navigation = ({ NavData, id }) => {
  return (
    <nav id={id}>
      <ul>
        {NavData?.map((data, index) => (
          <li key={index}>
            <a href={data.Link}>{data.Title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
