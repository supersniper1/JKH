import React from 'react';
import './application.sass';

export const Application = ({ content }) => {
  let text = content.discription
  const textSizing = () => {
    if (text.length > 120) {
      return text.substr(0, 120) + "..."
    } else {
      return text
    }
  }

  let priority = content.priority
  const priorityText = () => {
    switch (priority) {
      case 0: return "экстренно";
      case 1: return "нормально";
      case 2: return "важно";
      case 3: return "нейтрально";
    }
  }

  const priorityClass = () => {
    switch (priority) {
      case 0: return "urgentlyPriority"
      case 1: return "normalPriority"
      case 2: return "importantPriority"
      case 3: return "neutralPriority"
    }
  }
  return (
    <div className="application">
      <div className="applicationColumns">
        <p className={priorityClass() + " applicationPriority"}>{priorityText()}</p>
        <h3>Заявка №{content.id}</h3>
        <p className="applicationDate">{content.dateToCreate}</p>
      </div>
      <div className="applicationColumns applicationColumnSecond">
        <h3>{content.problem}</h3>
        <p className="applicationText">{textSizing()}</p>
      </div>
      <div className="applicationColumns">
        <p className="applicationArea">{content.number}</p>
        <p className="applicationStreet">{content.address}</p>
      </div>
      <div className="applicationColumns">
        <p className="applicationStatus">{content.status}</p>
      </div>
    </div>
  );
};