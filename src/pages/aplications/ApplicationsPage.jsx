import React, { useEffect, useState } from 'react';
import './applicationPage.sass';
import { Application, Header } from "../../components/export.components";
import {getRequests} from "../../api/export.api";

export const ApplicationsPage = ({setActive}) => {
  const [tickets, setTickets] = useState(null)

  useEffect(() => {
    getRequests(res => res.data, (response) => {
      setTickets(response)
    })
  }, [])

  return (
    <div className="applicationPage">
      <Header />
      <div className="applications">
        {
          tickets ? (
            tickets.slice(0).reverse().map((ticket) => (
              <Application
                setActive={setActive}
                key={ticket.id}
                content={ticket}
              />
            ))
          ) : <div>Ошибка соеденения</div>
        }
      </div>
    </div>
  );
};