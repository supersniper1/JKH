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
  return (
    <div className="application">
      <div className="applicationColumns">
        <p className="applicationPriority">{props.content.priority}</p>
        <h3>Заявка №{props.content.id}</h3>
        <p className="applicationDate">{props.content.date}</p>
      </div>
      <div className="applicationColumns applicationColumnSecond">
        <h3>{props.content.problem}</h3>
        <p className="applicationText">{text}</p>
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