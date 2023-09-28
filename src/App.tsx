function App() {
  return (
    <div className="container">
      <div className="cards-container">
        <div className="front-card">
          <img src="./card-logo.svg" />
          <p>0000 0000 0000 0000</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Name</p>
            <p>Date</p>
          </div>
        </div>
        <div className="back-card"></div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
