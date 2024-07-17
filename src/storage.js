export const getCalls = () => {
    const calls = localStorage.getItem('calls');
    return calls ? JSON.parse(calls) : [];
};

export const setCalls = (calls) => {
    localStorage.setItem('calls', JSON.stringify(calls));
};
