import { useState } from "react";

function App() {
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
      <div className="cards-container">
        <div className="front-card">
          <img src="./card-logo.svg" width={80} />
          <p className="card-number">
            {cardData.number
              ? cardData.number
                  .replace(/\D/g, "") // Remove non-digit characters
                  .padEnd(16, "0") // Pad to 16 characters with '0's
                  .replace(/(\d{4})/g, "$1 ") // Add a space after every four digits
              : "0000 0000 0000 0000"}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{cardData.name ? cardData.name.toUpperCase() : "JOE DOE"}</p>
            <p>
              {cardData.expDate.month
                ? cardData.expDate.month.padStart(2, "0")
                : "00"}
              /
              {cardData.expDate.year
                ? cardData.expDate.year.padStart(2, "0")
                : "00"}
            </p>
          </div>
        </div>
        <div className="back-card">
          <p className="cvv-number">
            {cardData.cvc ? cardData.cvc.padStart(3, "0") : "000"}
          </p>
        </div>
      </div>
      <div className="inputs-container">
        <div className="second-inputs-container">
          <label className="label-container">
            CARDHOLER NAME
            <input
              name="name"
              value={cardData.name}
              type="text"
              placeholder="Joe Doe"
              onChange={handleInputChange}
            />
          </label>
          <label className="label-container">
            CARD NUMBER
            <input
              name="number"
              value={cardData.number}
              type="text"
              placeholder="1234 5678 9123 0000"
              onChange={handleInputChange}
            />
          </label>
          <div style={{ display: "flex", gap: "15px" }}>
            <div>
              <label className="label-container">
                EXP. DATE (MM/YY)
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <input
                    value={cardData.expDate.month}
                    name="month"
                    style={{ width: "70px" }}
                    type="number"
                    maxLength={2}
                    placeholder="MM"
                    onChange={handleInputChange}
                  />
                  <input
                    value={cardData.expDate.year}
                    name="year"
                    style={{ width: "70px" }}
                    type="number"
                    maxLength={2}
                    placeholder="YY"
                    onChange={handleInputChange}
                  />
                </div>
              </label>
            </div>
            <label style={{ width: "100%" }} className="label-container">
              CVC
              <input
                value={cardData.cvc}
                name="cvc"
                type="number"
                placeholder="123"
                maxLength={3}
                style={{ width: "100%" }}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default App;
