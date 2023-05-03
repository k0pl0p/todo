import { FC, useEffect } from 'react';
import './list.scss';
import { observer } from 'mobx-react-lite';
import todoStore, { TTodo } from './../../stores/todo.store';

const List: FC = observer(() => {
    useEffect(() => {
        todoStore.getTodos();
    }, []);

    useEffect(() => {
        todoStore.getTodos();
    }, [todoStore.status]);

    const list: JSX.Element[] = todoStore.todos.map((todo) => {
        return (
            <li className="list__item" key={todo.id}>
                <button
                    onClick={() => todoStore.updateTodo(todo)}
                    className={`btn ${
                        todo.status === 'done' ? 'btn--done' : ''
                    }`}
                ></button>
                <span
                    onClick={() => todoStore.updateTodo(todo)}
                    className={`list__text ${
                        todo.status === 'done' ? 'done' : ''
                    }`}
                >
                    {todo.title}
                </span>
                <button
                    onClick={() => todoStore.deleteTodo(todo.id)}
                    className="list__btn"
                ></button>
            </li>
        );
    });

    const emptyList: JSX.Element = (
        <li className="list__item">
            <span className="list__text">Список дел пуст</span>
        </li>
    );

    return (
        <ul className="list">
            {todoStore.todos.length > 0 ? list : emptyList}
        </ul>
    );
});

export default List;