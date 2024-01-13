import "./App.css";
import DATA from "./data.json";

function Result() {
  return (
    <div>
      <p>Your Result</p>

      <section>
        <p>
          <span>76</span>
          <br />
          of 100
        </p>
      </section>

      <h2>Great</h2>

      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

function SummaryData() {
  return (
    <div>
      {DATA && DATA.map((data) => {
        return (
          <div key={data.id}>
            <img src={data.icon} key={data.key} />

            <p>{data.category}</p>

            <section>
              <span>{data.score}</span> / 100
            </section>
          </div>
        );
      })}
    </div>
  );
}

function Button() {
  return <button>Continue</button>;
}

function Summary() {
  return (
    <div>
      <SummaryData />

      <Button />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Result />

      <Summary />
    </div>
  );
}
