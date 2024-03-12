import './App.css';
import Btc2 from './components/Btc2';
import Post from './components/Post';

export default function App() {
  return (
    <div className="App">
      <Post />
    </div>
  );
}

const styles = {
  textProps: {
    alignItems: 'center',
    justifyContent: 'center',
  }
}
