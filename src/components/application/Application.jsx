import React from 'react';
import './application.sass';

export const Application = (props) => {
  const textSizing = (text) => {
    if (text.length > 120) {
      text.length = 120
      return text + "..."
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
        <p className="applicationText">{props.content.text}</p>
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