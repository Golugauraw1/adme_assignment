import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous Page
      </button>
      <button onClick={() => onPageChange(currentPage)} className="active">
        {currentPage}
      </button>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
