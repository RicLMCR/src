import BookTO from "../components/bookTO/BookTO";
import { render, screen } from "@testing-library/react";

//1: test to check calendar renders - passed
//2: test to check list of dates render - passed

describe.skip("calendar render", (): any => {
  const dateOne: any = "11th May 2022";
  const setDateOne: any = "set Date 1";
  const dateTwo: any = "12th May 2022";
  const setDateTwo: any = "set Date 2";
  const datesBooked: any = "date 1, date 2, date 3";
  const setDatesBooked: any = "set dates booked";
  const bookBoolean: Boolean = true;
  const setBookBoolean: any = "set Boolean";
  const data: any = "data";
  const getDay: any = "getDay";
  const setGetDay: any = "setGetDay";
  const loading: boolean = false;


  it("should render", () => {
    const cal = render(
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
        getDay={getDay}
        setGetDay={setGetDay}
        loading={loading}
      />
    )
    const date1 = screen.getByText(/11th May 2022/)
    expect(date1).toBeInTheDocument()
      ;

    //1: test to check calendar renders 
    // expect(cal).toBeTruthy();

    //2: test to check list of dates render
    // const bookingConfirmation = screen.getByText(/You have requested:/)
    // expect(bookingConfirmation).toBeInTheDocument();
  });
});
