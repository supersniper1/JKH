import React, {useEffect, useState} from 'react';
import './ModalApplication.sass';
import {getRequestById} from "../../api/get.api";
import {useSelector} from "react-redux";

export const ModalApplication = () => {
  const [inputValue, setInputValue] = useState('')
  const [tickets, setTickets] = useState(null)

  const id = useSelector(state => state.id)
  console.log(id)

  useEffect(() => {
    getRequestById((id),res => res.data, (response) => {
      setTickets(response)
    })
  }, [])

  console.log(tickets)

  return (
    <div className="applicationModal">
      <div className="closeButton">X</div>
      <div className="modalContainer">
        <div className="leftBlock">
          <div className="modalTitle">
            <h1 className="titleH1">Заявка №{tickets.id}</h1>
          </div>
          <div className="leftDescription">
            <h2 className="titleH2">Описание</h2>
            <p className="modalText">Более подробное описание заявки от ее создателя. Пользователь может дать описание проесходящего, описание места где находится проблема и т.д. Более подробное описание заявки от ее создателя. Пользователь может дать описание проесходящего, описание места где находится проблема и т.д.</p>
          </div>
          <div className="attachments">
            <h2 className="titleH2">Вложения</h2>
            <div className="attachmentsSlider">
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
              <div className="statusInfo">В РАБОТЕ</div>
              <h4 className="titleH4">Приоритет</h4>
              <div className="priorityInfo">ЭКСТРЕННО</div>
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
            <button>Сохранить</button>
            <button>Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  );
};


// import React, {useState} from 'react';
// import './ModalApplication.sass';
//
// export const ModalApplication = ({setActive}) => {
//   const [inputValue, setInputValue] = useState('')
//   return (
//     <div className="modalApplication">
//       <h3>Ул. Ленина д. 38 стр. 1</h3>
//       <div className='modalContentText'>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur eligendi excepturi facilis inventore nihil quam saepe sapiente vel veniam. Dolor eos eum ex fugit impedit maiores, pariatur? Asperiores, dolores dolorum ea harum laboriosam nam nihil nisi odit sapiente ut.</p>
//       </div>
//       <div className='rows'>
//         <div className="images">
//           <div className="applicationImages">
//             <div className='applicationImagesRow'>
//               <img className='modalImage' src={require("../../images/img.png")} alt="Фото с места"/>
//               <img className='modalImage' src={require("../../images/img.png")} alt="Фото с места"/>
//             </div>
//             <div className='applicationImagesRow'>
//               <img className='modalImage' src={require("../../images/img.png")} alt="Фото с места"/>
//               <img className='modalImage' src={require("../../images/img.png")} alt="Фото с места"/>
//             </div>
//           </div>
//         </div>
//         <div className="commentAndList">
//           <select className='modalSelect'>
//             <option>Бригада 1</option>
//             <option>Бригада 2</option>
//             <option>Бригада 3</option>
//             <option>Бригада 4</option>
//             <option>Бригада 5</option>
//           </select>
//           <textarea className='modalInput' placeholder='Напишите комментарий...' value={inputValue}
//                  onChange={event => setInputValue(event.target.value)} />
//         </div>
//       </div>
//       <div className='rows rowLast'>
//         <h3>Дворник Иван Иванович</h3>
//         <button className="modalButton" onClick={() => {
//           setActive(false)
//           setInputValue('')
//         }}>Отправить</button>
//       </div>
//     </div>
//   );
// };
