import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(
          firstName,
          lastName,
          address,
          email,
          contact,
          gender
      );
  };

  const handleReset = () => {
      setFirstName("");
      setLastName("");
      setAddress("");
      setEmail("");
      setContact("");
      setGender("male");
  };

  return (
    <div className="App">
      <h1>Form Submission</h1>
      <fieldset>
        <form action="#" method="get">
          
          <label>First Name*</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value) } placeholder="Enter First Name"required />
          
          <label>Last Name*</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value) } placeholder="Enter Last Name" required />

          <label>Address*</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value) } placeholder="Enter Address" required />

          <label>Email* </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Enter email" required />

          <label>Contact*</label>
          <input type="tel" value={contact} onChange={(e) => setContact(e.target.value) } placeholder="Enter Mobile number" required />

          <label>Gender*</label>
          <input type="radio" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value) } />
          Male
          <input type="radio" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value) } />
          Female
          <input type="radio" value="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value) } />
          Other

          <button type="reset" value="reset" onClick={() => handleReset()}> Reset </button>

          <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}> Submit </button>

        </form>
      </fieldset>
    </div>
  );
}

export default App;