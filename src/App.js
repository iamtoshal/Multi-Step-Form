import React, { useContext } from 'react';
import './App.css';
import FirstStep from './Components/FirstStep';
import SecondStep from './Components/SecondStep';
import ThirdStep from './Components/ThirdStep';
import { Stepper, StepLabel, Step } from '@material-ui/core';
import { multiStepContext } from './StepContext';
import DisplayData from './Components/DisplayData';

function App() {

  const { currentStep, finalData } = useContext(multiStepContext);

  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ color: 'red', textDecoration: 'underline' }}>ReactJS Multi Step Application</h3>

        <div className='center-stepper'>
          <Stepper style={{ width: '18%' }} activeStep={currentStep - 1} orientation="horizontal">
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
        <br />
        {finalData.length > 0 ? <DisplayData /> : ''}

      </header>
    </div>
  );
}

export default App;
