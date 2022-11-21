import { useState } from "react";
import "../../App.css";
import logo from "../../store86-logo.png";
import NavModal from "./NavModal";

//Prop Interface
interface MyProps {
  data: any;
  setData: any;
}
// Pass data to app.tsx
const Navbar = ({ setData, data }: MyProps) => {
  //States
  const [handleModal, setHandleModal] = useState<boolean>(false);

  //logout
  const handleLogOut = () => {
    console.log("logout");
    setData("");
  };

  return (
    <div className="Nav-bar">
      <div className="img-div">
        <img className="logo-nav" src={logo} alt="logo" />
      </div>
      <h2 className="h1-nav">Paid Time Off </h2>
      <h2 className="h1-nav">Logged in: {data.userName}</h2>
      <NavModal
        handleLogOut={handleLogOut}
        data={data}
        setData={setData}
        setHandleModal={setHandleModal}
        handleModal={handleModal}
      />
      <div className="signInContainer">
        <p
          onClick={() => {
            handleModal ? setHandleModal(false) : setHandleModal(true);
          }}
        >
          Sign In
        </p>
      </div>
    </div>
  );
};

export default Navbar;
