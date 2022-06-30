import { useState } from 'react';
import './App.css';
import AddAndEditModal from './components/AddAndEditModal/AddAndEditModal';
import BillingBody from './components/BillingBody/BillingBody';
import BillingHeader from './components/BillingHeader/BillingHeader';
import Header from './components/Header/Header';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function App() {
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <>
            <Header />
            <div className="container mx-auto mt-6">
                <BillingHeader />
                <BillingBody />
            </div>
            <AddAndEditModal
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                customStyles={customStyles}
            />
        </>
    );
}

export default App;
