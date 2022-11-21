import { Button } from "antd";
import { useState } from "react";
import BookDatesModal from "./BookDatesModal";
import BookTimeModal from "./BookTimeModal";
import BookingMap from "./BookingMap";

//! Props Interface
interface MyProps {
  bookingArray: any;
  setBookingArray: React.Dispatch<any>;
}

const BookTO = ({ bookingArray, setBookingArray }: MyProps) => {
  //! States
  const [hours, setHours] = useState<string>();
  const [date, setDate] = useState<string>();
  const [dateModal, setDateModal] = useState<boolean>(false);
  const [hoursModal, setHoursModal] = useState<boolean>(false);
  const [submitVisible, setSubmitVisible] = useState<boolean>(false);

  //! Handle Submit
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  //!HandleFormSubmit
  const handleFormSubmit = (event: any) => {
    // event.preventDefault();
    if (date && hours) {
      setBookingArray([...bookingArray, { date: date, hours: hours }]);

      console.log(bookingArray);
    } else {
      console.log("pick right parameters");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Book Time Off Here</h1>
        {dateModal && hoursModal ? null : (
          <button
            onClick={() => {
              setDateModal(true);
            }}
          >
            Book a Date
          </button>
        )}
        {dateModal ? (
          <BookDatesModal
            setDate={setDate}
            setHoursModal={setHoursModal}
            setDateModal={setDateModal}
          />
        ) : null}
        {hoursModal ? (
          <BookTimeModal
            setHours={setHours}
            setHoursModal={setHoursModal}
            setSubmitVisible={setSubmitVisible}
            handleFormSubmit={handleFormSubmit}
          />
        ) : null}
        <br />
        <BookingMap bookingArray={bookingArray} />

        <br />
      </form>
    </div>
  );
};

export default BookTO;
