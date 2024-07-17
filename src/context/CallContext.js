import React, { createContext, useState, useEffect } from 'react';
import { fetchCalls } from '../services/callService';

const CallContext = createContext();

const CallProvider = ({ children }) => {
    const [calls, setCalls] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCalls = async () => {
            const data = await fetchCalls();
            const sortedCalls = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            const initialUnarchivedCalls = sortedCalls.slice(0, 5).map(call => ({ ...call, is_archived: false }));
            const initialArchivedCalls = sortedCalls.slice(5).map(call => ({ ...call, is_archived: true }));
            const initialCalls = [...initialUnarchivedCalls, ...initialArchivedCalls];

            setCalls(initialCalls);
            setLoading(false);
            logCalls(initialCalls);
        };
        getCalls();
    }, []);

    const logCalls = (callsArray) => {
        const totalCalls = callsArray.length;
        const archivedCalls = callsArray.filter(call => call.is_archived).length;
        const unarchivedCalls = totalCalls - archivedCalls;

        console.log('Total calls array:', callsArray);
        console.log('Total calls count:', totalCalls);
        console.log('Archived calls count:', archivedCalls);
        console.log('Unarchived calls count:', unarchivedCalls);
    };

    const archiveCall = (id) => {
        const updatedCalls = calls.map(call => call.id === id ? { ...call, is_archived: true } : call);
        setCalls(updatedCalls);
        logCalls(updatedCalls);
    };

    const unarchiveCall = (id) => {
        const updatedCalls = calls.map(call => call.id === id ? { ...call, is_archived: false } : call);
        setCalls(updatedCalls);
        logCalls(updatedCalls);
    };

    const archiveAll = () => {
        const updatedCalls = calls.map(call => ({ ...call, is_archived: true }));
        setCalls(updatedCalls);
        logCalls(updatedCalls);
    };

    const unarchiveAll = () => {
        const updatedCalls = calls.map(call => ({ ...call, is_archived: false }));
        setCalls(updatedCalls);
        logCalls(updatedCalls);
    };

    return (
        <CallContext.Provider value={{ calls, archiveCall, unarchiveCall, archiveAll, unarchiveAll, loading }}>
            {children}
        </CallContext.Provider>
    );
};

export { CallContext, CallProvider };
