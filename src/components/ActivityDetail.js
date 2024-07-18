import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CallContext } from '../context/CallContext';

const ActivityDetail = () => {
    const { id } = useParams();
    const { calls } = useContext(CallContext);
    const call = calls.find(call => call.id === id);

    return (
        <div>
            <h1>Call Detail for {id}</h1>
            {call ? (
                <div>
                    <p>From: {call.from}</p>
                    <p>To: {call.to}</p>
                    <p>Date: {new Date(call.created_at).toLocaleString()}</p>
                    <p>Duration: {call.duration} seconds</p>
                    <p>Type: {call.call_type}</p>
                </div>
            ) : (
                <p>Call not found</p>
            )}
        </div>
    );
};

export default ActivityDetail;
