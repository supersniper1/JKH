import React from 'react';
import './modalComponents.css';

export const ModalComponents = ({active, setActive, children}) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className="modalContent" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
