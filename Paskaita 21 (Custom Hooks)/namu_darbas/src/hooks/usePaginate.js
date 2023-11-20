import { useState, useEffect } from "react";

export const usePaginationMano = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    setPaginatedData(data.slice(start, end));
  }, [currentPage, data, itemsPerPage]);

  const handlePageChange = (page) => {
    const pageToSet = Math.max(1, Math.min(page, Math.ceil(data.length / itemsPerPage)));
    setCurrentPage(pageToSet);
  };

  return {
    currentPage,
    paginatedData,
    handlePageChange,
  };
};

export const usePaginationPagalUzduoti = (data, itemsPerPage) => {
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    const paginated = [];
    for (let i = 0; i < data.length; i += itemsPerPage) {
      paginated.push(data.slice(i, i + itemsPerPage));
    }
    setPaginatedData(paginated);
  }, [data, itemsPerPage]);

  return paginatedData;
};
