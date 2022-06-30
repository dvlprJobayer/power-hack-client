import './App.css';
import BillingBody from './components/BillingBody/BillingBody';
import BillingHeader from './components/BillingHeader/BillingHeader';
import Header from './components/Header/Header';

function App() {
    return (
        <>
            <Header />
            <div className="container mx-auto mt-6">
                <BillingHeader />
                <BillingBody />
            </div>
        </>
    );
}

export default App;
