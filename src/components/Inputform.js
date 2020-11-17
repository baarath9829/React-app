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
                 <Button variant="success" onClick= {(e)=>{
                     const lasty = data[data.length - 1].y;
                     setData([...data,{x:startDate.getDate(),y:lasty-amount}])
                     setAmount(0);
                 }}> Submit </Button>
                </Col>
                <Col>
                 <Button variant="warning" onClick= {(e)=>{
                     //Updation
                     //since data is const 
                     //duplicating to edit
                     let newData = data.filter(()=>{return true});
                     for (let i=0;i<newData.length;i++){
                         if(newData[i].x === startDate.getDate()){
                             // since x=0 will always be defined and startdate cant be 0
                             // i-1 will not be undefined 
                             // so actuall amount = previous amount - current amount 
                             newData[i].y = newData[i-1].y - amount;
                         }
                     }
                     setData(newData);
                 }}> Update </Button>
                </Col>
                <Col>
                 <Button variant="danger" onClick= {(e)=>{
                     //Deletion
                     //since data is const 
                     //duplicating to edit
                     let newData = data.filter(()=>{return true});
                      //const index = newData.indexOf(startDate.getDate());
                     //since newdata is a array of object 
                     //object should be used in indexof which we cant 
                     //so using this ...
                    
                     for (let i=0;i<newData.length;i++){
                        if(newData[i].x === startDate.getDate()){
                            console.log(newData.splice(i,1));
                            //alert("entry deleted");
                        }
                    }
                    setData(newData);
                 }}> Delete </Button>
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