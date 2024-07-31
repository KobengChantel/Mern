import React, { Component } from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';
import MainNavigation from './components/Navigation/MainNavigation';
import AuthContext from './context/auth-context';

import './App.css';

class App extends Component {
  state = {
    token: null,
    userId: null
  };

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };

  logout = () => {
    this.setState({ token: null, userId: null });
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          >
            <MainNavigation />
            <main className="main-content">
              <Routes>
                <Route path="/" element={this.state.token ? <Navigate to="/events" /> : <Navigate to="/auth" />} />
                <Route path="/auth" element={!this.state.token ? <AuthPage /> : <Navigate to="/events" />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/bookings" element={this.state.token ? <BookingsPage /> : <Navigate to="/auth" />} />
              </Routes>
            </main>
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
