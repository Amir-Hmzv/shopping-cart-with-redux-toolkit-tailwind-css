import Footer from "./pages/Footer/Footer";
import Main from "./pages/Main/Main";
import Navbar from "./pages/Navbar/Navbar";
import {Provider} from 'react-redux'
import store from './redux/store'
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}> 
    <Navbar/>
    <Main/>
    <Footer/>
    </Provider>

    
  );
}

export default App;
