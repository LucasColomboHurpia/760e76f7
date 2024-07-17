import React, { useContext } from 'react';
import { CallContext } from '../context/CallContext';
import ActivityItem from './ActivityItem.jsx';

const ActivityFeed = () => {
    const { calls, archiveCall, loading } = useContext(CallContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    const unarchivedCalls = calls.filter(call => !call.is_archived);

    return (
        <div>
            <h1>Inbox</h1>
            <ul>
                {unarchivedCalls.map(call => (
                    <ActivityItem key={call.id} call={call} onArchiveToggle={archiveCall} />
                ))}
            </ul>
        </div>
    );
};

export default ActivityFeed;
