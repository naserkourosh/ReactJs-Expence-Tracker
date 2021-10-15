import ShowBalance from './components/ShowBalance';
import AddForm from './components/AddForm';
import ResultSection from './components/ResultSection';
import TransactionButton from './components/TransactionButton';

function App() {
  return (

     <div className="wrapper">
      
    <ShowBalance />
        <TransactionButton />

   <AddForm />

        <div className="result-container">
            <div className="daily">Mar 2021</div>
            <ResultSection />

        </div>

        <div className="caption-footer">
            Built with React, Emotion and Next. <img src="heart.png" alt="" />
        </div>
    </div>



  );
}

export default App;
