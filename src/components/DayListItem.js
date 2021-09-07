import React from "react";
import "components/DayListItem.scss";
let classNames = require( 'classnames' );

export default function DayListItem(props) {
  const { spots, selected } = props;
  const dayClass = classNames("day-list__item", {
    "day-list__item": true,
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  });
  
  const formatSpots = (spots) => {
    if (spots === 0) {
      return "no spots";
    }
    if (spots === 1) {
      return "1 spot";
    }
    return `${spots} spots`;
  }

  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass}>
     <h2 className="text--regular">{props.name}</h2>
     <h3>{formatSpots(spots)+" remaining"}</h3>
    </li>
  );

}