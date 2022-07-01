import React from 'react';
import ReactPaginate from 'react-paginate';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Pagination = ({ handlePageClick, pageCount }) => {
    return (
        <div className='flex justify-center my-8'>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<BsArrowRight className='text-2xl' />}
                previousLabel={<BsArrowLeft className='text-2xl' />}
                onPageChange={handlePageClick}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                containerClassName="flex items-center"
                activeLinkClassName='active-page'
                pageClassName='mx-3'
                pageLinkClassName='px-2 py-1 bg-primary text-black font-semibold'
            />
        </div>
    );
};

export default Pagination;