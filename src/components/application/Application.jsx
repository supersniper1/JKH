import React, {useEffect, useState} from 'react';
import './application.sass';
import {useDispatch} from "react-redux";
import {getRequestById} from "../../api/get.api";

export const Application = ({content, setActive}) => {
  const [tickets, setTickets] = useState(null)

  let text = content.description
  const dispatch = useDispatch()
  useEffect(() => {
    getRequestById((content.id), res => res.data, (response) => {
      setTickets(response)
    })
  }, [])


  let priority = content.userRequestPriority.id
  const priorityText = () => {
    switch (priority) {
      case 1:
        return "экстренно";
      case 2:
        return "важно";
      case 3:
        return "нормально";
      case 4:
        return "нейтрально";
    }
  }

  const priorityClass = () => {
    switch (priority) {
      case 1:
        return "urgentlyPriority"
      case 2:
        return "importantPriority"
      case 3:
        return "normalPriority"
      case 4:
        return "neutralPriority"
    }
  }
  return (
    <div className="application" onClick={() => {
      getRequestById((content.id), res => res.data, (response) => {
        setTickets(response)
      })
      dispatch({type: "GOTTEN_ID", id: tickets})
      setActive(true)
    }}>
      <div className="applicationColumns">
        <p className={priorityClass() + " applicationPriority"}>{priorityText()}</p>
        <h3>Заявка №{content.id}</h3>
        <p className="applicationDate">{content.dateToCreate === null ? "have not date" : content.dateToCreate}</p>
      </div>
      <div className="applicationColumns applicationColumnSecond">
        <h3>{content.userRequestType.typeName}</h3>
        <p className="applicationText">{text}</p>
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