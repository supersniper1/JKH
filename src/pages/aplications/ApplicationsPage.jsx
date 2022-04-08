import React, {useState} from 'react';
import './applicationPage.sass';
import {Application, ModalApplication, ModalComponents} from "../../components/export.components";

export const ApplicationsPage = (
) => {
  const [modalActive, setModalActive] = useState(false)
  let applicationRequest = "../../api/fake.jsons/application.json";
  return (
    <div className="applicationPage">
      <div className="applications">
        <Application content={{applicationRequest}}/>
      </div>
      <ModalComponents active={modalActive} setActive={setModalActive}>
        <ModalApplication setActive={setModalActive}/>
      </ModalComponents>
    </div>
  );
};
