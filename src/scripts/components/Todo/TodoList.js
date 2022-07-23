import Todo from "./Todo";

const TodoList = (props) => {
    const { data=[] } = props;

    return (
        <section className="mb-2 d-flex flex-wrap">
            { data.map(item => item ? <Todo key={item.id} data={item} className="me-3 mb-3" /> : null) }
        </section>
    );
}

export default TodoList;