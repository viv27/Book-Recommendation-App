import React from "react";
import { useState } from "react";
import "./styles.css";

//nested array object
const bookDB = {
  programming: [
    { name: "Cormen", rating: "5/5" },
    { name: "Head First", rating: "4.6/5" }
  ],
  SelfHelp: [
    {
      name: "Power of Now",
      rating: "3.5/5"
    },
    {
      name: "Think and grow Rich",
      rating: "4.2/5"
    }
  ],
  Detective: [
    {
      name: "Agatha Christie",
      rating: "5/5"
    },
    {
      name: "Sherlock Holmes",
      rating: "2.5/5"
    }
  ]
};

export default function App() {
  const [selectedBook, setCourse] = useState("programming");
  function clickHandler(course) {
    setCourse(course);
  }
  return (
    <div className="App">
      <h1> Book Finder </h1>
      <small>Find books and filter by your favourite genre!</small>
      <br />

      <div>
        {Object.keys(bookDB).map((book) => (
          <button onClick={() => clickHandler(book)}>{book}</button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedBook].map((book) => (
            <li key={book.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
