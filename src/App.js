import './App.css';
import Counter from './Handson/Counter';
import Hover from './Handson/Hover';
import PureCompo from './Handson/PureCompo';

function App(){
  return(
    <div>
      <h1 className='head'>Handson Five</h1>
      <Counter />
      <Hover />
      <PureCompo />
    </div>
  )
}

export default App;