import { FC } from 'react';
import './button.scss';
import todoStore from './../../stores/todo.store';
import { observer } from 'mobx-react-lite';

type TButton = { status: string; name: string };

const buttons: TButton[] = [
    { status: 'all', name: 'All' },
    { status: 'undone', name: 'Undone' },
    { status: 'done', name: 'Done' },
];

const ButtonStatus: FC = observer(() => (
    <>
        {buttons.map((item) => (
            <div className="todobar__status" key={item.status}>
                <button
                    className={
                        item.status === todoStore.status ? 'btn-active' : ''
                    }
                    onClick={() => todoStore.setStatus(item.status)}
                >
                    {item.name}
                </button>
            </div>
        ))}
    </>
));
export default ButtonStatus;
