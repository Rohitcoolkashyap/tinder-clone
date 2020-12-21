import './App.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Chat from './screens/Chats';
import Header from './components/header/Header';
import SwipeButtons from './components/swipeButtons/SwipeButtons';
import TinderCards from './components/tinderCards/TinderCards';
import ChatScreen from './screens/ChatScreen';
import Home from './components/homepage/Home';
import { useStateValue } from './StateProvider';
import Cookie from 'js-cookie';
import Profile from './components/profile/Profile';
import GenderForm from './components/homepage/GenderForm';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  const [{ user }, dispatch] = useStateValue();
  const gender = localStorage.getItem('gender');
  return (
    <div className="app">
      <BrowserRouter>
        {!user && Cookie.get('userInfo') === undefined ? (
          <Home />
        ) : (
          <>
            {Cookie.get('userInfo') !== null && gender === null ? (
              <GenderForm />
            ) : (
              <Switch>
                <Route path="/" exact>
                  <Header />

                  <TinderCards />
                </Route>

                <Route path="/chat/:personId" exact>
                  <Header backButton="/chat" />
                  <ChatScreen />
                </Route>
                <Route path="/chat" exact>
                  <Header backButton="/" />
                  <Chat />
                </Route>
                <Route path="/profile" exact>
                  <Header backButton="/" />

                  <Profile />
                </Route>
              </Switch>
            )}
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
