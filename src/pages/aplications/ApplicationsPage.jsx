import React, { useEffect, useState } from 'react';
import './applicationPage.sass';
import { Application, Header, ModalApplication, ModalComponents } from "../../components/export.components";
import getRequests from "../../api/get.api";

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
            tickets.map((ticket, index) => (
              <Application
                key={index}
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


// тестовые данные

// const data = [{
//   "id": 1,
//   "status": "В РАБОТЕ",
//   "street": "ул. Пушкина д.10",
//   "area": "р-он Ленинский",
//   "problem": "Система водоснобжения",
//   "priority": 0,
//   "date": "20.07.2022",
//   "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquid asperiores consectetur cupiditate deleniti doloremque et exercitationem expedita facere facilis hic magnam nisi perferendis, perspiciatis qui quia quibusdam sunt tenetur voluptas. Adipisci assumenda blanditiis cum expedita necessitatibus sit, suscipit."
// },
// {
//   "id": 1,
//   "status": "В РАБОТЕ",
//   "street": "ул. Пушкина д.10",
//   "area": "р-он Ленинский",
//   "problem": "Система водоснобжения",
//   "priority": 1,
//   "date": "20.07.2022",
//   "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquid asperiores consectetur cupiditate deleniti doloremque et exercitationem expedita facere facilis hic magnam nisi perferendis, perspiciatis qui quia quibusdam sunt tenetur voluptas. Adipisci assumenda blanditiis cum expedita necessitatibus sit, suscipit."
// }, {
//   "id": 1,
//   "status": "В РАБОТЕ",
//   "street": "ул. Пушкина д.10",
//   "area": "р-он Ленинский",
//   "problem": "Система водоснобжения",
//   "priority": 2,
//   "date": "20.07.2022",
//   "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquid asperiores consectetur cupiditate deleniti doloremque et exercitationem expedita facere facilis hic magnam nisi perferendis, perspiciatis qui quia quibusdam sunt tenetur voluptas. Adipisci assumenda blanditiis cum expedita necessitatibus sit, suscipit."
// }, {
//   "id": 1,
//   "status": "В РАБОТЕ",
//   "street": "ул. Пушкина д.10",
//   "area": "р-он Ленинский",
//   "problem": "Система водоснобжения",
//   "priority": 3,
//   "date": "20.07.2022",
//   "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquid asperiores consectetur cupiditate deleniti doloremque et exercitationem expedita facere facilis hic magnam nisi perferendis, perspiciatis qui quia quibusdam sunt tenetur voluptas. Adipisci assumenda blanditiis cum expedita necessitatibus sit, suscipit."
// }]

