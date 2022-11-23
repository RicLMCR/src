import React from "react";

import "./App.css";
import Navbar from "./components/navBar/Navbar";
import { useState } from "react";
import UserInfo from "./components/userInfo/UserInfo";
import BookTO from "./components/bookTO/BookTO";
import SamsComponent from "./components/samsComponent/SamsComponent";

function App() {
  //user information on login
  const [data, setData] = useState<any>("");

  //booking information
  const [dateOne, setDateOne] = useState<Date>();
  const [dateTwo, setDateTwo] = useState<Date>();
  const [datesBooked, setDatesBooked] = useState<any>([]);
  const [bookBoolean, setBookBoolean] = useState<Boolean>(false);

  console.log(data);
  console.log("dates booked:", datesBooked);
  console.log(data.userId, " I am user id");
  console.log(data._id, " I am _id");



  return (
    <div className="App">
      <Navbar setData={setData} data={data} />
      <UserInfo toAllowance={data} />
      <BookTO
        dateOne={dateOne!}
        setDateOne={setDateOne}
        dateTwo={dateTwo!}
        setDateTwo={setDateTwo}
        datesBooked={datesBooked}
        setDatesBooked={setDatesBooked}
        bookBoolean={bookBoolean}
        setBookBoolean={setBookBoolean}
        data={data}
      />
    </div>
  );
}

export default App;
