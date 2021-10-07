import { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";


class Registration extends Component {
  state = {
    
      name: "",
      surname: "",
      email: "",
      password: "",
      passwordConfirm: "",
        disabled: true,
    
    
  };
  render() {
    return (
        <Container>
            {console.log(this.state)}
      <Form className="form">
        <Form.Group >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"
          value={this.state.name}  onChange={(e) =>
            this.setState({
              ...this.state,
              name: e.target.value,
            })
          } placeholder="Enter first name" />
          <Form.Text className="text-muted">
            We'll probably share your email with everyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group >
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text"
          value={this.state.name}  onChange={(e) =>
            this.setState({
              ...this.state,
              surname: e.target.value,
            })
          } placeholder="Enter surname" />
          <Form.Text className="text-muted">
            We'll probably share your email with everyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group >
          <Form.Label>Email</Form.Label>
          <Form.Control type="text"
          value={this.state.name}  onChange={(e) =>
            this.setState({
              ...this.state,
              name: e.target.value,
            })
          } placeholder="Enter your Email" />
          <Form.Text className="text-muted">
            We'll probably share your email with everyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" disabled={this.state.disabled} type="submit">
          Submit
        </Button>
      </Form>
      </Container>
    );
  }
}

export default Registration;
