function Thanks() {
  return (
    <div className="thanks-container">
      <img src="/icon-complete.svg" />
      <h2>THANK YOU!</h2>
      <p style={{ color: "hsl(279, 6%, 55%)" }}>
        We've added your card details
      </p>
      <button style={{ width: "50%" }}>Continue</button>
    </div>
  );
}

export default Thanks;
