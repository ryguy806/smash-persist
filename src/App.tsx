import React, { useState } from "react";

const App = () => {
  const [colors, setColors] = useState({
    a: ["blue", "red"],
    b: ["pink"],
    c: ["green"],
  });

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
