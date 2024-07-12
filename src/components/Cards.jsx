import React from "react";
import "./cardsStyle.css";

function Cards(props) {
  return (
    <>
      <div class="card">
        <img src={props.imgsrc} style={{ width: "40%",padding:'10px' }}></img>
        <div>
          <h3 style={{marginLeft:'7%',color:'whitesmoke'}}>{props.title}</h3>
        </div>
        <div class="card__content">
          <p class="card__title">{props.title}</p>
          <p class="card__description">{props.desc}</p>
        </div>
      </div>
    </>
  );
}

export default Cards;
