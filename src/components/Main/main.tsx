import './main.scss';
import List from './../List/list';
import Todobar from './../Todobar/todobar';
import { FC } from 'react';

const Main: FC = () => (
    <main className="main">
        <div className="container">
            <div className="main__content">
                <List />
                <Todobar />
            </div>
        </div>
    </main>
);

export default Main;
