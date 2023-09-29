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
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    number: "",
    expDate: {
      month: "",
      year: "",
    },
    cvc: "",
  });

  function handleConfirmClick() {
    const errors: {
      name: string;
      number: string;
      expDate: {
        month: string;
        year: string;
      };
      cvc: string;
    } = {
      name: "",
      number: "",
      expDate: {
        month: "",
        year: "",
      },
      cvc: "",
    }; // Initialize errors object with the correct structure
    let hasError = false;

    if (cardData.name.trim() === "") {
      errors.name = "Can't be blank";
      hasError = true;
    }
    if (cardData.number.trim() === "") {
      errors.number = "Can't be blank";
      hasError = true;
    }
    if (cardData.expDate.month.trim() === "") {
      errors.expDate.month = "Can't be blank";
      hasError = true;
    }
    if (cardData.expDate.year.trim() === "") {
      errors.expDate.year = "Can't be blank";
      hasError = true;
    }
    if (cardData.cvc.trim() === "") {
      errors.cvc = "Can't be blank";
      hasError = true;
    }

    setErrorMessage(errors);

    if (!hasError) {
      setConfirm(true);
    }
  }

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
      setErrorMessage((prevError) => ({
        ...prevError,
        expDate: { ...prevError.expDate, [name]: "" },
      }));
    } else {
      setCardData((prevCardData) => ({ ...prevCardData, [name]: value }));
      setErrorMessage((prevError) => ({ ...prevError, [name]: "" }));
    }
  }

  return (
    <div className="container">
      <Cards cardData={cardData} />
      {!confirm ? (
        <Inputs
          cardData={cardData}
          errorMessage={errorMessage}
          handleInputChange={handleInputChange}
          handleConfirmClick={handleConfirmClick}
        />
      ) : (
        <Thanks />
      )}
    </div>
  );
}

export default App;
