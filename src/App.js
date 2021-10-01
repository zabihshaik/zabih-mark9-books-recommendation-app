import React, { useState } from "react";
import "./styles.css";
var bookDB = {
  science: [
    {
      name: "Everything You Need to Ace Science in One Big Fat Notebook",
      rating: "5/5",
      description:
        "This book takes readers from scientific investigation and the engineering design process to the Periodic Table; forces and motion; forms of energy; outer space and the solar system; to earth sciences, biology, body systems, ecology, and more."
    },

    {
      name: "The Science Book: Big Ideas Simply Explained",
      rating: "4.5/5",
      description:
        "This book presents the fascinating story behind these and other of the world's most important concepts in maths, chemistry, physics and biology in plain English, with easy to grasp and eye-catching artworks."
    },

    {
      name:
        "The Science Book: Everything You Need to Know About the World and How It Works",
      rating: "4/5",
      description:
        "This book ncapsulates centuries of scientific thought in one volume. Natural phenomena, revolutionary inventions, scientific facts, and the most up-to-date questions are all explained in detailed text that is complemented by visually arresting graphics."
    }
  ],

  motivational: [
    {
      name: "Can't Hurt Me: Master Your Mind and Defy the Odds",
      rating: "5/5",
      description:
        "In Can't Hurt Me, he shares his astonishing life story and reveals that most of us tap into only 40% of our capabilities. Goggins calls this The 40% Rule, and his story illuminates a path that anyone can follow to push past pain, demolish fear, and reach their full potential."
    },
    {
      name: "The Alchemist by Paulo Coelho",
      rating: "4.5/5",
      description:
        "This book is an excellent narrative about an inspirational journey towards self-discovery. Mysticism and intelligence unite in this timeless novel that has sold millions of copies globally."
    },
    {
      name:
        "Good Vibes, Good Life: How Self-Love Is the Key to Unlocking Your Greatness",
      rating: "4/5",
      description:
        "In this book, Vex will show you that when you change the way you think, feel, speak and act, you begin to change the world."
    }
  ],
  survival: [
    {
      name: "Prepper's Long-Term Survival Guide",
      rating: "5/5",
      description:
        "Prepare your home and family for any life-threatening catastrophe with this step-by-step survivalist guide filled with techniques, strategies, and DIY projects from a lifelong prepping expert."
    },
    {
      name: "Bushcraft 101: A Field Guide to the Art of Wilderness Survival",
      rating: "4.5/5",
      description:
        "this valuable guide offers only the most important survival skills to help you craft resources from your surroundings and truly experience the beauty and thrill of the wilderness."
    },
    {
      name: "SAS Survival Handbook",
      rating: "4/5",
      description:
        "Revised to reflect the latest in survival knowledge and technology, and covering new topics such as urban survival."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("survival");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Recommended Books to Read</h1>
      <p style={{ fontSize: "medium" }}>
        Please check my favourite books. Select a genre to get started
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.25rem",
              padding: "0.75rem  1rem",
              border: "1px solid red",
              margin: "1.5rem 1.5rem",
              fontSize: "larger"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "1rem" }}> {book.rating} </div>
              <div style={{ fontSize: "smaller" }}> {book.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
