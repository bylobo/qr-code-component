import "./App.scss";
import qr from "./image/qr-code.png";

function App() {
  return (
    <>
      <div className="container">
        <img src={qr} alt="as" />
        <div className="all-text">
          <h2>
            Improve your front-end <br /> skills by building projects
          </h2>
          <p>
            Scan the QR code to visit Frontend <br /> Mentor and take your
            coding skills to <br /> the next level
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
