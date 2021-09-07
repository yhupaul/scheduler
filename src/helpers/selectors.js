function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find(d => day === d.name);
  // console.debug(filteredDay)
  if(!filteredDay){
    return [];
  }
  const appointmentIds = filteredDay.appointments;
  const filtersAppointments = [];
  Object.entries(state.appointments).forEach(([key, value]) => {
    if (appointmentIds.includes(value.id)) {
      filtersAppointments.push(value)
    }
  })
 
  // console.log("............", filtersAppointments)
  return filtersAppointments;
}

function getInterview(state, interview) {
  
  if(!interview){
    return null;
  }
  const interviewers = state.interviewers;
  const interviewerId = interview.interviewer;
  const selectedInterviewer = interviewers[interviewerId];
  
  const studentName = interview.student;

  return {student: studentName, interviewer: selectedInterviewer};
}
// {keyName: "keyvalue"}
// {  
//   "student": "Lydia Miller-Jones",
//   "interviewer": {  
//     "id": 1,
//     "name": "Sylvia Palmer",
//     "avatar": "https://i.imgur.com/LpaY82x.png"
//   }
// }

module.exports = { getInterview, getAppointmentsForDay }; 