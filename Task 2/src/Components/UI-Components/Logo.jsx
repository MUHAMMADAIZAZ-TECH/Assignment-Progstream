import React from "react";
import Image from "next/image";
const Logo = ({ className, Path, height, width }) => {
  return (
    <div className={className}>
      <Image src={Path} alt="Logo" height={height} width={width} />
    </div>
  );
};
export default Logo;
