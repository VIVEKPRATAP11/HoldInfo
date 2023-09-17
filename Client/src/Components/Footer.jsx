import React from "react";

const Footer = () => {
  return (
    <>
    <hr className="opacity display-grid" />
      <div >
        <div className="display-between width paddingFooter">
          <p className="pointer">Copyright © 2019 HodlInfo.com</p>
          <p className="pointer">Support</p>
        </div>

        <div className="center fixed">
          <button className="endBtn">Add Holdinfo to Home Screen</button>
        </div>
      </div>
    </>
  );
};

export default Footer;
