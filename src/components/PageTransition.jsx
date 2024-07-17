import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import './../css/PageTransition.css';

const PageTransition = ({ children }) => {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="slide" timeout={300}>
                {children}
            </CSSTransition>
        </TransitionGroup>
    );
};

export default PageTransition;
