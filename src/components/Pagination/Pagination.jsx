import React from 'react';
import ReactPaginate from 'react-paginate';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Pagination = ({ handlePageClick }) => {
    return (
        <div className='flex justify-center my-8'>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<BsArrowRight />}
                previousLabel={<BsArrowLeft />}
                onPageChange={handlePageClick}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                pageCount={25}
                renderOnZeroPageCount={null}
                containerClassName="flex items-center"
                activeLinkClassName='active-page'
                pageClassName='mx-2'
                pageLinkClassName='px-2 py-1 bg-primary text-black font-semibold'
            />
        </div>
    );
};

export default Pagination;