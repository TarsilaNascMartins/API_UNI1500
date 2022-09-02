import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import CarroImage from "./Carro_Login.png"
function Login() {


    return <>

  
  
<Stack gap={2} className="col-md-5 mx-auto">
<Container>

<img style={{ width:600}} src={CarroImage} alt="Carro Login" />  
<Row>
<Form class= "px-2" >
        
    <Form.Group  className="mb-6" controlId="formBasicEmail">
    <Col xs={20}>
    <Form.Label> Email</Form.Label>          
    <Form.Control  type="text" placeholder="Insira seu email"></Form.Control>
    </Col>  
  
    <Col xs={20}>
    <Form.Label> Senha</Form.Label>
    <Form.Control type="password"  placeholder="Insira sua senha"></Form.Control>
    </Col>

    <Form.Text className="text-muted"> Nós não iremos compartilhar seu email com ninguém. </Form.Text>
    </Form.Group>

    <Button variant = "dark" type= "submit">Login</Button>


</Form>
</Row>
</Container>
</Stack>
    
    </>
}

export default Login; 