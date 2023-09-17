import React from "react";

const Midcard = ({ percent, time }) => {
  return (
    <>
      <div className="center" >
        <p className="top">{percent}</p>
        <p className="bot">{time}</p>
      </div>
    </>
  );
};

export default Midcard;
