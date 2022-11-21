import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Button, DatePicker, Space, TimePicker, version } from "antd";
import "antd/dist/antd.css";
import "./bookTO.css";
import { getFetch } from "../fetchRequests/FetchReq";

const BookTO = () => {
  const [dateOne, setDateOne] = useState<Date>();
  const [dateTwo, setDateTwo] = useState<Date>();
  const [datesBooked, setDatesBooked] = useState<any>([]);
  const [bookBoolean, setBookBoolean] = useState<Boolean>(false);

  //pass date start/end to state
  const handleDate: Function = (dates: any) => {
    setDateOne(dates[0]._d);
    setDateTwo(dates[1]._d);
  };

  //calculate dates within booking range
  const getDatesInRange = (
    dateOne: Date | undefined,
    dateTwo: Date | undefined
  ) => {
    //if both date states are true then create array
    if (dateOne && dateTwo) {
      const date = new Date(dateOne!.getTime());
      const dates: any = [];
      const newDate = new Date(date).toISOString().split("T")[0];
      let id: number = 0;

      //push object (containing date, id and hours) to temp array
      while (date <= dateTwo!) {
        dates.push({ date: newDate, id: id });
        date.setDate(date.getDate() + 1);
        id = id + 1;
      }
      setDatesBooked(dates);
      getFetch(dates);
      return dates;
    }
  };

  //on submit
  const handleClick: Function = (e: any) => {
    e.preventDefault();
    getDatesInRange(dateOne, dateTwo);
    setBookBoolean(true);
    getFetch("Booking Your Dates");
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
        {bookBoolean ? <h2>You have requested:</h2> : ""}
        {datesBooked.map((date: any) => (
          <div className="dateBookingList" key={date.id}>
            <p>
              Date {date.id} is: {date.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookTO;
