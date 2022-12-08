import { Button, DatePicker, Space, TimePicker } from "antd";
import "antd/dist/antd.css";
import "./bookTO.css";
import { getFetch } from "../fetchRequests/FetchReq";
import { logDOM } from "@testing-library/react";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

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
  setGetDay: React.Dispatch<React.SetStateAction<string>>;
  getDay: string;
  loading: boolean;
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
  setGetDay,
  getDay,
  loading,
}: MyProps) => {
  const [hoursArray, setHoursArray] = useState<number[]>([]);
  const [datesArray, setDatesArray] = useState<Object[]>([]);
  const [datesArray2, setDatesArray2] = useState<Object[]>([]);
  const [defaultHours, setDefaultHours] = useState<number | undefined>();
  //pass date start/end to state
  const handleDate: Function = (dates: any) => {
    setDateOne(dates[0]._d);
    setDateTwo(dates[1]._d);
  };

  //Calculate dates within booking range
  const getDatesInRange = (dateOne: Date, dateTwo: Date) => {
    //if both date states are true then create dates to fill
    if (dateOne && dateTwo) {
      const date = new Date(dateOne!.getTime());
      const dates: any = [];
      let id: number = 0;
      let getDay: string;

      //for each date within the range, push object (containing date, day, id and hours) to temp array
      while (date <= dateTwo!) {
        getDay = date.toString().substring(0, 3);
        const newDate = new Date(date).toISOString().split("T")[0];
        dates.push({ date: newDate, id: id, day: getDay });
        date.setDate(date.getDate() + 1);
        id = id + 1;
        console.log("dates is:", date);
      }
      setDatesBooked(dates);
      return dates;
    }
  };

  //On submit, trigger date range calculation
  const handleDates: Function = (e: any) => {
    e.preventDefault();
    if (dateOne || dateTwo) {
      getDatesInRange(dateOne, dateTwo);
      setBookBoolean(true);
    } else {
      alert("please enter two dates");
    }
  };

  //Add selected hours to booking object
  const handleHours: Function = (hours: number, id: number) => {
    console.log("handle hours", hours, id);
    datesBooked[id].hours = hours;
    setDatesArray(datesBooked);
  };

  //Post booking
  const handleSubmitBooking = () => {
    if ("hours" in datesBooked[datesBooked.length - 1]) {
      getFetch(datesBooked, data);
    }
    //! verify user id available
    console.log("handlesubmit", datesBooked, data);
    setBookBoolean(false);

    // pop up
    alert("Congrats on your bookings!");
    console.log("Congrats on your bookings!");

    //clear date states
    setDateOne(null);
    setDateTwo(null);
  };

  //Hours Default Value
  let hours: number;

  if (loading === true) {
    return (
      <div className="loading-circle">
        <ClipLoader color={"#000000"} size={50} />
      </div>
    );
  } else {
    return (
      <div className="bookTOContainer">
        <h1>Book Time Off Here</h1>
        <Space>
          <DatePicker.RangePicker
            picker="date"
            onChange={(dates: any) => handleDate(dates)}
          />
          <button
            className="dateBookingButtons"
            onClick={(e) => handleDates(e)}
          >
            Confirm Dates
          </button>
        </Space>
        <div className="datesList">
          {bookBoolean ? (
            <div>
              <h2>You have requested:</h2>{" "}
              {datesBooked.map((date: any, index: any) => {
                if (datesBooked) {
                  switch (date.day) {
                    case "Sun":
                    case "Sat":
                      hours = 0;

                      break;
                    case "Mon":
                    case "Tue":
                    case "Wed":
                    case "Thu":
                      hours = 8;
                      break;
                    case "Fri":
                      hours = 5;

                      break;
                  }
                }
                date.hours = hours;

                //Max hours
                let maxHour: number;
                if (date.day === "Fri") {
                  maxHour = 5;
                } else if (date.day === "Sat" || date.day === "Sun") {
                  maxHour = 0;
                } else {
                  maxHour = 8;
                }
                if (date.day)
                  return date.day === "Sat" || date.day === "Sun" ? null : (
                    <div className="dateBookingList" key={index}>
                      <p>
                        {date.day} - {date.date}
                      </p>
                      <p>Enter Hours</p>
                      <input
                        className="dateBookingHoursInput"
                        type="number"
                        max={maxHour}
                        min="0"
                        onChange={(e) => handleHours(e.target.value, index)}
                        defaultValue={hours}
                        required
                      />
                    </div>
                  );
              })}
              <div className="bookingButtonContainer">
                <button
                  className="dateBookingButtons buttonSubmit"
                  onClick={handleSubmitBooking}
                >
                  Submit
                </button>
                <button
                  className="dateBookingButtons buttonCancel"
                  onClick={() => setBookBoolean(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
};

export default BookTO;
