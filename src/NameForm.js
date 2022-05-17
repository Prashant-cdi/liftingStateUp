import React, { useState } from "react";
export function NameForm() {
  var [name, setName] = useState("Prashant");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(name);
    document.title = name;
  };

  const changeValue = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name</label>
        <br />
        <input type="text" id="name" value={name} />
        <br />
        Essay:
        <br />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={changeValue}
        ></textarea>
        <br />
        <select name="" id="select" onChange={changeValue} multiple={true}>
          <option value="Helloworld">Helloworld</option>
          <option value="Byeworld">Byeworld</option>
          <option value="ThisistheWorld">ThisistheWorld</option>
        </select>
        <br />
        <input type="file" name="file" id="file" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}
