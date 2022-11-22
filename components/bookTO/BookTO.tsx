import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Button, DatePicker, Space, TimePicker } from "antd";
import "antd/dist/antd.css";
import "./bookTO.css";
import { getFetch } from "../fetchRequests/FetchReq";

//Prop Interface
interface MyProps {
  dateOne: Date;
  setDateOne: any;
  dateTwo: Date;
  setDateTwo: any;
  datesBooked: any;
  setDatesBooked: any;
  bookBoolean: Boolean;
  setBookBoolean: any;
  data: any;
}

//booking component
const BookTO = ({
  dateOne,
  setDateOne,
  dateTwo,
  setDateTwo,
  datesBooked,
  setDatesBooked,
  bookBoolean,
  setBookBoolean,
  data,
}: MyProps) => {
  //pass date start/end to state
  const handleDate: Function = (dates: any) => {
    setDateOne(dates[0]._d);
    setDateTwo(dates[1]._d);
  };

  //calculate dates within booking range
  const getDatesInRange = (dateOne: Date, dateTwo: Date) => {
    //if both date states are true then create dates to fill the range and create an array
    if (dateOne && dateTwo) {
      const date = new Date(dateOne!.getTime());
      const dates: any = [];
      let id: number = 0;

      //for each date within the range, push object (containing date, id and hours) to temp array
      //NOTE: add hours?
      //NOTE: add name of day?
      while (date <= dateTwo!) {
        const newDate = new Date(date).toISOString().split("T")[0];
        dates.push({ date: newDate, id: id });
        date.setDate(date.getDate() + 1);
        id = id + 1;
      }
      setDatesBooked(dates);
      // getFetch(datesBooked, data);

      return dates;
    }
  };

  //on submit, trigger date range calculation
  const handleClick: Function = (e: any) => {
    e.preventDefault();
    getDatesInRange(dateOne, dateTwo);
    setBookBoolean(true);
    if (data) {
      if (datesBooked) {
        getFetch(datesBooked, data);
      }
    }
  };

  useEffect(() => {});

  return (
    <div className="bookTOContainer">
      <h1>Book Time Off Here</h1>
      <Space>
        <DatePicker.RangePicker
          picker="date"
          onChange={(dates: any) => handleDate(dates)}
        />
        <Button onClick={(e) => handleClick(e)} type="primary">
          Submit Request
        </Button>
      </Space>
      <div className="datesList">
        {bookBoolean ? (
          <div>
            <h2>You have requested:</h2>{" "}
            {Array.isArray(datesBooked) &&
              datesBooked.map((date: any) => (
                <div className="dateBookingList" key={date.id}>
                  <p>
                    Date {date.id} is: {date.date}
                  </p>
                </div>
              ))}
            <button onClick={() => setBookBoolean(false)}>Exit</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BookTO;
