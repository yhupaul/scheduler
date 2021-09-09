import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props){
  const { days } = props
  const daysArray = days ? Object.values(days) : []
  const parseDays = daysArray.map(day => <DayListItem key = {day.id} name={day.name} 
    spots={day.spots} 
    selected={day.name === props.day}
    setDay={props.setDay} ></DayListItem>)
  return(
    <ul>
      {parseDays}
    </ul>
  )
}