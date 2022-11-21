import React from "react";
// import { create } from "react-test-renderer";
import { render, screen, cleanup } from "@testing-library/react";
import Navbar from "./Navbar";

// jest.mock("./Navbar.tsx", () => {
//   return function MockNavbar() {
//     return <body></body>;
//   };
// });

describe("testing Navbar rendering", (): any => {
  const data: any = "data";
  const setData: any = "setData";
  it("should render Navbar", (): any => {
    const nav: any = render(<Navbar data={data} setData={setData} />);
    expect(nav).toBeTruthy();
  });
});
