import React, { useContext } from 'react';
import { CallContext } from '../context/CallContext';

const ArchivedCalls = () => {
    const { calls, unarchiveCall, unarchiveAll } = useContext(CallContext);

    return (
        <div>
            <h1>Archived Calls</h1>
            <button onClick={unarchiveAll}>Unarchive All Calls</button>
            <ul>
                {calls.filter(call => call.is_archived).map(call => (
                    <li key={call.id}>
                        {call.from} - {call.to} - {new Date(call.created_at).toLocaleString()}
                        <button onClick={() => unarchiveCall(call.id)}>Unarchive</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArchivedCalls;
