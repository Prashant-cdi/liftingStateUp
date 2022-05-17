const temp = {
  c: "celcius",
  f: "fahrenheit",
};
var val;

function BoilingVerdict(props) {
  if (props.celcius >= 100) {
    console.log("1");
    return <p>The water would boil.</p>;
  }
  console.log(props.celcius);
  return <p>The water would not boil.</p>;
}

function Temp(props) {
  const handleChange = (e) => {
    if (e.target.id === "c") {
      console.log("this is running c");
      val = (e.target.value * 9) / 5 + 32;
      document.getElementById("f").value = val;
    }

    if (e.target.id === "f") {
      console.log("this is running f");
      val = ((e.target.value - 32) * 5) / 9;
      document.getElementById("c").value = val;
    }
  };

  return (
    <>
      <h1>Temperature in {temp[props.id]}</h1>
      <input type="text" onChange={handleChange} id={props.id} />
    </>
  );
}

export function Calculator2() {
  return (
    <>
      <Temp id={"c"} />
      <Temp id={"f"} />
    </>
  );
}
