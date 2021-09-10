export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find(d => day === d.name);

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
 
  return filtersAppointments;
}

export function getInterview(state, interview) {
  
  if(!interview){
    return null;
  }
  const interviewers = state.interviewers;
  const interviewerId = interview.interviewer;
  const selectedInterviewer = interviewers[interviewerId];
  
  const studentName = interview.student;

  return {student: studentName, interviewer: selectedInterviewer};
}

export function getInterviewersForDay(state, day) {
  const interviewersArray = [];
  const days = [...state.days];
  const interviewers = { ...state.interviewers };
  const today = days.filter((d) => d.name === day);
  // if requested day is in appointments, return all the appointments for today
  const todaysInterviewers = today[0] && today[0].interviewers;
  // if there are appointments, push them to appointmentsArray
  todaysInterviewers &&
    todaysInterviewers.map((i) => interviewersArray.push(interviewers[i]));

  return interviewersArray;
}

