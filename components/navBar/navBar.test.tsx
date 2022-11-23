import React from "react";
// import { create } from "react-test-renderer";
import { render, screen, cleanup } from "@testing-library/react";
import Navbar from "./Navbar";
import NavModal from "./NavModal";

// jest.mock("./Navbar.tsx", () => {
//   return function MockNavbar() {
//     return <body></body>;
//   };
// });


// This is a test for the Navbar component. It tests to see if the component renders correctly.
describe("Navbar", () => {
  test("renders Navbar component", () => {
    const data: any = "data";
    const setData: any = "setData";
    render(<Navbar data={data} setData={setData} />);
  });
});

// Test NavModal component to see if it renders correctly
describe("NavModal", () => {
  test("renders NavModal component", () => {
    const handleLogOut: any = "handleLogOut";
    const data: any = "data";
    const setData: any = "setData";
    const setHandleModal: any = "setHandleModal";
    const handleModal: any = "handleModal";
    render(
      <NavModal
        handleLogOut={handleLogOut}
        data={data}
        setData={setData}
        setHandleModal={setHandleModal}
        handleModal={handleModal}
      />
    );
  });
});