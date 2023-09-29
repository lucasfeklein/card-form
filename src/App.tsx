import { useState } from "react";
import Cards from "./components/Cards";
import Inputs from "./components/Inputs";
import Thanks from "./components/Thanks";

function App() {
  const [confirm, setConfirm] = useState(false);
  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    expDate: {
      month: "",
      year: "",
    },
    cvc: "",
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    let { name, value } = e.target;

    if (name === "cvc") {
      value = value.slice(0, 3);
    }

    if (name === "number") {
      // Remove any spaces and non-digit characters from the input value
      value = value.replace(/\D/g, "");

      // Add spaces after every fourth digit using regular expression
      value = value.replace(/\d{4}(?=\d)/g, "$& ");

      // Limit the input to 19 characters (16 digits + 3 spaces)
      value = value.slice(0, 19);
    }

    if (name === "month" || name === "year") {
      value = value.slice(0, 2);
      setCardData((prevCardData) => ({
        ...prevCardData,
        expDate: { ...prevCardData.expDate, [name]: value },
      }));
    } else {
      setCardData((prevCardData) => ({ ...prevCardData, [name]: value }));
    }
  }

  return (
    <div className="container">
      {!confirm ? (
        <>
          <Cards cardData={cardData} />
          <Inputs cardData={cardData} handleInputChange={handleInputChange} />
        </>
      ) : (
        <Thanks />
      )}
    </div>
  );
}

export default App;
