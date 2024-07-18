import React, { useContext, useState } from 'react';
import { CallContext } from '../context/CallContext.js';
import ActivityItem from './ActivityItem.js';
import { groupByDate } from '../utils/groupByDate.js';
import './../css/ActivityFeed.css';
import { FaArchive } from 'react-icons/fa';

const ActivityFeed = () => {
    const { calls, archiveCall, archiveAll, loading } = useContext(CallContext);
    const [triggerArchiveAll, setTriggerArchiveAll] = useState(false);

    if (loading) {
        return <div>Loading...</div>;
    }

    const unarchivedCalls = calls.filter(call => !call.is_archived);
    const groupedCalls = groupByDate(unarchivedCalls);

    const handleArchiveAll = () => {
        setTriggerArchiveAll(true);
        setTimeout(() => {
            archiveAll();
            setTriggerArchiveAll(false);
        }, unarchivedCalls.length * 100 + 500); 
    };

    return (
        <div className="activity-feed">
            <button className="archive-all-button" onClick={handleArchiveAll}>
                <FaArchive className="archive-all-icon" />
                Archive all calls
            </button>
            <div className="call-list-container">
                {Object.keys(groupedCalls).map(date => (
                    <div key={date}>
                        <h2>{date}</h2>
                        <ul className="call-list">
                            {groupedCalls[date].map((call, index) => (
                                <ActivityItem
                                    key={call.id}
                                    call={call}
                                    onArchiveToggle={archiveCall}
                                    delay={index * 100} 
                                    triggerArchive={triggerArchiveAll} 
                                    animationType="slide" 
                                />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityFeed;
