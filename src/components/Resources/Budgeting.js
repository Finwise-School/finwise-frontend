import React, { useEffect } from 'react';

// Your budgeting page component
const Budgeting = () => {
  // Image, name, and path info (you can still use them if needed)
  const imageSrc = require("../../assets/images/books/blueprint.jpg");
  const name = "The Budgeting Blueprint";
  const path = "https://finwiseschool.gumroad.com/l/fwsbudgetboss";

  useEffect(() => {
    // Redirect to the Gumroad product
    window.location.href = path;
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img src={imageSrc} alt={name} style={{ maxWidth: "300px" }} />
      <h2>{name}</h2>
      <p>Redirecting you to the budgeting product...</p>
      <a href={path}>Click here if you are not redirected automatically.</a>
    </div>
  );
};

export default Budgeting;
