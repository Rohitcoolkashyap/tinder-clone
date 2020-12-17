import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chat from './screens/Chats';
import Header from './components/header/Header';
import SwipeButtons from './components/swipeButtons/SwipeButtons';
import TinderCards from './components/tinderCards/TinderCards';
import ChatScreen from './screens/ChatScreen';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Header />

            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route path="/chat/:person" exact>
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat" exact>
            <Header backButton="/" />
            <Chat />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
