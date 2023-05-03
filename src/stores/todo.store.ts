import { makeAutoObservable } from 'mobx';
import { TODO_API_URL } from './../const';

export type TTodo = { title: string; id: number; status: string };
export type TTodoBody = { title: string; status: string };

class TodoStore {
    todos: TTodo[] = [];
    status: string = 'all';

    constructor() {
        makeAutoObservable(this);
    }

    getTodos(): void {
        let url: string = TODO_API_URL;

        if (this.status !== 'all') {
            url += `?status=${this.status}`;
        }

        fetch(url)
            .then((res) => {
                if (res.ok !== true) {
                    console.log('Looks like there was a problem');
                }
                return res.json();
            })
            .then((data) => {
                this.todos = data;
            })
            .catch((err) => console.log(err.message));
    }

    createTodo(todoBody: TTodoBody): void {
        fetch(TODO_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todoBody),
        })
            .then((res) => {
                if (res.ok !== true) {
                    console.log('Looks like there was a problem');
                }
                return res.json();
            })
            .then((data: TTodo) => this.todos.push(data))
            .catch((err) => console.log(err.message));
    }

    updateTodo(todo: TTodo): void {
        let newStatus: string;

        if (todo.status === 'done') {
            newStatus = 'undone';
        } else {
            newStatus = 'done';
        }

        fetch(`${TODO_API_URL}/${todo.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                status: newStatus,
            }),
        })
            .then((res) => {
                if (res.ok !== true) {
                    console.log('Looks like there was a problem');
                }
                return res.json();
            })
            .then((data: TTodo) => {
                const index: number = this.todos.findIndex(
                    (el) => el.id === todo.id
                );
                this.todos[index] = data;
            })
            .catch((err) => console.log(err.message));
    }

    deleteTodo(id: number): void {
        this.todos = this.todos.filter((el) => el.id !== id);

        fetch(`${TODO_API_URL}/${id}`, {
            method: 'DELETE',
        });
    }

    setStatus(status: string): void {
        this.status = status;
    }
}

export default new TodoStore();
