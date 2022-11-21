import React, {useState} from "react";
import { render, screen } from "@testing-library/react";
import UserInfo from "./UserInfo";
import { link } from "fs";

// it("renders allocated holidays", () => {
//   render(<UserInfo />);
//   const linkElement = screen.getByText(/Sign in/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("test ternary operator", ()=>{
  render(<UserInfo/>);
  const text = screen.getByText(/p/i);
  expect(text).toEqual("*");
})
