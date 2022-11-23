export const getFetch = async (datesBooked: any, data: any) => {
  console.log("getFetch:", datesBooked)
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      dates: datesBooked,
      userId: data.userId,
    }),
  };

  try {
    const response: any = await fetch(`/api/bookings/`,
      requestOptions
    );
    const bookingData = await response.json();
  }
  catch (error: any) {
    console.log(error.message);
  }
};
