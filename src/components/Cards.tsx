import { CardData } from "../Types";

function Cards({ cardData }: { cardData: CardData }) {
  return (
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
  );
}

export default Cards;
