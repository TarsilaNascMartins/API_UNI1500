
import {useState} from 'react'
import { Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Button } from "react-bootstrap";
import CarroImage from "./Carro_Login.png"
import { setToken, getToken } from "./../../Services/Auth"
import { register } from '../../API/AuthApi';
import {useNavigate} from 'react-router-dom';

function Registro(){

const [user, setUser] = useState({ email: "", password: "" });

    const navigate = useNavigate();

//novo
function createUser(event) {

    


    const value1 = event.target.value;
    const value2 = event.target.value;
    setUser({
        ...user,
        [event.target.name]: value1,
        [event.target.password]: value2
    })

}

async function sendCreation(event) {
    event.preventDefault();
    console.log(user);

    try {

        const response = await register(user);
        
       setToken(response.data);
        console.log(getToken());
        navigate('/');
    }
    catch (error) {
        console.log(error);
    }

}


return<>

<p></p>
<p></p>
<p></p>

<Stack gap={2} className="col-md-5 mx-auto">
                <Container>

                <center><p><h1>REGISTRO</h1></p>

                <img style={{ width: 300 }} src={CarroImage} alt="Carro Login" /> </center>

           
                    <Row>
                        <Form class="px-2"  onSubmit={(event) => sendCreation(event)}                 >

                            <Form.Group className="mb-6" controlId="formBasicEmail">
                                <Col xs={20}>
                                    <Form.Label> Email</Form.Label>
                                    <Form.Control onChange={(event) => { createUser(event) }} name= "email" type="text" placeholder="Insira seu email"></Form.Control>
                                   
                                </Col>

                                <Col xs={20}>
                                    <Form.Label> Senha</Form.Label>
                                    
                                    <Form.Control onChange={(event) => { createUser(event) }} name="password" type="password" placeholder="Insira sua senha"></Form.Control>
                                </Col>

                                <Form.Text className="text-muted"> Nós não iremos compartilhar seu email com ninguém. </Form.Text>
                            </Form.Group>

                            <Button variant="dark" type="submit">Cadastro</Button>


                        </Form>
                    </Row>
                </Container>
            </Stack>
            <p></p>

</>

}

export default Registro;
