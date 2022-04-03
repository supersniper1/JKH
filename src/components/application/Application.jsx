import React from 'react';
import './application.css'

const Application = () => {
  return (
    <div className="application">
      <div className="applicationText">
        <h3>Ул. Ленина д. 38 стр. 1</h3>
        <p>Дворник Иван Иванович</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, voluptatem!</p>
      </div>
      <div className="applicationImages">
        <div className='applicationImagesRow'>
          <img className='applicationImage' src={require("../../images/img.png")} alt="Фото с места"/>
          <img className='applicationImage' src={require("../../images/img.png")} alt="Фото с места"/>
        </div>
        <div className='applicationImagesRow'>
          <img className='applicationImage' src={require("../../images/img.png")} alt="Фото с места"/>
          <img className='applicationImage' src={require("../../images/img.png")} alt="Фото с места"/>
        </div>
      </div>
    </div>
  );
};

export default Application;