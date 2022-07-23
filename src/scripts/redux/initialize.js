import { useDispatch } from 'react-redux';
import { initTodo } from './todo';
import TodoData from '../data/TodoData';

const Initialize = () => {
    const dispatch = useDispatch();

    TodoData.get().then((data) => {
        dispatch(initTodo(data));
    });
}

export default Initialize;