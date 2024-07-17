import React, { createContext, useState, useEffect } from 'react';
import { fetchCalls } from '../services/callService';

const CallContext = createContext();

const CallProvider = ({ children }) => {
    const [calls, setCalls] = useState([]);

    useEffect(() => {
        const getCalls = async () => {
            const data = await fetchCalls();
            setCalls(data);
        };
        getCalls();
    }, []);

    const archiveCall = (id) => {
        const updatedCalls = calls.map(call => call.id === id ? { ...call, is_archived: true } : call);
        setCalls(updatedCalls);
    };

    const unarchiveCall = (id) => {
        const updatedCalls = calls.map(call => call.id === id ? { ...call, is_archived: false } : call);
        setCalls(updatedCalls);
    };

    const archiveAll = () => {
        const updatedCalls = calls.map(call => ({ ...call, is_archived: true }));
        setCalls(updatedCalls);
    };

    const unarchiveAll = () => {
        const updatedCalls = calls.map(call => ({ ...call, is_archived: false }));
        setCalls(updatedCalls);
    };

    return (
        <CallContext.Provider value={{ calls, archiveCall, unarchiveCall, archiveAll, unarchiveAll }}>
            {children}
        </CallContext.Provider>
    );
};

export { CallContext, CallProvider };
