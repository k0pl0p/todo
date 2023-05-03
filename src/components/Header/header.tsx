import { FC, useState } from 'react';
import './header.scss';
import Title from './../Title/title';
import Modal from './../Modal/modal';
import userStore from './../../stores/user.store';

const Header: FC = () => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__top">
                        <div className="header__logo">
                            <Title />
                            <div className="logo">
                                <img
                                    width="30px"
                                    height="30px"
                                    src="./img/Shape.svg"
                                    alt="Shape"
                                />
                            </div>
                        </div>
                        <button
                            onClick={() => userStore.logout()}
                            className="header__exit"
                        >
                            <img src="./img/exit.png" alt="exit" />
                        </button>
                    </div>
                    <button
                        onClick={() => setActive(true)}
                        className="header__button"
                    >
                        Добавить задачу
                    </button>
                    <Modal active={active} setActive={setActive} />
                </div>
            </div>
        </header>
    );
};

export default Header;
