//! Imports
import "../../App.css";
import { useState } from "react";


//! Props Interface
interface MyProps {
  handleLogOut: any;
  data: any;
  setData: React.Dispatch<React.SetStateAction<string>>;
  setHandleModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleModal: boolean;
  setLoading: any
}

//! Function
const NavModal = ({
  handleLogOut,
  data,
  setData,
  handleModal,
  setLoading
}: MyProps): any => {
  // States
  const [userName, setUsername] = useState<string>("");
  const [userPassword, setPassword] = useState<string>("");
  const [userCreated, setUserCreated] = useState<any>("");


  // Post request to create new user
  const handleCreate = (e: any) => {
    e.preventDefault();

    fetch("/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        userPassword: userPassword,
        userRole: 'Employee',
        timeOff: {
          PTO: {
            allowance: 95,
            available: 95,
            booked: 0,
          },
          sickDays: 7
        }
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setUserCreated(true);
  };


  //Submit Function
  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(`/api/users/userName/${userName}/userPassword/${userPassword}`)
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log(data);
    setLoading(true);
    setUsername("");
    window.setTimeout(() => {
      setLoading(false);
    }, 1000);

  };



  return handleModal ? (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        {data ? (
          <div>
            <button onClick={handleLogOut}>Log Out</button>
          </div>
        ) : (
          <div className="form-group">
            <label>
              <input
                placeholder="User name"
                className="input-nav"
                type="text"
                value={userName}
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
            <label>
              <input
                placeholder="Password"
                className="input-nav"
                type="password"
                value={userPassword}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <input className="button-nav" type="submit" value="Log in" />
            <input className="button-nav" type="submit" value="Register" onClick={handleCreate} />
            {userCreated ? <p className="user-created-p">User created</p> : null}
          </div>
        )}
      </form>
    </div>
  ) : null;
}

export default NavModal;
