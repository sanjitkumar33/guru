import React, { useState, useEffect } from "react";
import Dheader from "../Dheader";
import Dfooter from "../Dfooter";
import "./Userprofile.css";
import { useNavigate } from "react-router-dom";
import ProfileTopbar from "./commonComponents/ProfileTopbar";
import DashboardTopbar from "./commonComponents/DashboardTopbar";
import { ENDPOINTS } from "../../utils/apiConfig.js";
import lodingImg from "../../assets/img/loading.gif";
// import { Button } from "@mui/material";
import { BsCheckLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import useInactivityTimeout from "../../hooks/useInactivityTimeout";
import { Text, Table, PasswordInput } from '@mantine/core';
import { IconXboxX } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import {PasswordInputStrength} from '../PasswordInputComponent';
import { Stack } from "rsuite";

function Userprofile() {
  const [loader, setLoader] = useState(false);
  const [resetPassErr, setResetPassErr] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const sessionid = sessionStorage.getItem("sessionid");
  const [opened, { open, close }] = useDisclosure(false);
   const [visible, { toggle }] = useDisclosure(false);
  const [fieldErrors, setFieldErrors] = useState({
    password: "",
    confirmPass: "",
    sessionid: "",
  });

  useEffect(() => {
    userProfileData();
  },[]);

  const userProfileData = async () => {
    setLoader(true);
    try {
      const response = await fetch(ENDPOINTS.DASHBOARD_PROFILE, {
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

      if (resData.mess) {
        if (resData.mess.StatusCodes === "DK00") {
          setUserInfo(resData.mess);
           
        } else {
         console.log("status code not match")

        }
        
      } else {
        // Handle unexpected response structure
        console.error("Unexpected response structure:", resData);
      }
    } catch (error) {
      setLoader(false);
      console.error("Error :", error);
    }
  };

  const HandleResetPassword = async () => {
    setLoader(true);
    setResetPassErr("");

    try {
      const response = await fetch(ENDPOINTS.CHANGE_PASSWORD_DASH, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: document.getElementById("newPassword").value,
          confirmedpassword: document.getElementById("repeatPassword").value,
          sessionid: sessionid,
        }),
      });

      const resData = await response.json();
      console.log(resData);
      setLoader(false);

      if (resData.mess) {
        if (resData.mess.StatusCodes === "U00") {
          setResetPassErr("Password has been successFully Changed.");
          // navigate(`/login`);
        } else {
          console.log(resData.mess.message);
          setResetPassErr(resData.mess.message);
        }
      } else if (resData.success === false) {
        parseFieldErrors(resData.message);
      }
    } catch (error) {
      setLoader(false);
      console.error("Error:", error);
      setResetPassErr("Internal Server Error. Please try again later.");
    }
  };

  const parseFieldErrors = (errorMessage) => {
    const fieldErrors = {
      password: "",
      confirmPass: "",
      sessionid: "",
    };

    if (errorMessage.includes('"password"'))
      fieldErrors.password =
        "*password length must be at least 8 characters long, must contain one uppercase letter, one lowercase letter, and one digit";
    if (errorMessage.includes('"confirmedpassword"'))
      fieldErrors.confirmPass = "*Password do not match";
    if (errorMessage.includes('"sessionid"'))
      fieldErrors.token = "sessionid must be string";
    setFieldErrors(fieldErrors);
  };
  // Timeout Activity
  const isInactive = useInactivityTimeout(600000); // 10 minutes
  let navigate = useNavigate();

  useEffect(() => {
    if (isInactive) {
      sessionStorage.removeItem("sessionid");
      navigate("/login");
    }
  }, [isInactive, navigate]);

  return (
    <div>
      <div className="wrapper">
        <Dheader />
        <div className="main-content">
          <div className="top bg-white mt-0 p-2">
            <DashboardTopbar />
          </div>

          <div className="row">
            <ProfileTopbar />
          </div>

          <div className="row">
            <div className="col-xl-8 col-lg-12 col-md-12 col-12">
              <div className="card pb-0 h-theme account-details border-0 shadow-lg">
                <div className="col-lg-8 col-md-8 col-12">
                  <h3 className="bg-transparent h-theme my-0 p-3">User Profile</h3>
                  <div className="card-body p-0">
                    {/* <div className="p-2 mb-2 text-succes">*{userInfo.message}</div> */}
                    <div className="user_profile">
                    <Table maw={580} layout="fixed" mx="auto" className="h-theme">
                                  <Table.Thead>
                                    <Table.Tr>
                                      <Table.Th>Property</Table.Th>
                                      <Table.Th>Value</Table.Th>
                                    </Table.Tr>
                                  </Table.Thead>
                                  <Table.Tbody>
                                    <Table.Tr>
                                      <Table.Td>Status:</Table.Td>
                                      <Table.Td>
                                        <Text size="sm" c={userInfo.message ? 'teal.6' : 'red.6'}>
                                          {/* {networkStatus.online ? 'Online' : 'Offline'} */}
                                          {userInfo.message ? userInfo.message : ''}
                                        </Text>
                                      </Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>Email:</Table.Td>
                                      <Table.Td>
                                        <Text size="sm">
                                        { userInfo.email}
                                        </Text>
                                      </Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>Mobile:</Table.Td>
                                      <Table.Td>
                                      { userInfo.mobile}
                                        </Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>Company Name :</Table.Td>
                                      <Table.Td>
                                      { userInfo.com_name}
                                        </Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>Email Verified :</Table.Td>
                                      <Table.Td>
                                      <Text size="sm" c={userInfo.email_verify === "Y" ? 'teal.6' : 'red.6'}>
                                      { userInfo.email_verify === "Y" ? <BsCheckLg className="text-success fs-2 fw-bold"/> : <ImCross className="text-danger fs-4 fw-bold "/>}
                                      </Text>
                                        </Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>Mobile Verified :</Table.Td>
                                      <Table.Td>
                                        <Text size="sm" c={userInfo.mobile_verify === "Y" ? 'teal.6' : 'red.6'}>
                                         { userInfo.mobile_verify === "Y" ? <BsCheckLg className="text-success fs-2 fw-bold"/> : <ImCross className="text-danger fs-4 fw-bold"/>}
                                        </Text>
                                      </Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>KYC Verified :</Table.Td>
                                      <Table.Td>
                                      <Text size="sm" c={userInfo.kyc_status === "Y" ? 'teal.6' : 'red.6'}>
                                      { userInfo.kyc_status === "Y" ? <BsCheckLg className="text-success fs-2 fw-bold"/> : <ImCross className="text-danger fs-4 fw-bold "/>}
                                      </Text>  
                                      </Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                      <Table.Td>User Status :</Table.Td>
                                      <Table.Td>
                                      <Text size="sm" c={userInfo.user_status === "Y" ? 'teal.6' : 'red.6'}>
                                      { userInfo.user_status === "Y" ? <BsCheckLg className="text-success fs-2 fw-bold"/> : <ImCross className="text-danger fs-4 fw-bold "/>}
                                      </Text>  
                                      </Table.Td>
                                    </Table.Tr>
                                  </Table.Tbody>
                                </Table>
                      {/* <label className="form-label" for="name">Name</label>
                        <div className="input-group mb-3  input-info">
                            <input type="text" className="form-control" id="name" aria-label="Name"/>
                            <span className="input-group-text border-0"><i className="fa fa-pencil"></i></span>
                        </div> */}
                      <button
                        className="btn btn1 btn-outline-secondary virtual-btn my-3"
                        data-bs-toggle="modal"
                        data-bs-target="#change_pass_modal" onClick={open}
                      >
                        <i className="fa fa-lock mr-3"></i>Change Account
                        Password
                      </button>
                    </div>
                  </div>
                 
                </div>
                {/* <hr></hr>
                <div className="col-lg-8 col-md-8 col-12">
                  <h3 className=" mt-0 p-3">Email Subscription</h3>
                  <div className="card-body p-3">
                    <form action="#">
                      <div className="row mb-3">
                        <div className="col-lg-8 col-8">
                          <h6>Funds Added</h6>
                        </div>

                        <div className="col-lg-4 col-4">
                          <input type="checkbox" id="switch1" />
                          <label for="switch1" className="toggle">
                            Toggle
                          </label>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-lg-8 col-8">
                          <h6>Low Balance Alert</h6>
                        </div>

                        <div className="col-lg-4 col-4">
                          <input type="checkbox" id="switch2" />
                          <label for="switch2" className="toggle">
                            Toggle
                          </label>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-lg-8 col-8">
                          <h6>UPI Prefix Approval</h6>
                        </div>

                        <div className="col-lg-4 col-4">
                          <input type="checkbox" id="switch3" />
                          <label for="switch3" className="toggle">
                            Toggle
                          </label>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-lg-8 col-8">
                          <h6>Login Alert</h6>
                        </div>

                        <div className="col-lg-4 col-4">
                          <input type="checkbox" id="switch4" />
                          <label for="switch4" className="toggle">
                            Toggle
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <hr></hr>
                <h3 className=" mt-0 p-3">Active Sessions(3)</h3>
                <div className="card-body p-3">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered ">
                      <thead className="bg-light">
                        <tr>
                          <th scope="col">Last Login</th>
                          <th scope="col">IP Address</th>
                          <th scope="col">IP Address</th>
                          <th scope="col">OS</th>
                          <th scope="col">Browswer</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>10-Jan-2023,02:18 pm</td>
                          <td>203.194.107.163</td>
                          <td>Windows 10.0</td>
                          <td>Chrome</td>
                          <td>Current Session</td>
                        </tr>
                        <tr>
                          <td>06-Jul-2020,04:33 pm</td>
                          <td>42.106.100.72</td>
                          <td>Windows 10.0</td>
                          <td>Firefox</td>
                          <td className="text-danger">
                            <i className="fa fa-sign-out text-danger"></i>{" "}
                            Logout
                          </td>
                        </tr>
                        <tr>
                          <td>07-Jul-2020,06:49 pm</td>
                          <td>14.96.96.127</td>
                          <td>Windows 10.0</td>
                          <td>Chrome</td>
                          <td className="text-danger">
                            <i className="fa fa-sign-out text-danger"></i>{" "}
                            Logout
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <Dfooter />
        </div>
      </div>

      <div
        className="modal fade docReqModal"
        id="change_pass_modal"
        aria-labelledby="change_pass_modalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-md">
          <div className="modal-content docsReqModal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="change_pass_modalLabel">
                Change Password
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                {/* <div className="inputbox">
                  <label>Password</label>
                  <input
                    type="text"
                    id="newPassword"
                    className="form-control"
                    placeholder="New Password"
                  />
                  <p className="msg text-danger">{fieldErrors.password}</p>
                </div>

                <div className="inputbox">
                  <label>Confirm Password</label>

                  <input
                    type="text"
                    id="repeatPassword"
                    className="form-control"
                    placeholder="Repeat Password"
                  />
                  <p className="msg text-danger">{fieldErrors.confirmPass}</p>
                </div> */}
                <PasswordInputStrength/>
                <p className="msg text-danger">{fieldErrors.token}</p>
                <span id="resetaPassError" className="text-success">
                  {resetPassErr}
                </span>
                <div className="text-right">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={HandleResetPassword}
                  >
                    Submit
                  </Button>
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
        </div>
      </div>

      <div>
      {/* <PasswordInputComponent/> */}
      </div>
    </div>
  );
}

export default Userprofile;
