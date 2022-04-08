import React from 'react';
import './application.sass';

export const Application = () => {
  return (
    <div className="application">
      <div className="applicationColumns">
        <p className="applicationPriority">экстренно</p>
        <h3>Заявка №13020</h3>
        <p className="applicationDate">20.07.2022</p>
      </div>
      <div className="applicationColumns">
        <h3>Система водоснобжения</h3>
        <p className="applicationText">Затопило подвал жилого дома да очень много воды нужно нулить в этом комментарии чтобы...</p>
      </div>
      <div className="applicationColumns">
        <p className="applicationArea">р-он Ленинский</p>
        <p className="applicationStreet">ул. Пушкина д.10</p>
      </div>
      <div className="applicationColumns">
        <p className="applicationStatus">В РАБОТЕ</p>
      </div>
    </div>
  );
};