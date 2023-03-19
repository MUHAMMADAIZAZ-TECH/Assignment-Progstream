import React from "react";
import Image from "next/image";
const ProductBox = ({ className, path }) => {
  return (
    <div className="product-box">
      <Image src={path} className={className} alt="Logo" />
    </div>
  );
};
export default ProductBox;
