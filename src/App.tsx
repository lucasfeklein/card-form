function App() {
  return (
    <div className="container">
      <div className="cards-container">
        <div className="front-card">
          <img src="./card-logo.svg" width={80} />
          <p className="card-number">0000 0000 0000 0000</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>JOE DOE</p>
            <p>00/00</p>
          </div>
        </div>
        <div className="back-card">
          <p className="cvv-number">000</p>
        </div>
      </div>
      <div className="inputs-container">
        <div className="second-inputs-container">
          <label className="label-container">
            CARDHOLER NAME
            <input type="text" placeholder="Joe Doe" />
          </label>
          <label className="label-container">
            CARD NUMBER
            <input type="number" placeholder="1234 5678 9123 0000" />
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
                    style={{ width: "70px" }}
                    type="number"
                    placeholder="MM"
                  />
                  <input
                    style={{ width: "70px" }}
                    type="number"
                    placeholder="YY"
                  />
                </div>
              </label>
            </div>
            <label className="label-container">
              CVC
              <input
                type="number"
                placeholder="123"
                style={{ width: "100%" }}
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
