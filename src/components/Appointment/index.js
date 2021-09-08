import React from 'react';
import "components/Appointment/styles.scss"
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Form from "components/Appointment/Form";
import useVisualMode from "hooks/useVisualMode";
import getAppointmentsForDay from "helpers/selectors";
import getInterviewersForDay from "helpers/selectors";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
  <article className="appointment">
    <Header time={props.time} />
     {mode === EMPTY && <Empty onAdd={() => transition(CREATE)}/>}
     {mode === CREATE && <Form interviewers={props.interviewers} onCancel={() => back()}/>}
     {mode === SHOW && <Show student={props.interview.student} interviewer={props.interview.interviewer} />}    
  </article>
  )
}