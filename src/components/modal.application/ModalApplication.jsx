import React, {useState} from 'react';
import './modalApplication.css'

const ModalApplication = ({setActive}) => {
  const [inputValue, setInputValue] = useState('')
  return (
    <div className="modalApplication">
      <h3>Ул. Ленина д. 38 стр. 1</h3>
      <div className='modalContentText'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur eligendi excepturi facilis inventore nihil quam saepe sapiente vel veniam. Dolor eos eum ex fugit impedit maiores, pariatur? Asperiores, dolores dolorum ea harum laboriosam nam nihil nisi odit sapiente ut.</p>
      </div>
      <div className='rows'>
        <div className="images">
          <div className="applicationImages">
            <div className='applicationImagesRow'>
              <img className='modalImage' src={require("../../images/img.png")} alt="Фото с места"/>
              <img className='modalImage' src={require("../../images/img.png")} alt="Фото с места"/>
            </div>
            <div className='applicationImagesRow'>
              <img className='modalImage' src={require("../../images/img.png")} alt="Фото с места"/>
              <img className='modalImage' src={require("../../images/img.png")} alt="Фото с места"/>
            </div>
          </div>
        </div>
        <div className="commentAndList">
          <select className='modalSelect'>
            <option>Бригада 1</option>
            <option>Бригада 2</option>
            <option>Бригада 3</option>
            <option>Бригада 4</option>
            <option>Бригада 5</option>
          </select>
          <textarea className='modalInput' placeholder='Напишите комментарий...' value={inputValue}
                 onChange={event => setInputValue(event.target.value)} />
        </div>
      </div>
      <div className='rows rowLast'>
        <h3>Дворник Иван Иванович</h3>
        <button className="modalButton" onClick={() => {
          setActive(false)
          setInputValue('')
        }}>Отправить</button>
      </div>
    </div>
  );
};

export default ModalApplication;