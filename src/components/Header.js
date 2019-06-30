import React from "react";

export default function Header() {
  return (
    <div>
      <header style={headerStyle}>
        <h1>Todo List</h1>
      </header>
    </div>
  );
}

const headerStyle = {
  background: "black",
  color: "red",
  textAlign: "center",
  padding: "10px"
};
