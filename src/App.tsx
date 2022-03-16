import * as React from 'react';
import Header from './components/header';
import Form from './components/form/index';

interface AppType {}

const App: React.FunctionComponent<AppType> = () => {
  return (
    <div style={{ borderTop: '5px solid #FAC228' }}>
        <Header />
        <Form />
    </div>
  )
};

export default App;
