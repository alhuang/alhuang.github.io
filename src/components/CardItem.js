import React from "react";
import { HashLink } from "react-router-hash-link";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <HashLink className="cards__item__link" to={props.path}>
          <figure
            className={`cards__item__pic-wrap ${props.proj}`}
            data-category={props.label}
          >
            {/* <div className="card__item__name">{props.text}</div> */}
            <img src={props.src} alt="" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </HashLink>
      </li>
    </>
  );
}

export default CardItem;
