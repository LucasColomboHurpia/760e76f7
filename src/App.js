import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ActivityFeed from './components/ActivityFeed.jsx';
import ActivityDetail from './components/ActivityDetail.jsx';
import AllCalls from './components/AllCalls.jsx';
import Logo from './components/Logo.jsx';
import { CallProvider } from './context/CallContext';
import PageTransition from './components/PageTransition.jsx';

const App = () => {
    return (
        <CallProvider>
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light myNavbar shadow  mb-4 ">
                        <div className="d-flex align-items-center myNavbarInner pt-2 pb-2">
                            <a className="navbar-brand" href="/">
                                <Logo />
                            </a>
                            <div className="navbar-nav ml-auto flex-column justify-content-center align-items-stretch">
                                <NavLink className="nav-link" to="/" exact activeClassName="active">
                                    Inbox
                                </NavLink>
                                <NavLink className="nav-link" to="/all-calls" activeClassName="active">
                                    All calls
                                </NavLink>
                            </div>
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
    );
};

export default App;
