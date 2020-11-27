import {useState} from 'react';
import {Button,Collapse} from 'react-bootstrap';
import Inputform from './Inputform';

const Profile = ({name,initialAmount}) => {
    const [chartdata, setChartdata] = useState([]);
    const getchart = async (name) => {
        const response = await fetch(`http://localhost:8000/chart?name=${name}`);
        const data = await response.json();
        setChartdata(data);
    }
    const [open, setopen] = useState(false);
    //console.log(initialAmount);
    return (
        <div className="Profile">
            <Button
                onClick={() => {
                    getchart(name)
                    setopen(!open)
                }}
                aria-controls="profile-collapse-container"
                aria-expanded={open}
                variant = "light"
            >
            {name}
            </Button>
            
            <Collapse in={open}>
                <div id="profile-collapse-container">
                    <Inputform name={name} initialAmount={initialAmount} chartdata={chartdata} getchart={getchart}/>
                </div>
            </Collapse>
        </div>
    );
    
}
export default Profile;