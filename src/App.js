import "./App.css";
import DATA from "./data.json";

function Result() {
  return (
    <div className="score-section">
      <p>Your Result</p>

      <section className="score">
        <p>
          <span className="total-score">76</span>
          <br />
          of 100
        </p>
      </section>

      <h2>Great</h2>

      <p className="score-statement">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

function SummaryData() {
  return (
    <div className="summary-section">
      <section className="summary-contents">
        <h2>Summary</h2>

        <ul>
          {DATA.map((data) => {
            return (
              <li key={data.id}>
                <img src={data.icon} />

                <p className="category">{data.category}</p>

                <p className="category-score">
                  <span>{data.score}</span> / 100
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

function Button() {
  return <button>Continue</button>;
}

function Attribution() {
  return (
    <div className="attribution">
      <p>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/nadupoy" target="_blank">Nadupoy</a>.
      </p>
    </div>
  );
}

function Summary() {
  return (
    <div className="summary-section">
      <SummaryData />

      <Button />
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <Result />

      <Summary />

      <Attribution />
    </div>
  );
}
