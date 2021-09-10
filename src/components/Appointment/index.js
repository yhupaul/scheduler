import React from 'react';
import "components/Appointment/styles.scss"
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";
import Error from "components/Appointment/Error";
import useVisualMode from "hooks/useVisualMode";


export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);

    props.bookInterview(props.id, interview)
    .then(() => {
      transition(SHOW)
    }).catch((error) => {transition(ERROR_SAVE, true)});
  }

  function deleteApp() {
    transition(DELETING, true);

    props
    .cancelInterview(props.id)
    .then(() => {
      transition(EMPTY)
    }).catch((error) => {transition(ERROR_DELETE
      , true)});
  }

  function confirming() {
    transition(CONFIRM);
  }

  function edit() {
    transition(EDIT);
  }

  return (
  <article className="appointment">
    <Header time={props.time} />
     {mode === EMPTY && <Empty onAdd={() => transition(CREATE)}/>}
     {mode === CREATE && <Form interviewers={props.interviewers} onCancel={() => back()} onSave={save}/>}
     {mode === EDIT && <Form name={props.interview.student} interviewer={props.interview.interviewerid} interviewers={props.interviewers} onCancel={() => back()} onSave={save}/>}
     {mode === SHOW && <Show student={props.interview.student} interviewer={props.interview.interviewer} onDelete={confirming} onEdit={edit}/>}    
     {mode === SAVING && <Status message="Saving..." />}
     {mode === DELETING && <Status message="Deleting..." />}
     {mode === CONFIRM && <Confirm message="Do you really like to delete?" onCancel={()=> back()} onConfirm={deleteApp} />}
     {mode === ERROR_SAVE && <Error message="Not able to save appointment" onClose={() => back()}/>}
     {mode === ERROR_DELETE && <Error message="Not able to cancel appointment" onClose={() => back()}/>}
  </article>
  )
}
