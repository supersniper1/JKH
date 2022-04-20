import React, { useEffect, useState } from 'react';
import './applicationPage.sass';
import { Application, Header, ModalApplication, ModalComponents } from "../../components/export.components";
import {getRequests} from "../../api/export.api";

export const ApplicationsPage = () => {
  const [tickets, setTickets] = useState(null)

  useEffect(() => {
    getRequests(res => res.data, (response) => {
      setTickets(response)
    })
  }, [])

  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="applicationPage">
      <Header />
      <div className="applications">
        {
          tickets ? (
            tickets.map((ticket) => (
              <Application
                key={ticket.id}
                content={ticket}
              />
            ))
          ) : <div>Ошибка соеденения</div>
        }
      </div>
      <ModalComponents active={modalActive} setActive={setModalActive}>
        <ModalApplication setActive={setModalActive} />
      </ModalComponents>
    </div>
  );
};