interface MyProps {
  bookingArray: any;
}

const BookingMap = ({ bookingArray }: MyProps) => {
  console.log(bookingArray, "This is the booking Map");
  return (
    <div>
      <h1>Mapping through bookings</h1>
      {bookingArray.map((item: any, index: any) => {
        return (
          <div key={index}>
            <p key={index}>{item.date}</p>
            <p key={index}>{item.hours}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BookingMap;
