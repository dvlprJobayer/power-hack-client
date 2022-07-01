import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
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

const Main = ({ setAllBillLength, refetchAll, token, allBill }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenTwo, setIsOpenTwo] = useState(false);
    const [billingList, setBillingList] = useState([]);
    const [selectedBill, setSelectedBill] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [page, setPage] = useState(0);

    const navigate = useNavigate();

    const handlePageClick = page => {
        setPage(page.selected);
    }

    const { data, isLoading, refetch, error } = useQuery(['billingList', page, token], () => axios(`https://socialist-worms-59722.herokuapp.com/billing-list?page=${page}&size=10`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }));

    const { data: pageCount, refetch: refetchTwo } = useQuery('pageCount', () => fetch('https://socialist-worms-59722.herokuapp.com/page-count').then(res => res.json()));

    useEffect(() => {
        if (data?.data) {
            setBillingList(data.data);
        }
    }, [data]);

    useEffect(() => {
        if (searchInput !== '') {
            const filteredBill = allBill?.data?.filter(oneBill => {
                if (oneBill.name.toLowerCase().includes(searchInput.toLowerCase())) {
                    return oneBill
                } else if (oneBill.email.toLowerCase().includes(searchInput.toLowerCase())) {
                    return oneBill
                } else if (oneBill.phone.includes(searchInput)) {
                    return oneBill
                }
            })
            setBillingList(filteredBill)
        } else {
            setBillingList(data?.data)
        }
    }, [searchInput, allBill, data]);

    useEffect(() => {
        if (error?.response?.status === 403 || error?.response?.status === 401) {
            navigate('/login');
        }
    }, [error, navigate]);

    return (
        <>
            <div className="container mx-auto mt-6">
                <BillingHeader
                    setSelectedBill={setSelectedBill}
                    setIsOpen={setIsOpen}
                    setSearchInput={setSearchInput}
                />
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
                refetchAll={refetchAll}
            />
        </>
    );
};

export default Main;