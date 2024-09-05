import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dheader from '../Dheader';
import Dfooter from '../Dfooter';
import { FiSearch } from 'react-icons/fi';
import './Reports.css';
import DashboardTopbar from './commonComponents/DashboardTopbar';
import useInactivityTimeout from "../../hooks/useInactivityTimeout";
import Panel from 'rsuite/Panel';
import 'rsuite/Panel/styles/index.css';
import DateRangeToolBar from './PageToolbar';
import { HStack, Stack, VStack } from "rsuite";
import 'rsuite/Stack/styles/index.css';
import CustomButtonGroup from './commonComponents/TableIconButtons';
import { useTheme } from "../theme-context";


function Reports(){
    const isInactive = useInactivityTimeout(600000); // 10 minutes
    let navigate = useNavigate();
    const { theme } = useTheme();
    useEffect(() => {
        if (isInactive) {
         sessionStorage.removeItem("sessionid");
        navigate("/login");
    }
    }, [isInactive, navigate]);



    return(
   


        <div>
               <Dheader/>
                  <HStack>


            <div className="main-content">
                    <div className="top bg-white mt-0 p-2">
                        <DashboardTopbar />
                    </div>
                  
                    <div className="row">
                        

                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="card pb-0 account-details border-0 shadow-lg theme h-theme">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <h4 className="bg-transparent mt-0 p-3 h-theme">Reports</h4>
                                    </div>
                                    <div className= "col-lg-12 col-md-12 col-12">
                                        <HStack>
                                            
                                            <HStack>
                                                    <div className='d-flex mr-3 p-3 center' style={{width: '450px'}}>
                                                    <DateRangeToolBar />
                                                    </div>
                                            </HStack>           
                                            <HStack>
                                            <div className='d-flex mr-3 p-3 center'>
                                                <input
                                                        type="text"
                                                        className="searchTerm"
                                                        placeholder="Search ID/Ref Number"
                                                        // value={search}
                                                        onChange={(e) => {
                                                        //   setSearch(e.target.value);
                                                        }}
                                                        style={{width:'250px !important', justifyItems:'center'}}
                                                    />
                                                    <button
                                                        className="searchIconBtn"
                                                        onClick={(e) => {
                                                        e.preventDefault();
                                                        //   console.log(search);
                                                        //   handleSearchAcc();
                                                        }}
                                                    >
                                                        <FiSearch />
                                                    
                                                    </button>
                                                </div>
                                            </HStack>
                                            <HStack>
                                                <CustomButtonGroup appearance="ghost"/>
                                            </HStack>

                                            <HStack>
                                            
                                            {/* <div className="mt-0 p-3 d-flex float-right btn-left"> */}
                                                {/* <a type="button" className="btn bg-dark text-white mr-2">Export Transaction<i className="fa fa-external-link ml-2"></i></a> */}
                                        {/* </div> */}
                                        
                                            </HStack>
                                                {/* </Panel> */}
                                        </HStack>
                                </div>
                  </div>
                                    
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered " >
                                            <thead className="bg-light">
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Report Type</th>
                                                    <th>Filters</th>
                                                    <th>Status</th>
                                                    <th>Download</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>45788</td>
                                                    <td>virtual_account_export</td>
                                                    <td>Data Range:2020-07-01 to 2022-09-30</td>
                                                    <td>Completed</td>
                                                    <td><a href="">Download</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>       
                                </div>
                            </div>
                        </div>
                    </div>
                    </HStack>                                      
                {/* <VStack> */}
                <Dfooter/>
                {/* </VStack> */}
        {/* </div> */}
    </div>
   
       
    )
}

export default Reports;