import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';


function App() {
    const [token, setToken] = useState('');
    const [allBillLength, setAllBillLength] = useState(0);
    const { data: allBill, refetch } = useQuery(['allBillingList', token], () => axios(`https://socialist-worms-59722.herokuapp.com/billing-list`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }));

    useEffect(() => {
        if (allBill?.data) {
            setAllBillLength(allBill?.data?.length)
        }
    }, [allBill])

    return (
        <>
            <Header allBillLength={allBillLength} />
            <Routes>
                <Route path='/' element={<Main
                    setAllBillLength={setAllBillLength}
                    token={token}
                    allBill={allBill}
                    refetchAll={refetch} />}
                />
                <Route path='/login' element={<Login setToken={setToken} />} />
                <Route path='/register' element={<Register setToken={setToken} />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
