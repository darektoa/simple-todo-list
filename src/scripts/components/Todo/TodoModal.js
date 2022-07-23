import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Modal } from 'react-bootstrap';
import { deleteTodo, editTodo, unshowTodo } from '../../redux/todo';

const TodoModal = (props) => {
    const dispatch = useDispatch();
    const data = props.data || {
        title: null,
        description: null,
    };

    const deleteHandler = () => {
        dispatch(deleteTodo(data));
        hideHandler()
    }

    const hideHandler = () => {
        dispatch(unshowTodo());
    }

    return (
        <Modal show={props.data} onHide={hideHandler}>
            <ModalHeader title={data.header || data.title} />
            <ModalBody data={data} />
            <Modal.Footer>
                { !data.status ? <Button variant="outline-danger" onClick={deleteHandler} >Delete</Button> : null }
            </Modal.Footer>
        </Modal>      
    );
};


const ModalHeader = ({title=null, children}) => {
    return (
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            { children }
        </Modal.Header>
    );
}

const ModalBody = ({data}) => {
    const [item, setItem] = useState(data);
    const dispatch = useDispatch();

    const inputHandler = (event) => {
        const { target } = event;
        const { name, value } = target;
        const data = { ...item };

        if(name === 'status') data[name] = Number(value);
        else data[name] = value;

        dispatch(editTodo(data));
        setItem(data);
    }

    return (
        <Modal.Body>
            <Form.Control type="text" placeholder="Title" defaultValue={item.title || ''}  className="mb-2" onChange={inputHandler} name="title" />
            <Form.Control type="text" placeholder="description" defaultValue={item.description || ''}  className="mb-2" onChange={inputHandler} name="description" />
            <Form.Select className="mb-4" onChange={inputHandler} defaultValue={item.status} name="status">
                <option value="0">Uncompleted</option>
                <option value="1">Completed</option>
            </Form.Select>
            <p><b>Created At:</b> { data.createdAt }</p>
        </Modal.Body>
    );
}

export default TodoModal;