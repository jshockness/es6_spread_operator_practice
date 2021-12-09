import React, { useState } from "react";

function App() {
  const [listInput, setListInput] = useState("");
  const [items, setItems] = useState([]);

  function handleListUpdate(event) {
    const newListItem = event.target.value;

    setListInput(newListItem);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, listInput];
    });
    setListInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleListUpdate} type="text" value={listInput} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
