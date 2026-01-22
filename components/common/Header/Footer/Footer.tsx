import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-400/50 text-white py-2">
      <div className="container">
        <p className="text-black font-semibold text-center">
          © {currentYear} Suhas. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
