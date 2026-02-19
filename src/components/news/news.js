import { useEffect, useState } from "react";
import "./news.css";

export function News({ title, description }) {
  const [likes, setLikes] = useState(0);

  const handleClick = (name) => {
    alert(`${name}, kliknięto przycisk`);
  };

  const changeLikes = (value) => {
    if (likes < 1 && value < 0) {
      return;
    }

    setLikes(likes + value);
  };
  useEffect(() => {
    console.log("komponent");
    if (likes === 10) {
      alert("hurra, 10 like");
    }
  }, [likes]);

  return (
    <div className="news">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{likes}</span>
      <button onClick={() => changeLikes(1)}>LIKE</button>
      <button onClick={() => changeLikes(-1)}>DISLIKE</button>
    </div>
  );
}


