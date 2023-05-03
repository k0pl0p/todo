import { makeAutoObservable } from 'mobx';
import { LOGIN_API_URL } from './../const';

export type TUserBody = { email: string; password: string };

class UserStore {
    userIsAuthorized: string | null = localStorage.getItem('userIsAuthorized');

    constructor() {
        makeAutoObservable(this);
    }

    login(body: TUserBody): void {
        fetch(LOGIN_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        }).then((res) => {
            if (res.status === 200) {
                localStorage.setItem('userIsAuthorized', 'true');
                this.userIsAuthorized = 'true';
            }
        });
    }

    logout(): void {
        localStorage.removeItem('userIsAuthorized');
        this.userIsAuthorized = null;
    }
}

export default new UserStore();
