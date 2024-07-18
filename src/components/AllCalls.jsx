import React, { useContext, useState } from 'react';
import { CallContext } from '../context/CallContext';
import ActivityItem from './ActivityItem.jsx';
import { groupByDate } from '../utils/groupByDate';
import './../css/AllCalls.css';

const AllCalls = () => {
    const { calls, archiveCall, unarchiveCall, loading } = useContext(CallContext);
    const [triggerArchiveAll, setTriggerArchiveAll] = useState(false);

    if (loading) {
        return <div>Loading...</div>;
    }

    const groupedCalls = groupByDate(calls);

    return (
        <div className="all-calls">
            <div className="call-list-container">
                {Object.keys(groupedCalls).map(date => (
                    <div key={date}>
                        <h2>{date}</h2>
                        <ul className="call-list">
                            {groupedCalls[date].map((call, index) => (
                                <ActivityItem
                                    key={call.id}
                                    call={call}
                                    onArchiveToggle={call.is_archived ? unarchiveCall : archiveCall}
                                    delay={index * 100} // Delay each item by 100ms
                                    triggerArchive={triggerArchiveAll} // Trigger archive animation
                                    showArchiveButton={false} // Hide archive/unarchive icons
                                />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCalls;
