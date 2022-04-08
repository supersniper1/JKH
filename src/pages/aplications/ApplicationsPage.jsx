import React, {useState} from 'react';
import './applicationPage.sass';
import {Application, ModalApplication, ModalComponents} from "../../components/export.components";

export const ApplicationsPage = (
) => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className="applicationPage">
      <div className="applications">
        <Application content={"../../api/fake.jsons/application.json"}/>
      </div>
      <ModalComponents active={modalActive} setActive={setModalActive}>
        <ModalApplication setActive={setModalActive}/>
      </ModalComponents>
    </div>
  );
};
