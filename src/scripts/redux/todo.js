import { createSlice, current } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: { 
        data: [],
        show: null,
    },
    reducers: {
        addTodo: (state, action) => {
            const last = state.data.at(-1);
            const data = {
                ...action.payload,
                id: last.id + 1,
                createdAt: (new Date())
                    .toISOString('en-GB', { hour12: false })
                    .slice(0, 16)
                    .replace('T', ' ')
            };
            state.data.push(data);
            return data;
        },

        deleteTodo: (state, action) => {
            const id    = Number(action.payload.id);
            const index = state.data.findIndex((item) => item.id === id);
            state.data.splice(index, 1);
        },

        editTodo: (state, action) => {
            const id    = Number(action.payload.id);
            const index = state.data.findIndex((item) => item.id === id);
            const data  = action.payload;
            
            Object.keys(data).forEach(key => {
                if (data[key] === null)
                    delete data[key];
            });

            if(data.id) state.data[index] = { ...state.data[index], ...data };
            else todoSlice.caseReducers.addTodo(state, action);
        },
        
        findTodo: (state, action) => {
            const id    = Number(action.payload.id);
            const item  = current(state.data).find((item) => item.id === id);
            return item;
        },

        initTodo: (state, action) => {
            state.data = action.payload;
        },

        unshowTodo: (state) => {
            state.show = null;
        },

        showTodo: (state, action) => {
            const { addTodo, findTodo } = todoSlice.caseReducers;
            const data  = findTodo(state, action) || addTodo(state, action);
            state.show = data;
        },       
    },
});

export default todoSlice.reducer;
export const {
    addTodo,
    deleteTodo,
    editTodo,
    findTodo,
    initTodo,
    unshowTodo,
    showTodo,
} = todoSlice.actions;