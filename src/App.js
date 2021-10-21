import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowBalance from './components/ShowBalance';
import AddForm from './components/AddForm';
import ResultSection from './components/ResultSection';
import TransactionButton from './components/TransactionButton';

function App() {
 
  return (
    <div className="wrapper">
      <Router>
      <ShowBalance />
        
        
        
        <Route exact path="/" component={TransactionButton} />

        <Route exact path="/add" component={AddForm} />


        <div className="result-container">
        <Route exact path='/result' component={ResultSection} />
        </div>
      </Router>
      
      
      
      
      
      
      <div className="caption-footer">

        Built with React, Emotion and Next. <img src="heart.png" alt="" />

      </div>
    </div>
  );
}

export default App;
