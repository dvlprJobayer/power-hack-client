import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import './App.css';
import AddAndEditModal from './components/AddAndEditModal/AddAndEditModal';
import BillingBody from './components/BillingBody/BillingBody';
import BillingHeader from './components/BillingHeader/BillingHeader';
import DeleteModal from './components/DeleteModal/DeleteModal';
import Header from './components/Header/Header';
import Pagination from './components/Pagination/Pagination';


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
    const [modalIsOpenTwo, setIsOpenTwo] = useState(false);
    const [billingList, setBillingList] = useState([]);
    const [selectedBill, setSelectedBill] = useState(null);
    const [page, setPage] = useState(0)

    const handlePageClick = page => {
        setPage(page.selected);
    }

    const { data, isLoading, refetch } = useQuery(['billingList', page], () => fetch(`http://localhost:5000/billing-list?page=${page}&size=10`).then(res =>
        res.json()));

    const { data: allBillingList } = useQuery('allBillingList', () => fetch(`http://localhost:5000/billing-list`).then(res =>
        res.json()));

    const { data: pageCount, refetch: refetchTwo } = useQuery('pageCount', () => fetch('http://localhost:5000/page-count').then(res =>
        res.json()));

    useEffect(() => {
        if (data) {
            setBillingList(data);
        }
    }, [data]);

    return (
        <>
            <Header allBillingList={allBillingList} />
            <div className="container mx-auto mt-6">
                <BillingHeader setSelectedBill={setSelectedBill} setIsOpen={setIsOpen} />
                <BillingBody
                    billingList={billingList}
                    isLoading={isLoading}
                    setIsOpen={setIsOpen}
                    setIsOpenTwo={setIsOpenTwo}
                    setSelectedBill={setSelectedBill}
                />
                <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
            </div>
            <AddAndEditModal
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                customStyles={customStyles}
                setBillingList={setBillingList}
                refetch={refetch}
                refetchTwo={refetchTwo}
                selectedBill={selectedBill}
                setSelectedBill={setSelectedBill}
            />
            <DeleteModal
                customStyles={customStyles}
                modalIsOpenTwo={modalIsOpenTwo}
                setIsOpenTwo={setIsOpenTwo}
                selectedBill={selectedBill}
                setSelectedBill={setSelectedBill}
                refetch={refetch}
            />
        </>
    );
}

export default App;
