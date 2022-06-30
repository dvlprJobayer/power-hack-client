import { useState } from 'react';
import { useQuery } from 'react-query';
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

    const { data: billingList, isLoading, refetch } = useQuery('billingList', () => fetch('http://localhost:5000/billing-list').then(res =>
        res.json()));

    return (
        <>
            <Header />
            <div className="container mx-auto mt-6">
                <BillingHeader setIsOpen={setIsOpen} />
                <BillingBody
                    billingList={billingList}
                    isLoading={isLoading}
                />
            </div>
            <AddAndEditModal
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                customStyles={customStyles}
                billingList={billingList}
                refetch={refetch}
            />
        </>
    );
}

export default App;
