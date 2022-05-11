import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrementId, fetchData, incrementId, clearId} from './features/dataSlice';

function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  return (
    <div className="App">
      <div>
        <button onClick={() => {dispatch(fetchData())}}>Trigger Thunk</button>
        <button onClick={() => {clearId()}}>Clear</button>
        <button onClick={() => {incrementId()}}>Next</button>
        <button onClick={() => {decrementId()}}>Back</button>
      </div>
      <input onChange={(e) => { }} />
      <div>
        {data.apiData.primaryImage ? <img src={data.apiData.primaryImage} alt= {data.apiData.title} /> : <p> Waiting for Image</p>}
      </div>
    </div>
  );
}

export default App;
