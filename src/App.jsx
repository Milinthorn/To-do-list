import React, { useState } from "react";
import "./App.css";

const List = () => {

  const [text, setText] = useState("");
  const [display, setDisplay] = useState([]);
  const [checkedTask, setCheckedtask] = useState([]);

  const handleClick = () => {
    if (text.trim() === "")
      return;
    setDisplay((prev) => [...prev, text])
    setText("")
  }

  const handleCheck = (index) => {
    setCheckedtask((prev) => {
      if (prev.includes(index)) {
        return prev.filter((data) => data !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const handleDelete = (index) => {
    setDisplay(display.filter((data, dataIndex) => dataIndex !== index));
    setCheckedtask(checkedTask.filter((data) => data !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClick();
  };

  return (
    <div className="big">
      <div className="head">
        <h1>To-do-Lists</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add your task" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Add</button>
        <div className="result">
          {display.map((task, index) => (
            <div className="tasks" key={index}>
              <span style={{
                textDecoration: checkedTask.includes(index) ? "line-through" : "none",
                textDecorationColor: checkedTask.includes(index) ? "#C5172E" : "transparent"
              }}>
                {task}
              </span>
              <button className="checkedBut" onClick={() => handleCheck(index)}>checked</button>
              <button className="delBut" onClick={() => handleDelete(index)}>del</button>
            </div>
          ))}
        </div>
      </form>
    </div >
  )
}

export default List;