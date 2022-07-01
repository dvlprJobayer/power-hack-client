import React from 'react';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AddAndEditModal from '../AddAndEditModal/AddAndEditModal';
import BillingBody from '../BillingBody/BillingBody';
import BillingHeader from '../BillingHeader/BillingHeader';
import DeleteModal from '../DeleteModal/DeleteModal';
import Pagination from '../Pagination/Pagination';


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

const Main = ({ setAllBillLength, refetchAll }) => {
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

    const { data: pageCount, refetch: refetchTwo } = useQuery('pageCount', () => fetch('http://localhost:5000/page-count').then(res =>
        res.json()));

    useEffect(() => {
        if (data) {
            setBillingList(data);
        }
    }, [data]);

    return (
        <>
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
                refetchAll={refetchAll}
                setAllBillLength={setAllBillLength}
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
};

export default Main;