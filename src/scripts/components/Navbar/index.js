import {
    Container,
    Navbar as NavBar
} from 'react-bootstrap';

const Navbar = (props) => {
    const { bg='light', variant='light' } = props;

    return (
        <NavBar bg={bg} variant={variant} expand="lg">
            <Container>
                <NavBar.Brand>TO-DO LIST APP</NavBar.Brand>
            </Container>
        </NavBar>
    );
}

export default Navbar;