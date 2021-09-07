import React, { useState, useEffect } from "react";
import axios from "axios";
import "components/Application.scss";
import DayList from "./DayList";
// import DayListItem from "./DayListItem";
import Appointment from "components/Appointment"
import { getAppointmentsForDay, getInterview } from "../helpers/selectors";


export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments:{},
  
  });

  
  // const state = { day: "Monday", days: [] };
  // setState({ ...state, day: "Tuesday" });
 
  const setDay = day => setState({ ...state, day });


  // const setDays = days => setState(prev => ({ ...prev, days }));
  
  useEffect(() => {
    const daysURL = "http://localhost:8001/api/days"
    const appointmentsURL = "http://localhost:8001/api/appointments"
    const interviewersURL = "http://localhost:8001/api/interviewers"

    Promise.all([
    axios.get(daysURL),
    axios.get(appointmentsURL),
    axios.get(interviewersURL)
    ]).then(all => {
      console.log(all)
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  },[]);


  // const dailyAppointments = getAppointmentsForDay(state, state.day)
  // // const appointmentsList = appointments.map(appointment => <Appointment key={appointment.id} {...appointment} />);
  // const appointmentsList = dailyAppointments.map(appointment => {
   
  //   return <Appointment key={appointment.id} {...appointment} />

  // });

  const appointments = getAppointmentsForDay(state, state.day);

const schedule = appointments.map((appointment) => {
  const interview = getInterview(state, appointment.interview);

  return (
    <Appointment
      key={appointment.id}
      id={appointment.id}
      time={appointment.time}
      interview={interview}
    />
  );
});

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            day={state.day}
            setDay={setDay}
            setDays={setState}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
      </section>
    </main>
  );
}
