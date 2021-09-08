import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
// const {getAppointmentsForDay, getInterview, getInterviewersForDay} = require ('./selectors');



const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5]
    }
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 }
    }
  },
  interviewers: {
    "1": {  
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    }
  }
};

const realState = {
  "day": "Monday",
  "days": [
    {
      "id": 1,
      "name": "Monday",
      "appointments": [
        1,
        2,
        3,
        4,
        5
      ],
      "interviewers": [
        1,
        2,
        7,
        8,
        9
      ],
      "spots": 4
    },
    {
      "id": 2,
      "name": "Tuesday",
      "appointments": [
        15
      ],
      "interviewers": [
        1,
        2,
        3,
        9,
        10
      ],
      "spots": 3
    },
    {
      "id": 3,
      "name": "Wednesday",
      "appointments": [
        11,
        12,
        13,
        14,
        15
      ],
      "interviewers": [
        1,
        3,
        6,
        8,
        9
      ],
      "spots": 4
    },
    {
      "id": 4,
      "name": "Thursday",
      "appointments": [
        16,
        17,
        18,
        19,
        20
      ],
      "interviewers": [
        1,
        2,
        4,
        7,
        10
      ],
      "spots": 4
    },
    {
      "id": 5,
      "name": "Friday",
      "appointments": [
        21,
        22,
        23,
        24,
        25
      ],
      "interviewers": [
        5,
        6,
        7,
        8,
        9
      ],
      "spots": 4
    }
  ],
  "appointments": {
    "1": {
      "id": 1,
      "time": "12pm",
      "interview": {
        "student": "ASSSS",
        "interviewer": 8
      }
    },
    "2": {
      "id": 2,
      "time": "1pm",
      "interview": null
    },
    "3": {
      "id": 3,
      "time": "2pm",
      "interview": null
    },
    "4": {
      "id": 4,
      "time": "3pm",
      "interview": null
    },
    "5": {
      "id": 5,
      "time": "4pm",
      "interview": null
    },
    "6": {
      "id": 6,
      "time": "12pm",
      "interview": null
    },
    "7": {
      "id": 7,
      "time": "1pm",
      "interview": null
    },
    "8": {
      "id": 8,
      "time": "2pm",
      "interview": {
        "student": "ASSSSS",
        "interviewer": 1
      }
    },
    "9": {
      "id": 9,
      "time": "3pm",
      "interview": {
        "student": "Leopold Silvers",
        "interviewer": 1
      }
    },
    "10": {
      "id": 10,
      "time": "4pm",
      "interview": null
    },
    "11": {
      "id": 11,
      "time": "12pm",
      "interview": null
    },
    "12": {
      "id": 12,
      "time": "1pm",
      "interview": null
    },
    "13": {
      "id": 13,
      "time": "2pm",
      "interview": null
    },
    "14": {
      "id": 14,
      "time": "3pm",
      "interview": null
    },
    "15": {
      "id": 15,
      "time": "4pm",
      "interview": {
        "student": "Maria Boucher",
        "interviewer": 2
      }
    },
    "16": {
      "id": 16,
      "time": "12pm",
      "interview": null
    },
    "17": {
      "id": 17,
      "time": "1pm",
      "interview": null
    },
    "18": {
      "id": 18,
      "time": "2pm",
      "interview": {
        "student": "Richard Wong",
        "interviewer": 4
      }
    },
    "19": {
      "id": 19,
      "time": "3pm",
      "interview": null
    },
    "20": {
      "id": 20,
      "time": "4pm",
      "interview": null
    },
    "21": {
      "id": 21,
      "time": "12pm",
      "interview": null
    },
    "22": {
      "id": 22,
      "time": "1pm",
      "interview": null
    },
    "23": {
      "id": 23,
      "time": "2pm",
      "interview": null
    },
    "24": {
      "id": 24,
      "time": "3pm",
      "interview": {
        "student": "Yuko Smith",
        "interviewer": 9
      }
    },
    "25": {
      "id": 25,
      "time": "4pm",
      "interview": null
    }
  },
  "interviewers": {
    "1": {
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      "id": 2,
      "name": "Tori Malcolm",
      "avatar": "https://i.imgur.com/Nmx0Qxo.png"
    },
    "3": {
      "id": 3,
      "name": "Mildred Nazir",
      "avatar": "https://i.imgur.com/T2WwVfS.png"
    },
    "4": {
      "id": 4,
      "name": "Cohana Roy",
      "avatar": "https://i.imgur.com/FK8V841.jpg"
    },
    "5": {
      "id": 5,
      "name": "Sven Jones",
      "avatar": "https://i.imgur.com/twYrpay.jpg"
    },
    "6": {
      "id": 6,
      "name": "Susan Reynolds",
      "avatar": "https://i.imgur.com/TdOAdde.jpg"
    },
    "7": {
      "id": 7,
      "name": "Alec Quon",
      "avatar": "https://i.imgur.com/3tVgsra.jpg"
    },
    "8": {
      "id": 8,
      "name": "Viktor Jain",
      "avatar": "https://i.imgur.com/iHq8K8Z.jpg"
    },
    "9": {
      "id": 9,
      "name": "Lindsay Chu",
      "avatar": "https://i.imgur.com/nPywAp1.jpg"
    },
    "10": {
      "id": 10,
      "name": "Samantha Stanic",
      "avatar": "https://i.imgur.com/okB9WKC.jpg"
    }
  }
};

test("getAppointmentsForDay returns an array", () => {
  const result = getAppointmentsForDay(state, "Monday");
  expect(Array.isArray(result)).toBe(true);
});

test("getAppointmentsForDay returns an array with a length matching the number of appointments for that day", () => {
  const result = getAppointmentsForDay(state, "Monday");
  // console.log(result)
  expect(result.length).toEqual(3);
});

test("getAppointmentsForDay returns an array containing the correct appointment objects", () => {
  const [first, second] = getAppointmentsForDay(state, "Tuesday");
  expect(first).toEqual(state.appointments["4"]);
  expect(second).toEqual(state.appointments["5"]);
});

test("getAppointmentsForDay returns an empty array when the days data is empty", () => {
  const result = getAppointmentsForDay({ days: [] }, "Monday");
  expect(result.length).toEqual(0);
});

test("getAppointmentsForDay returns an empty array when the day is not found", () => {
  const result = getAppointmentsForDay(state, "Wednesday");
  expect(result.length).toEqual(0);
});




test("getInterview returns an object with the interviewer data", () => {
  const result = getInterview(state, state.appointments["3"].interview);
  expect(result).toEqual(
    expect.objectContaining({
      student: expect.any(String),
      interviewer: expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        avatar: expect.any(String)
      })
    })
  );
});

test("getInterview returns null if no interview is booked", () => {
  const result = getInterview(state, state.appointments["2"].interview);
  expect(result).toBeNull();
});

test("getInterviewersForDay returns an array", () => {
  const result = getInterviewersForDay(state, "Monday");
  expect(Array.isArray(result)).toBe(true);
});

test("getInterviewersForDay returns an array with a length matching the number of appointments for that day", () => {
  const result = getInterviewersForDay(realState, "Monday");
  expect(result.length).toEqual(5);
});

test("getInterviewersForDay returns an array containing the correct appointment objects", () => {
  const [result, result2] = getInterviewersForDay(realState, "Tuesday");
  expect(result2).toEqual(realState.interviewers["2"]);
});

test("getInterviewersForDay returns an empty array when the days data is empty", () => {
  const result = getInterviewersForDay({ days: [] }, "Monday");
  expect(result.length).toEqual(0);
});

test("getInterviewersForDay returns an empty array when the day is not found", () => {
  const result = getInterviewersForDay(state, "Wednesday");
  expect(result.length).toEqual(0);
});