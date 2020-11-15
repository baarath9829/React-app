import {useState} from 'react';
import {Button,Collapse} from 'react-bootstrap';
import Inputform from './Inputform';

const Profile = ({name,initialAmount}) => {
    const [open, setopen] = useState(false);
    return (
        <div className="Profile">
            <Button
                onClick={() => setopen(!open)}
                aria-controls="profile-collapse-container"
                aria-expanded={open}
                variant = "light"
            >
            {name}
            </Button>
            
            <Collapse in={open}>
                <div id="profile-collapse-container">
                    <Inputform initialAmount={initialAmount}/>
                </div>
            </Collapse>
        </div>
    );
    
}
export default Profile;