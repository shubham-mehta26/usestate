// import "./App.css";
import { useState } from "react";
import Details from "./components/Details";
import FormComponent from "./components/Form";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <Details name={name} email={email} gender={gender} password={password} />
      <FormComponent
        setName={setName}
        setEmail={setEmail}
        setGender={setGender}
        setPassword={setPassword}
      />
    </div>
  );
}

export default App;
