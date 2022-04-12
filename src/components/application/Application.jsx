import React from 'react';
import './application.sass';

export const Application = (props) => {
  let text = props.content.text
  const textSizing = () => {
    if (text.length > 120) {
      return text.substr(0, 120) + "..."
    } else {
      console.log(text)
      return text
    }
  }

  let priority = props.content.priority
  const priorityText = () => {
    if (priority === 0) {
      return  "экстренно"
    }
    if (priority === 1) {
      return "нормально"
    }
    if (priority === 2) {
      return "важно"
    }
    if (priority === 3) {
      return "нейтрально"
    }
  }
  const priorityClass = () => {
    if (priority === 0) {
      return "urgentlyPriority applicationPriority"
    }
    if (priority === 1) {
      return "normalPriority applicationPriority"
    }
    if (priority === 2) {
      return "importantPriority applicationPriority"
    }
    if (priority === 3) {
      return "neutralPriority applicationPriority"
    }
  }
  return (
    <div className="application">
      <div className="applicationColumns">
        <p className={priorityClass()}>{priorityText()}</p>
        <h3>Заявка №{props.content.id}</h3>
        <p className="applicationDate">{props.content.date}</p>
      </div>
      <div className="applicationColumns applicationColumnSecond">
        <h3>{props.content.problem}</h3>
        <p className="applicationText">{textSizing()}</p>
      </div>
      <div className="applicationColumns">
        <p className="applicationArea">{props.content.area}</p>
        <p className="applicationStreet">{props.content.street}</p>
      </div>
      <div className="applicationColumns">
        <p className="applicationStatus">{props.content.status}</p>
      </div>
    </div>
  );
};