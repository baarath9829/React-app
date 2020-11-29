import {useState} from 'react';
import {Container,Row,InputGroup,FormControl, Col,Button} from 'react-bootstrap';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Graph from './Graph';

const Inputform = ({name,initialAmount,chartdata,getchart}) => {
    const postchart = async () => {
        const data = {
            name: name,
            day: startDate.getDate(),
            expense: amount
        }
        const request = {
            method : 'POST', 
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            //body: JSON.stringify(data)
            body: JSON.stringify(data)
        }
        console.log(request);
        const response = await fetch(`http://localhost:8000/chart`,request);
        alert("your data has been submited");
    }
    const putchart = async () => {
        const data = {
            name: name,
            day: startDate.getDate(),
            expense: amount
        }
        const request = {
            method : 'PUT', 
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data),
        }
        console.log(request);
        const response = await fetch(`http://localhost:8000/chart`,request);
        alert("your data has been updated");
    }
    const deletechart = async () => {
        const data = {
            name: name,
            day: startDate.getDate()
        }
        const request = {
            method : 'DELETE', 
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }
        console.log(request);
        const response = await fetch(`http://localhost:8000/chart`,request);
        alert("your data has been deleted");
    }
    const [startDate, setStartDate] = useState(new Date());
    const [amount,setAmount] = useState(0);
    //console.log(chartdata); 
    return(
        <div className="Inputform">
            <Container>
                <Row>
            <Col>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            </Col>
            <Col>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">RS</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Amount"
                aria-label="Amount"
                aria-describedby="basic-addon1"
                value = {amount}
                onChange={(e) => {
                    setAmount(e.target.value);
                }}
                />
            </InputGroup>
            </Col>  
                <Col>
                 <Button variant="success" onClick= {(e)=>{
                     postchart();
                     getchart(name);
                 }}> Submit </Button>
                </Col>
                <Col>
                 <Button variant="warning" onClick= {(e)=>{
                     putchart();
                     getchart(name);
                 }}> Update </Button>
                </Col>
                <Col>
                 <Button variant="danger" onClick= {(e)=>{
                     //Deletion
                     deletechart()
                     getchart(name)
                 }}> Delete </Button>
                </Col>
                </Row>
                <Row>
                    <Graph chartdata={chartdata} initialAmount={initialAmount}/>
                </Row>
            </Container>
        </div>
    );
}
export default Inputform;