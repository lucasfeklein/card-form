import { CardData } from "../Types";

interface InputsProps {
  cardData: CardData;
  errorMessage: CardData;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleConfirmClick: () => void;
}

const errorBorderStyle = {
  border: "1px solid red",
};

function Inputs({
  cardData,
  handleInputChange,
  handleConfirmClick,
  errorMessage,
}: InputsProps) {
  return (
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
            style={errorMessage.name ? errorBorderStyle : {}}
          />
          {errorMessage.name && <p className="error">{errorMessage.name}</p>}
        </label>
        <label className="label-container">
          CARD NUMBER
          <input
            name="number"
            value={cardData.number}
            type="text"
            placeholder="1234 5678 9123 0000"
            onChange={handleInputChange}
            style={errorMessage.number ? errorBorderStyle : {}}
          />
          {errorMessage.number && (
            <p className="error">{errorMessage.number}</p>
          )}
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
              style={{
                width: "100%",
                border: errorMessage.cvc ? "1px solid red" : "",
              }}
              onChange={handleInputChange}
            />
            {errorMessage.cvc && <p className="error">{errorMessage.cvc}</p>}
          </label>
        </div>
        <button onClick={handleConfirmClick}>Confirm</button>
      </div>
    </div>
  );
}

export default Inputs;
