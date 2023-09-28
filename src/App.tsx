function App() {
  return (
    <div className="container">
      <div className="cards-container">
        <div className="front-card">
          <img src="./card-logo.svg" width={80} />
          <p className="card-number">0000 0000 0000 0000</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Jon Doe</p>
            <p>00/00</p>
          </div>
        </div>
        <div className="back-card">
          <p className="cvv-number">000</p>
        </div>
      </div>
      <div className="inputs-container">
        <div className="second-inputs-container">
          <input type="text" />
          <input type="number" />
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default App;
