interface MyProps {
  setDate: React.Dispatch<React.SetStateAction<string | undefined>>;
  setDateModal: React.Dispatch<React.SetStateAction<boolean>>;
  setHoursModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookDatesModal = ({ setDate, setDateModal, setHoursModal }: MyProps) => {
  return (
    <div>
      <input
        onKeyDown={(e) => e.preventDefault()}
        type="date"
        placeholder="dd/mm/yyyy"
        id="dateInput"
        onChange={(e) => {
          e.preventDefault();
          setDate(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setHoursModal(true);
          setDateModal(false);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default BookDatesModal;
