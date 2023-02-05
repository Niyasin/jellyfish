function App() {
  return (
    <div className="container">
      <div className="form">
        <h1>Registration</h1>
        <div className="inputwrap">
          <div className="horizontal">
            <input placeholder="First Name"/>
            <input placeholder="Last Name"/>
          </div>
          <input placeholder="Email"/>
          <input placeholder="Phone"/>
          <div className="horizontal">
            <input placeholder="Pronouns"/>
            <input placeholder="Date Of Boirth"/>
          </div>
          <input placeholder="Address"/>
        <div className="button">Submit</div>
        </div>
      </div>
      <div class="imagewrap">
        <img src="./1.png"/>
      </div>
      </div>
  );
}

export default App;
