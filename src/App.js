import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrementId, fetchData, incrementId, clearId, inputId} from './features/dataSlice';
import { useEffect } from 'react'
 
function App(props) {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  const renderImg = () => {
    if (data.apiData) {
      return <img style={{'width': '100vw'}} src ={data.apiData.primaryImage} alt={data.apiData.title} />
    }
    else 
    {
      return <p>image here</p>
    }
  }

  useEffect(() => {
    dispatch(fetchData())
  }, [props.objectId, dispatch])

  return (
    <div className="App">
      <div>
        <button onClick={() => {dispatch(fetchData())}}>Trigger Thunk</button>
        <button onClick={() => {clearId()}}>Clear</button>
        <button onClick={() => {incrementId()}}>Next</button>
        <button onClick={() => {decrementId()}}>Back</button>
      </div>
      <input value = {data.objectId} onChange={(e) => {
        dispatch(inputId(Number(e.target.value)))
       }} />
      <div>
        {data.objectId}
        {renderImg()}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({ objectId: state.data.objectId})
 
export default App;

