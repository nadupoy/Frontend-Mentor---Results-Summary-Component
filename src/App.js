import "./App.css";

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

function ResultsSummary({data}) {
  return (
    <div>
      <img src={data.icon} alt="category-icon" />
      <p>{data.category}</p>
      <section>
        <p>
          <span>{data.score}</span> / 100
        </p>
      </section>
    </div>
  );
}

function Button() {
  return <button>Continue</button>;
}

function Summary() {
  return (
    <div>
      <ResultsSummary />

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
