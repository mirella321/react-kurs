import { useEffect, useState } from "react";
import "./news.css";
import { Link } from "react-router-dom";

export function News({ title, description }) {
  const [likes, setLikes] = useState(0);

  const handleClick = (name) => {
    alert(`${name}, kliknięto przycisk`);
  };

  const changeLikes = (value, e) => {
    e.preventDefault();

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

  const createSlug = (title) => {
    return title.replace(/\s/g,"-");
  }

  return (
    <div>
    <Link className="news" to={`/news/${createSlug(title)}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{likes}</span>
      <button onClick={(e) => changeLikes(1, e)}>LIKE</button>
      <button onClick={(e) => changeLikes(-1, e)}>DISLIKE </button>
    </Link>
    </div>
  );
}
