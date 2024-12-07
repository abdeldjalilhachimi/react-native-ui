import React from 'react';
import { SuccessScreen } from './src/components/SuccessScreen';


function App(): React.JSX.Element {
  return (
    <SuccessScreen
      message="Action successful!"
      description="Everything will be fine!"
    />
  );
}



export default App;
