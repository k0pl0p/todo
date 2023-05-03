import './_reset.scss';
import './_base.scss';
import Header from './../Header/header';
import Main from './../Main/main';
import Login from './../Login/login';
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import userStore from './../../stores/user.store';

const App: FC = observer(() => (
    <div>
        {userStore.userIsAuthorized ? (
            <>
                <Header />
                <Main />
            </>
        ) : (
            <Login />
        )}
    </div>
));

export default App;
