import { FC } from 'react';
import userStore from './../../stores/user.store';
import './login.scss';
import Title from './../Title/title';

const Login: FC = () => {
    const submitForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const elements = e.currentTarget
            .elements as typeof e.currentTarget.elements & {
            email: { value: string };
            password: { value: string };
        };

        const body = {
            email: elements.email.value,
            password: elements.password.value,
        };

        userStore.login(body);
    };

    return (
        <section className="login">
            <div className="container">
                <div className="login__logo">
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
                <form onSubmit={submitForm} className="form">
                    <input name="email" type="text" placeholder="Username" />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <input type="submit" value="LOGIN" />
                </form>
            </div>
        </section>
    );
};

export default Login;
