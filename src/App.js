import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import ActivityFeed from './components/ActivityFeed.js';
import ActivityDetail from './components/ActivityDetail.js';
import AllCalls from './components/AllCalls.js';
import Logo from './components/Logo.js';
import { CallProvider } from './context/CallContext';
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext';
import PageTransition from './components/PageTransition.js';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button onClick={toggleDarkMode} className="btn btn-link dark-mode-toggle">
            {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
    );
};

const App = () => {
    return (
        <DarkModeProvider>
            <CallProvider>
                <Router>
                    <AppContent />
                </Router>
            </CallProvider>
        </DarkModeProvider>
    );
};

const AppContent = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, [navigate]);

    return (
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
    );
};

export default App;
