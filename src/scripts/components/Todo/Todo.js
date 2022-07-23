import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { showTodo, deleteTodo } from '../../redux/todo';

const Todo = (props) => {
    const dispatch = useDispatch();
    const { data, className } = props;

    const deleteHandler = (event) => {
        dispatch(deleteTodo(data));
        event.stopPropagation();
    }

    const showHandler = (event) => {
        dispatch(showTodo(data));
        event.stopPropagation();
    }

    return (
        <Card style={{ width: '18rem', cursor: 'pointer' }} className={`${className}`} onClick={showHandler}>
            <Card.Body>
                <Card.Title>{ data.title }</Card.Title>
                <Card.Text>{ data.description }</Card.Text>
                { !data.status ? <Button variant="outline-danger" onClick={deleteHandler} >Delete</Button> : null}
                <Button variant="primary" className="ms-2" onClick={showHandler} >Edit</Button>
            </Card.Body>
        </Card>
    );
}

export default Todo;