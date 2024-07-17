import React, { useContext } from 'react';
import { CallContext } from '../context/CallContext';

const ActivityFeed = () => {
    const { calls, archiveCall, archiveAll } = useContext(CallContext);

    return (
        <div>
            <h1>Activity Feed</h1>
            <button onClick={archiveAll}>Archive All Calls</button>
            <ul>
                {calls.filter(call => !call.is_archived).map(call => (
                    <li key={call.id}>
                        {call.from} - {call.to} - {new Date(call.created_at).toLocaleString()}
                        <button onClick={() => archiveCall(call.id)}>Archive</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityFeed;
