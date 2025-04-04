"use client";
import React from "react";
import { Toaster } from "react-hot-toast";

const Prividers = ({ children }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default Prividers;
