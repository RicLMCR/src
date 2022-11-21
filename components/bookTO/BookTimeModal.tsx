interface MyProps {
  setHours: React.Dispatch<React.SetStateAction<string | undefined>>;
  setHoursModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSubmitVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleFormSubmit: any;
}

const BookTimeModal = ({
  setHours,
  setHoursModal,
  setSubmitVisible,
  handleFormSubmit,
}: MyProps) => {
  return (
    <div>
      <input
        type="number"
        maxLength={1}
        onChange={(e) => {
          e.preventDefault();
          setHours(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setHoursModal(false);
          setSubmitVisible(true);
          handleFormSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default BookTimeModal;
