export const getFetch = async (datesBooked: any, data: any) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      dates: datesBooked,
      _id: data._id,
    }),
  };

  try {

    const response: any = await fetch(
      `/api/users/${data._id}/booking`,
      requestOptions
    );
    const bookingData = await response.json();
  }
  catch (error: any) {
    console.log(error.message);
  }
};
