import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import WarningSign from './components/WarningSign'
// import MyBadge from './components/MyBadge'
// import SingleBook from './components/SingleBook'
import BookList from "./components/BookList";
import fantasyBooks from "./Data/fantasyBooks.json";
import MyFooter from "./components/MyFooter";
import MyNavBar from "./components/MyNavBar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Registration from "./components/Registration";


function App() {
  return (
    <div className="App">
      <>  
        <Router>
        <MyNavBar/>
        {/* <WarningSign text="Watch out again!" /> */}
        {/* <MyBadge text="NEW!!" color="info" /> */}
        {/* <SingleBook book={fantasyBooks[0]} /> */}
     
         <Route path="/" exact component={BookList}/>
         <Route path="/registration" exact component={Registration}/>
         
         <MyFooter/>
        </Router>
        
        
      </>
    </div>
  );
}

export default App;

