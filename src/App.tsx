import React from "react";
import { Button } from "./components/button/button";
import "./styles/index.scss";

const App = () => {
  return (
    <div>
      <h1>Bonjour groupe!</h1>
      <Button
        label="Découvre le monde fantastique du web!"
        onClick={() => alert("lol")}
      />
    </div>
  );
};

export default App;
