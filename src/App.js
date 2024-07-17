import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ActivityFeed from './components/ActivityFeed.jsx';
import ActivityDetail from './components/ActivityDetail.jsx';
import ArchivedCalls from './components/ArchivedCalls.jsx';
import Logo from './components/Logo.jsx';
import { CallProvider } from './context/CallContext';

const App = () => {
    return (
        <CallProvider>
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="d-flex align-items-center">
                            <a className="navbar-brand" href="/">
                                <Logo />
                            </a>
                            <div className="navbar-nav ml-auto">
                                <NavLink className="nav-link" to="/" exact activeClassName="active">
                                    Inbox
                                </NavLink>
                                <NavLink className="nav-link" to="/archived" activeClassName="active">
                                    All calls
                                </NavLink>
                            </div>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/" element={<ActivityFeed />} />
                        <Route path="/archived" element={<ArchivedCalls />} />
                        <Route path="/detail/:id" element={<ActivityDetail />} />
                    </Routes>
                </div>
            </Router>
        </CallProvider>
    );
};

export default App;
