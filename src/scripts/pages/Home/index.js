import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { TodoList, TodoModal } from '../../components/Todo';
import { showTodo } from '../../redux/todo.js';

const Home = () => {
    const dispatch = useDispatch();
    const { data, show } = useSelector((state) => state.todo);

    const newTodoHandler = () => {
        const result = dispatch(showTodo({
            header: 'Add New Todo',
            title: null,
            description: null,
            status: 0,
        }));

        console.log(result);
    }

    return (
        <>
            <TodoModal data={show} />
            <Button onClick={newTodoHandler}>New TO-DO</Button>

            <h2 className="mt-4 mb-3">Uncompleted</h2>
            <TodoList data={data.filter(item => Number(item.status) === 0)} />
            
            <h2 className="mt-4 mb-2">Completed</h2>
            <TodoList data={data.filter(item => Number(item.status) === 1)} />
        </>
    );
}

export default Home;