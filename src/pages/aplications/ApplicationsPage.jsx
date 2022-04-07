import React, {useState} from 'react';
import './applicationPage.css'
import Application from "../../components/application/Application";
import ModalComponents from "../../components/modal/Modal.components";
import ModalApplication from "../../components/modal.application/ModalApplication";

const ApplicationsPage = (
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

export default ApplicationsPage;