import React, { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../StepContext';

function FirstStep(props) {
    const { setStep, userData, setUserData } = useContext(multiStepContext);

    return (
        <div>
            <div>
                <TextField label="First Name" value={userData['firstname']} onChange={(e) => setUserData({ ...userData, "firstname": e.target.value })} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Last Name" value={userData['lastname']} onChange={(e) => setUserData({ ...userData, "lastname": e.target.value })} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Contact Number" value={userData['contact']} onChange={(e) => setUserData({ ...userData, "contact": e.target.value })} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <Button variant="contained" onClick={() => setStep(2)} color="primary">Next</Button>
            </div>
        </div>
    );
}

export default FirstStep;