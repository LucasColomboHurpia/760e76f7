import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ActivityFeed from './components/ActivityFeed.jsx';
import ActivityDetail from './components/ActivityDetail.jsx';
import AllCalls from './components/AllCalls.jsx';
import Logo from './components/Logo.jsx';
import { CallProvider } from './context/CallContext';
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext';
import PageTransition from './components/PageTransition.jsx';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button onClick={toggleDarkMode} className="btn  dark-mode-toggle">
            {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
    );
};

const App = () => {
    return (
        <DarkModeProvider>
            <CallProvider>
                <Router>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light myNavbar shadow mb-4">
                            <div className="d-flex align-items-center myNavbarInner pt-2 pb-2">
                                <a className="navbar-brand" href="/">
                                    <Logo />
                                </a>
                                <div className="navbar-nav ml-auto justify-content-center align-items-stretch">
                                    <NavLink className="nav-link text-center" to="/" exact activeClassName="active">
                                        Inbox
                                    </NavLink>
                                    <NavLink className="nav-link text-center" to="/all-calls" activeClassName="active">
                                        All calls
                                    </NavLink>
                                </div>
                                <DarkModeToggle />
                            </div>
                        </nav>
                        <PageTransition>
                            <Routes>
                                <Route path="/" element={<ActivityFeed />} />
                                <Route path="/all-calls" element={<AllCalls />} />
                                <Route path="/detail/:id" element={<ActivityDetail />} />
                            </Routes>
                        </PageTransition>
                    </div>
                </Router>
            </CallProvider>
        </DarkModeProvider>
    );
};

export default App;
