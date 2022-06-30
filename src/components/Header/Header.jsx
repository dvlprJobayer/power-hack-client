import React from 'react';

const Header = () => {
    return (
        <header className="bg-primary">
            <nav className="flex justify-between container mx-auto py-4">
                <h3 className="text-xl font-semibold">Power Hack</h3>
                <h3 className="font-semibold text-xl">Paid Total:</h3>
            </nav>
        </header>
    );
};

export default Header;