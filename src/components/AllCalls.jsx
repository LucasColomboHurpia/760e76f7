import React, { useContext, useState } from 'react';
import { CallContext } from '../context/CallContext';
import ActivityItem from './ActivityItem.jsx';
import { groupByDate } from '../utils/groupByDate';
import './../css/AllCalls.css';
import { FaArchive, FaInbox } from 'react-icons/fa';

const AllCalls = () => {
    const { calls, archiveCall, unarchiveCall, archiveAll, unarchiveAll, loading } = useContext(CallContext);
    const [triggerArchiveAll, setTriggerArchiveAll] = useState(false);

    if (loading) {
        return <div>Loading...</div>;
    }

    const groupedCalls = groupByDate(calls);

    const handleArchiveAll = () => {
        archiveAll();
    };

    const handleUnarchiveAll = () => {
        unarchiveAll();
    };

    return (
        <div className="all-calls">
            <button className="archive-all-button" onClick={handleArchiveAll}>
                <FaArchive className="archive-all-icon" />
                Archive all calls
            </button>
            <button className="archive-all-button" onClick={handleUnarchiveAll}>
                <FaInbox className="archive-all-icon" />
                Unarchive all calls
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
                                    onArchiveToggle={call.is_archived ? unarchiveCall : archiveCall}
                                    delay={index * 100} // Delay each item by 100ms
                                    triggerArchive={false} // No trigger for archive animation
                                    showArchiveButton={true} // Show archive/unarchive icons
                                    animationType="hop" // Use hop animation
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
