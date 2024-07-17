import React, { useContext } from 'react';
import { CallContext } from '../context/CallContext';
import ActivityItem from './ActivityItem.jsx';

const AllCalls = () => {
    const { calls, archiveCall, unarchiveCall, archiveAll, unarchiveAll, loading } = useContext(CallContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>All Calls</h1>
            <button onClick={archiveAll}>Archive All Calls</button>
            <button onClick={unarchiveAll}>Unarchive All Calls</button>
            <ul>
                {calls.map(call => (
                    <ActivityItem
                        key={call.id}
                        call={call}
                        onArchiveToggle={call.is_archived ? unarchiveCall : archiveCall}
                    />
                ))}
            </ul>
        </div>
    );
};

export default AllCalls;
