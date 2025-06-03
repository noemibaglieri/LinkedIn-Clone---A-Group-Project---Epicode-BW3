import { useState } from "react";
import ColumnProfileRight from "./assets/components/ColumnProfileRight";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ColumnProfileRight />
    </>
  );
}

export default App;
