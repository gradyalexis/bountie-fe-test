import * as React from 'react';
import HeaderMsg from './components/header/HeaderMessage';
import Header from './components/header/Header';
import Form from './components/form/index';
interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div style={{
      borderTop: '5px solid #FFCB3D',
    }}>
        <Header />
        <HeaderMsg />
        <Form />
    </div>
  )
};

export default App;
