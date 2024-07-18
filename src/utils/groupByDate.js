export const groupByDate = (calls) => {
    return calls.reduce((acc, call) => {
        const date = new Date(call.created_at).toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' });
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(call);
        return acc;
    }, {});
};
