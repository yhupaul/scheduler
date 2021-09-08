import React from "react";
import "components/InterviewerListItem.scss";
let classNames =require( 'classnames' );

export default function InterviewerListItem(props) {
  // const { id, name, avatar, selected, setInterviewer } = props;
  
  const interviewerClass = classNames("interviewers__item", {
     "interviewers__item": true,
     "interviewers__item--selected": props.selected
  });
   console.log("here.......", props.selected);
  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
  
}