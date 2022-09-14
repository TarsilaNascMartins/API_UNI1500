import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import CarroImage from "./Carro_Login.png"
import { setToken, getToken } from "./../../Services/Auth"
import { login } from "./../../API/AuthApi"
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Login({setShowRegister}) {
    const [user, setUser] = useState({ email: "", password: "" });

    const navigate = useNavigate();


    function updateUser(event) {
        const value = event.target.value;
        setUser({
            ...user,
            [event.target.name]: value
        })

    }

    

    async function sendLogin(event) {
        event.preventDefault();
        console.log(user);

        try {

            const response = await login(user);
            
           setToken(response.data);
            console.log(getToken());
            navigate('/');
        }
        catch (error) {
            console.log(error);
        }

    }




        return <>


<p></p>
<p></p>
<p></p>
            <Stack gap={2} className="col-md-5 mx-auto">
                <Container>

                <center><p><h1>LOGIN</h1></p>

                    <img style={{ width: 300 }} src={CarroImage} alt="Carro Login" /> </center>
                    <Row>
                        <Form class="px-2" onSubmit={(event) => sendLogin(event)}>

                            <Form.Group className="mb-6" controlId="formBasicEmail">
                                <Col xs={20}>
                                    <Form.Label> Email</Form.Label>
                                    <Form.Control onChange={(event) => { updateUser(event) }} name="email" type="text" placeholder="Insira seu email"></Form.Control>
                                </Col>

                                <Col xs={20}>
                                    <Form.Label> Senha</Form.Label>
                                    <Form.Control onChange={(event) => { updateUser(event) }} name="password" type="password" placeholder="Insira sua senha"></Form.Control>
                                </Col>

                                <Form.Text className="text-muted"> Nós não iremos compartilhar seu email com ninguém. </Form.Text>
                            </Form.Group>
                           
                            <Button variant="dark" type="submit">Login</Button>
                         <Button variant="success" onClick={()=>setShowRegister((lastState)=>!lastState)}>Já possuo conta</Button>
                            


                        </Form>
                    </Row>
                </Container>
            </Stack>
<p></p>
        </>
    }

    export default Login; 