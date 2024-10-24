import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartGame from './game/logic/start/StartGame';
import Record from './game/logic/Record';
import ISettings from './game/logic/ISettings';
import Home from './game/Home';
import Rules from './game/logic/Rules';
import Kpop from './game/logic/start/kpop/easy/Kpop';
import ChooseLevelKpop from './game/logic/start/kpop/ChooseLevelKpop';
import MediumKpop from './game/logic/start/kpop/medium/MediumKpop';
import HardKpop from './game/logic/start/kpop/hard/HardKpop';
import Register from './back-pages/register/Register';
import Login from './back-pages/login/Login';
import './assets/scss/App.scss';
import './assets/scss/reset/reset.scss';
import { House, UserPen } from 'lucide-react';

function App() {
  return (
    <div>
      <div className="icon-flex">
        <div className="flexdown">
          <button>
            <a className="sidebarLink" href="/">
              <House />
              <p className="prompt">home</p>
            </a>
          </button>
        </div>
        <div className="flexdown">
          <a className="sidebarLink" href="/login">
            <button>
              <UserPen />
              <p className="prompt">profile</p>
            </button>
          </a>
        </div>
      </div>
      <div className="center">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<StartGame />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/record" element={<Record />} />
            <Route path="/settings" element={<ISettings />} />
            <Route path="/chooselevelkpop" element={<ChooseLevelKpop />} />
            <Route path="/easykpop" element={<Kpop />} />
            <Route path="/mediumkpop" element={<MediumKpop />} />
            <Route path="/hardkpop" element={<HardKpop />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
