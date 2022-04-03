import React from 'react';

const Application = () => {
    return (
        <div>
            <div className="applicationText">
            <h3>Ул. Ленина д. 38 стр. 1</h3>
            <p>Дворник Иван Иванович</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, voluptatem!</p>
            </div>
            <div className="applicationImages">
                <img src="http://placehold.it/350x50" alt="Фото с места"/>
                <img src="http://placehold.it/200x50" alt="Фото с места"/>
                <img src="http://placehold.it/200x50" alt="Фото с места"/>
                <img src="http://placehold.it/200x50" alt="Фото с места"/>
            </div>
        </div>
    );
};

export default Application;