import { useState } from "react";
import "../../App.css";
import NavModal from "./NavModal";

let logo = require('./Store86-logo.png') 

//Prop Interface
interface MyProps {
  data: any;
  setData: any;
  setUserBookings: any,
  userBookings: any
  setLoading: any
}
// Pass data to app.tsx
const Navbar = ({ setData, data, setLoading }: MyProps) => {
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
        <img className="logo-nav" alt="logo" src={logo} />
      </div>
      <h2 className="h1-nav">Paid Time Off </h2>
      <h2 className="h1-nav">Logged in: {data.userName}</h2>
      <NavModal
        handleLogOut={handleLogOut}
        data={data}
        setData={setData}
        setHandleModal={setHandleModal}
        handleModal={handleModal}
        setLoading={setLoading}
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
