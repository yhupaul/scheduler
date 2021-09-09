import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const remainSpots = (id, change) => {
    const daysArray = [ ...state.days]
    daysArray.map((day) => {
      for (const appointment of day.appointments){
        if (appointment === id) {
          day.spots = day.spots + change;
        }
      }
      return day.spots;
    })
    return daysArray;
  }

  // state
const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: {}
});

// setday
const setDay = day => setState({ ...state, day });

useEffect(() => {
  const daysURL = "http://localhost:8001/api/days"
  const appointmentsURL = "http://localhost:8001/api/appointments"
  const interviewersURL = "http://localhost:8001/api/interviewers"

  Promise.all([
  axios.get(daysURL),
  axios.get(appointmentsURL),
  axios.get(interviewersURL)
  ]).then(all => {
    setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
  });
},[]);

// bookInterview
function bookInterview(id, interview) {
  const appointment = {
    ...state.appointments[id],
    interview: { ...interview }
  };
  
  const appointments = {
    ...state.appointments,
    [id]: appointment
  };
  
  return axios.put(`/api/appointments/${id}`, {interview}) //appointment
  .then((res) => {
    remainSpots(id, 1);
    setState({
      ...state,
      appointments
    });
  })
}

// cancelInterview
function cancelInterview(id) {
  const appointment = {
    ...state.appointments[id],
    interview: null
  };

  const appointments = {
    ...state.appointments,
    [id]: appointment
  };

  return axios.delete(`/api/appointments/${id}`, {interview: null})
  .then((response) => {
    remainSpots(id, 1);
    setState({
      ...state,
      appointments
    });
  })
}

return { state, setDay, bookInterview, cancelInterview }
}