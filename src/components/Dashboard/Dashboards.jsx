import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Panel, ButtonGroup, HStack } from 'rsuite';
import "./Dashboards.css";
import Dheader from "../Dheader";
import Dfooter from "../Dfooter";
import lodingImg from "../../assets/img/loading.gif";
import { useNavigate } from "react-router-dom";
import { ApplicationContext } from "../../context/ApplicationContext"; 
import { ENDPOINTS } from "../../utils/apiConfig";
import DashboardTopbar from "./commonComponents/DashboardTopbar";
import { Button } from "@mui/material";
import useInactivityTimeout from "../../hooks/useInactivityTimeout";
import { useTheme } from "../theme-context";
import  BarChart  from "./BarStackChart";
import CustomButtonGroup from "./commonComponents/TableIconButtons";
// import SparkleChart from "./commonComponents/Charts/SparkleChart";
import {StatisticGrid} from './commonComponents/StatsGrid/StatisticGrid'
import { MdOutlineAccountBalance } from "react-icons/md";
import UPISvgIcon from "./commonComponents/UpiIcon";
import { FaFileContract } from "react-icons/fa";
function Dashboard() {
  const {theme, toggleTheme} = useTheme();
  const { setKycStatus } = useContext(ApplicationContext);
  const dash_index = ENDPOINTS.DASH_BOARD;
  const add_upi = ENDPOINTS.CREATE_UPI_ID;
  const add_acc = ENDPOINTS.CREATE_VIRTUAL_BANK_ACCOUNT;
  const sessionid = sessionStorage.getItem("sessionid");
  const [loader, setLoader] = useState(false);
  const [dashboardIndex, setDashboardIndex] = useState({});
  const [mainBalance, setMainBalance] = useState("");
  const [totalSettalment, setTotalSettalment] = useState("");
  const [upiID, setUpiId] = useState("");
  const [accountDetails, setAccountDetials] = useState({});
  let navigate = useNavigate();

  // useEffect(() => {
  //   dashboardIndexData();
  // },[sessionid]);

  // const dashboardIndexData = async () => {
  //   setLoader(true);
  //   try {
  //     const response = await fetch(dash_index, {
  //       method: "POST",
  //       headers: {
  //         accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         sessionid: sessionid,
  //       }),
  //     });

  //     const resData = await response.json();
  //     setLoader(false);

  //     if (resData.mess) {
  //       if (resData.mess.StatusCodes === "DI00") {
  //         setDashboardIndex(resData.mess);
  //         setMainBalance(resData.mess.mainbalance);
  //         setTotalSettalment(resData.mess.settelment);
  //         setKycStatus(resData.mess.kyc_status); 
  //       } else {
  //         // navigate(`/login`);

  //       }
  //       if (resData.mess.kyc_status === "N")
  //       {
  //         const myModal = new window.bootstrap.Modal(
  //           document.getElementById("docsReqModal")
  //         );
  //         myModal.show();
  //       }
  //     } else {
  //       // Handle unexpected response structure
  //       console.error("Unexpected response structure:", resData);
  //     }
  //   } catch (error) {
  //     setLoader(false);
  //     console.error("Error :", error);
  //   }
  // };


  const add_UPI_id = async () => {
    if (dashboardIndex.kyc_status === "N") {
      const myModal = new window.bootstrap.Modal(
        document.getElementById("docsReqModal")
      );
      myModal.show();
      sessionStorage.setItem("kyc_status", "N");
      sessionStorage.setItem("kyc_status","N");
    }
    else{
      setLoader(true);
      try {
        const response = await fetch(add_upi, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionid: sessionid,
          }),
        });

        const resData = await response.json();
        setLoader(false);

        if (resData.StatusCodes) {
          if (resData.StatusCodes === "00") {
            setUpiId(resData.responsed.upi_id);
            const myModal = new window.bootstrap.Modal(
              document.getElementById("upiModal")
            );
            myModal.show();
          } else {
            console.log("If status code not 00, then go to this else condition");
          }
        } else {
          // Handle unexpected response structure
          alert(resData.mess.message);
          console.error("Unexpected response structure:", resData);
        }
      } catch (error) {
        setLoader(false);
        console.error("Error during OTP verification:", error);
      }
      sessionStorage.setItem("kyc_status", "Y");
    }
  };

  const add_Account = async () => {
    if (dashboardIndex.kyc_status === "N") {
      const myModal = new window.bootstrap.Modal(
        document.getElementById("docsReqModal")
      );
      myModal.show();
    }
    else {
      setLoader(true);
      try {
        const response = await fetch(add_acc, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionid: sessionid,
          }),
        });

        const resData = await response.json();
        setLoader(false);

        if (resData.StatusCodes) {
          if (resData.StatusCodes === "00") {
            setAccountDetials(resData.responsed);
            const myModal = new window.bootstrap.Modal(
              document.getElementById("accountDetailsModal")
            );
            myModal.show();
          } else {
            console.log("If status code not 00, then go to this else condition");
          }
        } else {
          // Handle unexpected response structure
          alert(resData.mess.message);
          console.error("Unexpected response structure:", resData);
        }
      } catch (error) {
        setLoader(false);
        console.error("Error during OTP verification:", error);
      }
    }
  };

  const barChartData = [
    {
      name: 'UPI',
      data: [
        11, 
        8, 9, 10, 3, 11, 11,
         11, 12, 13, 2, 12, 5, 8, 22, 6, 8, 6, 4, 1, 8, 24, 29, 51, 40, 47,
        23, 26, 50, 26, 22, 27, 46, 47, 81, 46, 40
      ]
    },
    // {
    //   name: 'Cards',
    //   data: [
    //     7, 5, 4, 3, 3, 11, 4, 7, 5, 12, 12, 15, 13, 12, 6, 7, 7, 1, 5, 5, 2, 12, 4, 6, 18, 3, 5, 2,
    //     13, 15, 20, 47, 18, 15, 11, 10, 9
    //   ]
    // },
    {
      name: 'NetBanking',
      data: [
        4, 
        9, 11, 7, 8, 3, 6,
        5, 5, 4, 6, 4, 11, 10, 3, 6, 7, 5, 2, 8, 4, 9, 9, 2, 6, 7, 5, 1, 8, 3,
        12, 3, 4, 9, 7, 11, 10
      ]
    }
  ];

  const DateLabels = [
    '2022-01-20',
    '2022-01-21',
    '2022-01-22',
    '2022-01-23',
    '2022-01-24',
    '2022-01-25',
    '2022-01-26',
    '2022-01-27',
    '2022-01-28',
    '2022-01-29',
    '2022-01-30',
    '2022-02-01',
    '2022-02-02',
    '2022-02-03',
    '2022-02-04',
    '2022-02-05',
    '2022-02-06',
    '2022-02-07',
    '2022-02-08',
    '2022-02-09',
    '2022-02-10',
    '2022-02-11',
    '2022-02-12',
    '2022-02-13',
    '2022-02-14',
    '2022-02-15',
    '2022-02-16',
    '2022-02-17',
    '2022-02-18',
    '2022-02-19',
    '2022-02-20',
    '2022-02-21',
    '2022-02-22',
    '2022-02-23',
    '2022-02-24',
    '2022-02-25',
    '2022-02-26'
  ];
  const copyToClipboard = async () => {
    const tokenInput = document.getElementById("upi_id");
    try {
      await navigator.clipboard.writeText(tokenInput.innerHTML);
      alert("UPI ID copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  // Timeout activity
  const isInactive = useInactivityTimeout(600000); // 10 minutes
  

  useEffect(() => {
    if (isInactive) {
      sessionStorage.removeItem("sessionid");
      navigate("/login");
    }
  }, [isInactive, navigate]);

  return (
    <div>
      <div className={`wrapper ${theme}`}>
        <Dheader />
        <div className="main-content">
          <div className={`top rounded-lg p-2 dashboardTopbar ${theme}`}>
            <DashboardTopbar />
          </div>

          <div className="row">
            <div className="card account-card mt-4">
              <div className="card-body">
                <div className="row">
                  {/* <div className="col-lg-4 col-md-4 col-12 my-auto">
                    <p>Account Balance</p>
                    <h3 > ₹ {mainBalance }</h3>
                  
                  </div>
                  <div className="col-lg-5 col-md-5 col-12 my-auto">
                    <p>Total Settlement</p>
                    <h3> ₹ {totalSettalment}</h3>
                  </div> */}
                   <StatisticGrid />
                  {/* <div className="col-lg-3 col-md-3 col-12">
                    <div className="img-bg">
                      <img
                        src="https://i.ibb.co/Fx8FHCd/account-card-img.png"
                        alt="account-card-img"
                      />
                    </div>
                  </div> */}
                </div>
                {/* <div className="row">
                <StatisticGrid/>
                </div> */}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <button
                type="button"
                className="btn btn-light-blue"
                onClick={add_Account}
              >
                <i className="fa mr-2"><MdOutlineAccountBalance height='25' width='25' /></i> Add New Account
              </button>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <button type="button" className="btn btn-light-grey">
                <i className="fa mr-2"><FaFileContract height='25' width='25'/></i> Settlements
              </button>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <button
                type="button"
                className="btn btn-light-pink"
                onClick={add_UPI_id}
              >
                <i className="fa mr-1"><UPISvgIcon size={21}/></i> Add New UPI ID
              </button>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="card pb-0 account-details border-0 shadow-lg">
                <h4 className="card-header mt-0 py-3">
                  Transfer funds to the following account to use PayUGuru
                </h4>
                <div className="card-body p-0 table-responsive">
                {dashboardIndex.kyc_status !== "Y" ? (
                  <p className="text-dark text-start ps-5">
                    <i className="fa fa-info-circle"></i> Please update your KYC.
                  </p>
                ) : (
                  <table className="table table-borderless account-table">
                    <tbody>
                      <tr>
                        <td>
                          Company Name:<b> Arena Itech</b>
                        </td>
                        <td>Modes UPI/IMPS/NEFT/RTGS</td>
                      </tr>
                      <tr>
                        <td>
                          A/C No:<b> 708090731181</b>{" "}
                          <i className="fa fa-copy"></i>
                        </td>
                        <td>
                          UPI ID:<b> xxxxxxxx@cccc</b>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          IFSC:<b> YESB0CMSN0C</b>{" "}
                          <i className="fa fa-copy"></i>
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                )}
                  
                </div>
              </div>
            </div>
          </div> */}

          <div className="row mt-3 ">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="card pb-0 account-details border-0 shadow-lg">
                <div className="card-header">
                  <div className="row theme h-theme">
                    <div className=" col-xl-4 col-lg-4 col-md-12 col-12">
                      <h5 className="font-weight-bold mt-2">
                        Account Statement
                      </h5>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-12 col-12 ">
                      <p className="float-right mt-2">
                        *Date: 8 Nov-23, 0:00:00 to 2 Dec-23, 23:59:59
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card-body p-3">
                  <div>
                  <Row gutter={30} className="dashboard-header">
                      {/* <Col xs={8}>
                        <Panel className="trend-box bg-gradient-red">
                          {/* <img className="chart-img" src={images.PVIcon} /> 
                          <div className="title">Page Views </div>
                          <div className="value">281,358</div>
                        </Panel>
                      </Col>
                      <Col xs={8}>
                        <Panel className="trend-box bg-gradient-green">
                          {/* <img className="chart-img" src={images.VVICon} /> 
                          <div className="title">Visits </div>
                          <div className="value">251,901</div>
                        </Panel>
                      </Col>
                      <Col xs={8}>
                        <Panel className="trend-box bg-gradient-blue">
                          {/* <img className="chart-img" src={images.UVIcon} /> 
                          <div className="title">Unique Visitors</div>
                          <div className="value">25,135</div>
                        </Panel>
                      </Col> */}
                </Row>    
                <Row gutter={30}>
               <Col xs={16}>
                <BarChart
                  title="Payments Summary"
                  actions={
                                <ButtonGroup>
                                  <HStack>
                                  <Button> active Day</Button>
                                  <Button>Week</Button>
                                  <Button>Month</Button>
                                  <CustomButtonGroup/>
                                  </HStack>
                                </ButtonGroup>
                        }
                        data={barChartData}
                        type="bar"
                        labels={DateLabels}
                      />
                    </Col>
                  </Row>
                  </div>
                  <div className="table-responsive">
                    <table
                      id="example"
                      className="table table-striped table-bordered "
                    >
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Transaction Time</th>
                          <th>Transaction Type</th>
                          <th>Payment Mode</th>
                          <th>Transaction Amount</th>
                          <th>Fess & GST</th>
                          <th>Settlement Amount</th>
                          <th>Closing Amount</th>
                          <th>Credit/Debit</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>79214204</td>
                          <td>5: 40 am</td>
                          <td>Time Activity</td>
                          <td>Visa</td>
                          <td>₹ 5,600.00</td>
                          <td>₹ 1.23</td>
                          <td>₹ 2,500.00</td>
                          <td>₹ 3,666.71</td>
                          <td>₹ 855.00</td>
                          <td>closed</td>
                        </tr>
                        <tr>
                          <td>79212231</td>
                          <td>7: 30 am</td>
                          <td>Credit Memo</td>
                          <td>Paypal</td>
                          <td>₹ 16,500.00</td>
                          <td>₹ 5.33</td>
                          <td>₹ 16,500.00</td>
                          <td>₹ 102.00</td>
                          <td>₹ 232,000.00</td>
                          <td>closed</td>
                        </tr>
                        <tr>
                          <td>79214079</td>
                          <td>8: 20 am</td>
                          <td>Invoice</td>
                          <td>Mastedcard</td>
                          <td>₹ 1,380.00</td>
                          <td>₹ 2.33</td>
                          <td>₹ 349.00</td>
                          <td>₹ 16,500.00</td>
                          <td>₹ 349.00</td>
                          <td>Overdue</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="loaderContainer">
            <div className="inputbox text-center loader-box">
              {loader && (
                <img src={lodingImg} alt="loading..." className="loaderImg" />
              )}
            </div>
          </div>

          <Dfooter />
        </div>
      </div>

      {/* create UPI Modal */}
      <div
        className="modal fade docReqModal"
        id="upiModal"
        aria-labelledby="upiModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog">
          <div className="modal-content docsReqModal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="upiModalLabel">
                Your UPI Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body modalBodySection">
              <div className="text-center mb-3">
                <h6>Your UPI ID - </h6>
                <div className="d-flex justify-content-center align-items-center">
                  <h6 id="upi_id" className="me-2">{upiID} </h6>
                      <Button
                        variant="contained"
                        color="success"
                        title="Copy"
                        onClick={copyToClipboard}
                      >
                        <i className="fa fa-copy"></i>
                      </Button>
                </div>
                
                <p className="mt-5 text-success">
                  {" "}
                  Please copy it or save screenshot.
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Account Details Modal */}
      <div
        className="modal fade docReqModal"
        id="accountDetailsModal"
        aria-labelledby="accountDetailsModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog">
          <div className="modal-content docsReqModal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="accountDetailsModalLabel">
                Your Account Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body modalBodySection">
              <div className="row">
                <div className="col-4">Bank -</div>
                <div className="col-8">{accountDetails.AC_bank}</div>
              </div>
              <div className="row">
                <div className="col-4">IFSC -</div>
                <div className="col-8">{accountDetails.AC_ifsc}</div>
              </div>
              <div className="row">
                <div className="col-4">Swift -</div>
                <div className="col-8">{accountDetails.AC_swift}</div>
              </div>
              <div className="row">
                <div className="col-4">Account ID -</div>
                <div className="col-8">{accountDetails.AC_id}</div>
              </div>

              <p className="mt-5 text-success">
                {" "}
                Please copy it or save screenshot.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;