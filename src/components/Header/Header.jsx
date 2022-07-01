import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ allBillingList }) => {
    return (
        <header className="bg-primary">
            <nav className="flex justify-between container mx-auto py-4">
                <Link to="/"><h3 className="text-xl font-semibold">Power Hack</h3></Link>
                <h3 className="font-semibold text-xl">Paid Total: {allBillingList?.length}</h3>
            </nav>
        </header>
    );
};

export default Header;