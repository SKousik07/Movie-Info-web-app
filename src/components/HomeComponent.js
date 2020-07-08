import React, { Component } from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Form, Button, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';


class Home extends Component{
   
  constructor(props){
    super(props);
    this.state={
      title:""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
   

handleSubmit(event) {
  console.log('Current State is: ' + JSON.stringify(this.state.title));
  event.preventDefault();
}

handleInputChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;
  this.setState({
    title: value,
  });
  
  
}

  render() {

    return (
      <React.Fragment>
        <div className="container ">
          < h1 className="m-5"></h1>
          
                <Row>
                  <Col md="12" >
                    <Card body>
                      <CardTitle>Get Movie Details</CardTitle>
                      <div className="container">
                                <div className="col-12 col-md-9">
                                    <Form onSubmit={this.handleSubmit}>
                                        <FormGroup row>
                                            <Label htmlFor="title" md={4}>Movie Title </Label>
                                            <Col md={4} >
                                                <Input type="text" id="title" name="title"
                                                    placeholder="Enter the Movie Title"
                                                    value={this.state.title}
                                                    onChange={this.handleInputChange} />
                                            </Col>
                                            <Col md={4}>
                                            <Link to={`/home/${this.state.title}`}>
                                            <Button  block><i className="fa fa-search fa"></i>   search   </Button>
                                            </Link>
                                            </Col>
                                        </FormGroup>
                                    
                                    </Form>
                                </div>
                      </div> 
                    </Card>
                  </Col>
                </Row>
        </div>
       </React.Fragment>
    );
}
}
export default Home;
