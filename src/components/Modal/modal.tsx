import { FC, useEffect, useRef } from 'react';
import todoStore from './../../stores/todo.store';
import './modal.scss';

type TModalProps = { active: boolean; setActive: (active: boolean) => void };

const Modal: FC<TModalProps> = ({ active, setActive }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        if (active && inputRef?.current) {
            inputRef.current.focus();
        }
    }, [active]);

    const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        setActive(false);

        const elements = e.currentTarget
            .elements as typeof e.currentTarget.elements & {
            title: { value: string };
        };

        const body = {
            title: elements.title.value,
            status: 'undone',
        };

        todoStore.createTodo(body);

        e.currentTarget.reset();
    };

    return (
        <div
            onClick={() => setActive(false)}
            className={active ? 'modal active' : 'modal'}
        >
            <form onSubmit={onSubmit} className="header__input">
                <input
                    onClick={(e) => e.stopPropagation()}
                    type="text"
                    name="title"
                    placeholder="Введите задачу"
                    ref={inputRef}
                />
            </form>
        </div>
    );
};

export default Modal;
