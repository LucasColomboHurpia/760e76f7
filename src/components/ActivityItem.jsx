import React, { useState, useEffect } from 'react';
import './../css/ActivityItem.css';
import { FaPhoneAlt, FaPhoneSlash, FaArchive, FaInbox } from 'react-icons/fa';
import { MdCallEnd } from 'react-icons/md';

const ActivityItem = ({ call, onArchiveToggle, showArchiveButton = true, delay = 0, triggerArchive = false }) => {
    const [archiving, setArchiving] = useState(false);

    useEffect(() => {
        let timer;
        if (triggerArchive) {
            setArchiving(true);
            timer = setTimeout(() => {
                onArchiveToggle(call.id);
                setArchiving(false);
            }, 500 + delay); // Duration of the animation plus delay
        }
        return () => clearTimeout(timer);
    }, [triggerArchive, call.id, onArchiveToggle, delay]);

    const handleArchiveToggle = () => {
        setArchiving(true);
        setTimeout(() => {
            onArchiveToggle(call.id);
            setArchiving(false);
        }, 500); // Duration of the animation
    };

    const getIcon = () => {
        switch (call.call_type) {
            case 'answered':
                return <FaPhoneAlt className="icon answered" />;
            case 'missed':
                return <FaPhoneSlash className="icon missed" />;
            case 'voicemail':
                return <MdCallEnd className="icon voicemail" />;
            default:
                return <FaPhoneAlt className="icon" />;
        }
    };

    const getDuration = () => {
        return call.call_type === 'answered' ? `${Math.floor(call.duration / 60)}m ${call.duration % 60}s` : null;
    };

    const getDescription = () => {
        switch (call.call_type) {
            case 'answered':
                return `called ${call.to}`;
            case 'missed':
            case 'voicemail':
            default:
                return `tried to call on ${call.to}`;
        }
    };

    return (
        <div className={`activity-item ${archiving ? 'archiving' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
            <div className="left-section">
                {getIcon()}
                <div className="details">
                    <span className="phone-number">{call.from}</span>
                    <span className="description">{getDescription()}</span>
                    {getDuration() && <span className="duration">{getDuration()}</span>}
                </div>
            </div>
            <div className="right-section">
                <span className="time">{new Date(call.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                {showArchiveButton && (
                    <button onClick={handleArchiveToggle}>
                        {call.is_archived ? <FaInbox className="icon unarchive" /> : <FaArchive className="icon archive" />}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ActivityItem;