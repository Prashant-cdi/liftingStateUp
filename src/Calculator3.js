import { useState } from "react";

export function Calculator3() {
  var [celcius, setCelcius] = useState("");
  var [fahrenheit, setFahrenheit] = useState("");

  return (
    <>
      <Temperature
        id="c"
        value={celcius}
        onTempChange={setCelcius}
        callbackfun={setFahrenheit}
      />
      <Temperature
        id="f"
        value={fahrenheit}
        onTempChange={setFahrenheit}
        callbackfun={setCelcius}
      />
      <Boiling celcius={celcius} />
    </>
  );
}

const tempObject = {
  c: "Celcius",
  f: "Fahrenheit",
};

const Boiling = (props) => {
  if (props.celcius >= 100) return <p>The water will boil</p>;
  return <p>The water will not boil</p>;
};

const Temperature = ({ id, value, onTempChange, callbackfun }) => {
  function handleChange(e) {
    if (id === "c") {
      onTempChange(e.target.value);
      callbackfun((e.target.value * 9) / 5 + 32);
    } else {
      onTempChange(e.target.value);
      callbackfun(((e.target.value - 32) * 5) / 9);
    }
  }

  return (
    <>
      <h2>The temperature in {tempObject[id]}</h2>
      <input type="number" value={value} onChange={handleChange} />
    </>
  );
};
