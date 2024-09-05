import React, { useEffect, useState, useCallback } from "react";
import Dheader from "../Dheader";
import Dfooter from "../Dfooter";
import "./Virtualaccount.css";
import DashboardTopbar from "./commonComponents/DashboardTopbar";
import VirtualAccountTable from "./commonComponents/VirtualAccountTable"; // Adjust the path as necessary
import { FetchVirtualAccountList } from "./commonComponents/data";
import Pagination from "../Pagination";
import { ENDPOINTS } from "../../utils/apiConfig";

// import TaskComponent from "../../app/components/Table/TaskPage";

function VirtualAccount() {
  const [acList, setAcList] = useState([]);
  const sessionid = sessionStorage.getItem("sessionid");
  const [loader, setLoader] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [isFetching, setIsFetching] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [sortDirection, setSortDirection] = useState('');

  const fetchData = useCallback(
    async (page = 1, loadMore = false) => {
      setLoader(true);
      try {
        const skipItems = (page - 1) * itemsPerPage ;
        const response = await FetchVirtualAccountList(skipItems, itemsPerPage);

        const paginationData = await response.data.pagination;
        const tasksData = await response.data.virtual_account_list;

        setTotalItems(paginationData.totalCount);
        setCurrentPage(paginationData.currentPage);
        setRemaining(paginationData.remainingItems);
        if (!loadMore) {
          setAcList(JSON.parse(tasksData));
        } else {
          setAcList((prevList) => [
            ...prevList,
            ...JSON.parse(tasksData)
          ]);
        }
      } catch (error) {
        console.error("Error:", error.message);
      } finally {
        setLoader(false);
      }
    },
    [itemsPerPage, sortBy, sortDirection]
  );

  useEffect(() => {
    fetchData(currentPage, false);
  }, [fetchData, currentPage]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight && !isFetching) {
  //       setIsFetching(true);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [isFetching]);

  useEffect(() => {
    if (!isFetching) return;
    fetchData(currentPage + 1, true).then(() => {
      setIsFetching(false);
    });
  }, [isFetching, currentPage, fetchData]);

  const toggleStatus = async (account) => {
    try {
      let accountNumber = account.AC_id;
      const response = await fetch(ENDPOINTS.UPDATE_VIRTUAL_ACCOUNT_STATUS, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          AC_id: accountNumber,
          sessionid: sessionid,
        }),
      });

      const resData = await response.json();
      if (resData && resData.StatusCodes === "00") {
        setAcList((prevList)=>
         prevList.map((item) => 
          item.AC_id === accountNumber ? {...item, status: item.status === "enabled" ? "disabled" : "enabled" }
              : item
          )
        );
        fetchData(currentPage); // Refresh the data after updating the status
      } else {
        console.log("status code not match")
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handlePageChange = (newPage) => {
    if (newPage !== currentPage && newPage > currentPage) {
      setCurrentPage(newPage);
    }
    else{
      setCurrentPage(currentPage - 1);
      
    }
  };

  const handleSort = (column) => {
    const direction = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortBy(column);
    setSortDirection(direction);
    fetchData(1, false); // Fetch data with new sorting
  };

  return (
    <div>
      <div className="wrapper">
        <Dheader />
        <div className="main-content">
          <div className="top bg-white mt-0 p-2">
            <DashboardTopbar />
          </div>

          <div className="row mb-3">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="card pb-0 account-details border-0 shadow-lg">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                    <h4 className="bg-transparent mt-0 p-3 h-theme">
                      Virtual Accounts
                    </h4>
                  </div>

                  <div className="col-xl-8 col-lg-12 col-md-12 col-12">
                    <div className="d-flex justify-content-end align-items-center pt-2">
                    
                      <button className="btn  btn1 mr-2 btn-outline-secondary">
                        Add Virtual Account<i className="fa fa-plus ml-2"></i>
                      </button>
                      <button className="btn btn1 mr-2 btn-outline-secondary">
                        Export <i className="fa fa-external-link ml-2"></i>
                      </button>
                      {/* <button className="btn btn1 bg-dark text-white mr-2">
                        Filter <i className="fa fa-filter ml-2"></i>
                      </button> */}
                    
                    </div>
                  </div>
                </div>
                <div className="card-body p-3">
                <div className="d-flex mb-2">
              
                </div>
                  <div className="table-responsive">
                    {loader ? (
                      <div className="text-center p-5">
                        <div className="spinner-border text-primary" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      <>
                   
                        <VirtualAccountTable
                          data={acList}
                          toggleStatus={toggleStatus}
                          onSort={handleSort}
                          sortBy={sortBy}
                          sortDirection={sortDirection}
                        />
                        <Pagination
                          currentPage={currentPage}
                          itemsPerPage={itemsPerPage}
                          totalItems={totalItems}
                          remaining={remaining}
                          onPageChange={handlePageChange} 
                        /> 


                         {/* TAILWINDCSS Table Component with shadcn WIP */}
                        {/* <TaskComponent/> */}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Dfooter />
        </div>
      </div>
    </div>
  );
}

export default VirtualAccount;
