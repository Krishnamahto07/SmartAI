import './App.css';
import ChatBestPrice from './services/ChatBestPrice';
// import ChatGPT from './services/ChatGPT';
import { setResponse } from './redux/slices/chatGptSlice';
import { useDispatch, useSelector } from 'react-redux';
// import {setToken ,setLoading} from "../../redux/slices/authSlice"
// 
function App() {
  // const dispatch = useDispatch();
  // const ans = useSelector((state) => state.chatGpt.response)
  // dispatch(setResponse("thik ho vai"))
  // console.log(ans)
  return (
    <div className="App">
      {/* <ChatGPT/> */}
      App 
      <ChatBestPrice/>
    </div>
  );
}

export default App;
