import React from 'react';

const Pagination = ({ currentPage, itemsPerPage, totalItems, remaining , onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      sessionStorage.setItem('currentPage',parseInt(currentPage - 1))
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      sessionStorage.setItem('currentPage',parseInt(currentPage + 1))
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
          <button onClick={() => handlePageClick(i)} className="page-link">
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={handlePreviousPage}>
            Previous
          </button>
        </li>
        {renderPageNumbers()}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={handleNextPage}>
            Next
          </button>
        </li>
      </ul>
      <div className="pagination-info" style={{ borderBottom: 'solid 3px red', background: 'aliceblue', color: 'black', fontWeight: 'bold', padding: '5px', textAlign: 'center' }}>
        Page {currentPage} of {totalPages} | Total Entries: {totalItems} | Remaining Entries: {remaining}
      </div>
    </nav>
  );
};

export default Pagination;
