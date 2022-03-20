const defaultValue = [
    ...JSON.parse(localStorage.getItem("todo")) ?? []
];

export const todoReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case 'add':
            localStorage.setItem("todo", JSON.stringify([...state, action.payload]));
            return JSON.parse(localStorage.getItem("todo"));
        case 'edit':
            localStorage.setItem("todo", JSON.stringify([...state.filter(e => e.id !== action.payload.id), action.payload]));
            return state;
        case 'delete':
            localStorage.setItem("todo", JSON.stringify([...state.filter(e => e.id !== action.payload)]));
            return state.filter(e => e.id !== action.payload);
        default:
            return state
    }
};

