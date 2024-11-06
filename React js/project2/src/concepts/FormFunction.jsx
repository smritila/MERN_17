import React, { useState } from "react";

function FormFunction() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  function handleSubmit(event) {
    alert(
      `FirstName:${firstName}, lastName: ${lastName} , email: ${email} , phone: ${phone}`
    );
    let obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    };
    console.log(obj);
    event.preventDefault();
  }

  return (
    <div>
      {console.log(firstName)}
      {console.log(lastName)}
      {console.log(email)}
      {console.log(phone)}
      <form>
        <label for="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <br />
        <label for="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <br />
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <lable for="phone">Phone</lable>
        <input
          type="number"
          name="phone"
          id="phone"
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormFunction;
