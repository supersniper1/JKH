import React, {useState} from 'react';
import './ModalApplication.sass';
import {useSelector} from "react-redux";
// import Slider from '../modal/slider';

export const ModalApplication = () => {
  const [inputValue, setInputValue] = useState('')

  const content = useSelector(state => state.id)
  console.log(content)

  let priority = 1

  const priorityText = () => {
    switch (priority) {
      case 1:
        return "экстренно";
      case 2:
        return "нейтрально";
      case 3:
        return "нормально";
      case 4:
        return "важно";
    }
  }

  const priorityClass = () => {
    switch (priority) {
      case 1:
        return "urgentlyPriority"
      case 2:
        return "neutralPriority"
      case 3:
        return "normalPriority"
      case 4:
        return "importantPriority"
    }
  }


  return (
    <div className="applicationModal">
      <div className="closeButton">X</div>
      <div className="modalContainer">
        <div className="leftBlock">
          <div className="modalTitle">
            <h1 className="titleH1">Заявка №{content.id}</h1>
          </div>
          <div className="leftDescription">
            <h2 className="titleH2">Описание</h2>
            <p className="modalText">{content.description}</p>
          </div>
          <div className="attachments">
            <h2 className="titleH2">Вложения</h2>
            <div className="attachmentsSlider">
              {/* <Slider /> */}
              <img src="http://via.placeholder.com/200x200"/>
              <img src="http://via.placeholder.com/200x200"/>
              <img src="http://via.placeholder.com/200x200"/>
              <img src="http://via.placeholder.com/200x200"/>
            </div>
          </div>
          <div className="comments">
            <h2 className="titleH2">Комментарии</h2>
            <div className="newComment">
              <img src={require("../../images/avatar.svg")}/>
              <textarea className='modalInput' placeholder='Напишите комментарий...' value={inputValue} onChange={event => setInputValue(event.target.value)} />
            </div>
            <div className="oldComments">
              <h3 className="titleH3">Комментариев пока нет...</h3>
            </div>
          </div>
        </div>
        <div className="rightBlock">
          <div className="aboutTicket">
            <h2 className="titleH2">Описание</h2>
            <div className="line"></div>
            <div className="status">
              <h4 className="titleH4">Состояние</h4>
              <div className="statusInfo">{content.status}</div>
              <h4 className="titleH4">Приоритет</h4>
              <div className={priorityClass() + "priorityInfo"}>{priorityText()}</div>
              <h4 className="titleH4">Автор</h4>
              <div className="owner">
                <img src={require("../../images/avatar.svg")}/>
                <h5>Виктор Дмитриевич</h5>
              </div>
              <h4 className="titleH4">Создано</h4>
              <h5>20.07.2022</h5>
              <h4 className="titleH4">Исполнитель</h4>
              <div className="brigade">
                <select name="brigade" id="brigade-select">
                  <option value="">Выбирите бригаду</option>
                  <option value="brigade" id='1'>Бригада 1</option>
                  <option value="brigade" id='2'>Бригада 2</option>
                </select>
              </div>
            </div>
          </div>
          <div className="rightBlockButtons">
            <button className='modalButton'>Сохранить</button>
            <button>Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  );
};