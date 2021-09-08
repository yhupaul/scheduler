// import classNames from "classnames";
import React from "react";
import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";
// let classNames = require( 'classnames' );

export default function InterviewList(props){

  const interviewers = props.interviewers && props.interviewers.map(interviewer => {
    console.log(interviewer.id)
    console.log(props.interviewer)
    
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={event => props.onChange(interviewer.id)}
      />
    );
  });
//line15 props.value!!!
  
  return (
    <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewers</h4>
    <ul className="interviewers__list">{interviewers}</ul>
  </section>
  )
}