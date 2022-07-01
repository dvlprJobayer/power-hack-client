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
    const [allBillLength, setAllBillLength] = useState(0);
    const { data: billingList, refetch } = useQuery('allBillingList', () => fetch(`http://localhost:5000/billing-list`).then(res =>
        res.json()));

    useEffect(() => {
        if (billingList) {
            setAllBillLength(billingList.length)
        }
    }, [billingList])

    return (
        <>
            <Header allBillLength={allBillLength} />
            <Routes>
                <Route path='/' element={<Main
                    setAllBillLength={setAllBillLength}
                    refetchAll={refetch} />}
                />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
