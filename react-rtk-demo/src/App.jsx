import { useState } from "react";
import "./App.css";
import { CakeView } from "./features/cake/cakeView";
import { IceCreamView } from "./features/icecream/iceCreamView";
import { UserView } from "./features/user/userView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
