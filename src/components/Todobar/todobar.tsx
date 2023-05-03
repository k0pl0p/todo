import { FC } from 'react';
import './todobar.scss';
import ButtonStatus from './../ButtonStatus/button';

const Todobar: FC = () => (
    <div className="todobar">
        <ButtonStatus />
    </div>
);

export default Todobar;
