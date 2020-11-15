import {useState} from 'react';
import {Container,Row,InputGroup,FormControl, Col,Button} from 'react-bootstrap';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Graph from './Graph';

const Inputform = ({initialAmount}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [amount,setAmount] = useState(0);
    const [data,setData] = useState([{x:0,y:initialAmount}]);
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
                 <Button varient="Primary" onClick= {(e)=>{
                     const lasty = data[data.length - 1].y;
                     setData([...data,{x:startDate.getDate(),y:lasty-amount}])
                     setAmount(0);
                 }}> Submit </Button>
                </Col>
                </Row>
                <Row>
                    <Graph data={data}/>
                </Row>
            </Container>
        </div>
    );
}
export default Inputform;