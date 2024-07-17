import React from 'react';
import './../css/ActivityItem.css';
import { FaPhoneAlt, FaPhoneSlash } from 'react-icons/fa';
import { MdCallEnd } from 'react-icons/md';

const ActivityItem = ({ call, onArchiveToggle }) => {
    const handleArchiveToggle = () => {
        onArchiveToggle(call.id);
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
        <div className="activity-item">
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
                <button onClick={handleArchiveToggle}>
                    {call.is_archived ? 'Unarchive' : 'Archive'}
                </button>
            </div>
        </div>
    );
};

export default ActivityItem;
