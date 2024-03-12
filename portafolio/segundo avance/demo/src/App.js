// import Cabecera from './components/Cabecera';
import './App.css';

import Welcome from './components/Welcome';
import Text from './components/Text';
import Image from './components/Image';
import Table from './components/Table';

import Form from './components/Form';

function App() {
    return (
        <div className='App'>
            <Welcome name="Mel" />
            <Welcome msg="Hola como estas?" />
            <Text p="lorem ipsum algo mas"/>
            <Image />
            <h1>Hola Mundo 2</h1>
            <Table />
            <Form />
        </div>
    );
}

export default App;
