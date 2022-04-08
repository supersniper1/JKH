import React, {useState} from 'react';
import './applicationPage.sass';
import {Application, ModalApplication, ModalComponents} from "../../components/export.components";

export const ApplicationsPage = (
) => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="applicationPage">
      <div className="applications">
        <div onClick={() => setModalActive(true)}><Application/></div>
        <div onClick={() => setModalActive(true)}><Application/></div>
        <div onClick={() => setModalActive(true)}><Application/></div>
        <div onClick={() => setModalActive(true)}><Application/></div>
      </div>
      <ModalComponents active={modalActive} setActive={setModalActive}>
        <ModalApplication setActive={setModalActive}/>
      </ModalComponents>
    </div>
  );
};
