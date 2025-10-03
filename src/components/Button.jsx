import React from "react";

const Button = ({ text, color, className, txtcolor1 , textclass,bgcolor }) => {
  return (
    <div className={`flex gap-2 justify-between hover:scale-101 bg-${bgcolor}  rounded-full ${className} trastion-all duration-300 items-center cursor-pointer`}>
      <div className={`bg-${color} rounded-full text-${txtcolor1} size-10 flex justify-center items-center`}>
     <i class="ri-book-line"></i>
      </div>
      <p className={`${textclass}`}>{text}</p>
    </div>
  );
};

export default Button;
