import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // const appClass = false ? "App dark" : "App light"

  const [darkSet, setDark] = useState(true);
  const handleTheme = () => setDark(!darkSet);

  return (
    <div className={'App' + (darkSet ? 'light' : 'dark')}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleTheme}>
          {darkSet ? 'Dark' : 'light'} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
