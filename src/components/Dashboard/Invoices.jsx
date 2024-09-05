import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dheader from '../Dheader';
import Dfooter from '../Dfooter';
import './Invoices.css';
import DashboardTopbar from "./commonComponents/DashboardTopbar";
import useInactivityTimeout from "../../hooks/useInactivityTimeout";
import { FiSearch } from 'react-icons/fi';
import './Reports.css';
import Panel from 'rsuite/Panel';
import 'rsuite/Panel/styles/index.css';
import DateRangeToolBar from './PageToolbar';
import { HStack, Stack } from "rsuite";
import 'rsuite/Stack/styles/index.css';
import CustomButtonGroup from './commonComponents/TableIconButtons';

function Invoices(){
    const isInactive = useInactivityTimeout(600000); // 10 minutes
    let navigate = useNavigate();

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
                    <div className="card pb-0 account-details border-0 shadow-lg" >
                    <div className="card-body p-0 border-0">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                        
                           
                                <h4 className="bg-transparent mt-0 p-3 h-theme">Invoices</h4>
                                
                            </div>
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

                                               
                                        </HStack>
                                        
                                      
                        {/* </div>
                        <div className= "col-lg-12 col-md-12 col-12"> */}
                        <div className="table-responsive">
                                        <table className="table table-striped table-bordered ">
                                            <thead className="bg-light">
                                                <tr>
                                                    <th>Number</th>
                                                    <th>Month</th>
                                                    <th>Generated At</th>
                                                    <th>Charges</th>
                                                    <th>GST</th>
                                                    <th>Total Amount</th>
                                                    <th>Download Report</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>HYP-INV-2022-06-42073</td>
                                                    <td>June 2022</td>
                                                    <td>01-July-2022</td>
                                                    <td>₹ 8</td>
                                                    <td>₹ 1.44</td>
                                                    <td>₹ 9.44</td>
                                                    <td><a href="">Download</a></td>
                                                </tr>
                                                <tr>
                                                    <td>HYP-INV-2022-05-39770</td>
                                                    <td>May 2022</td>
                                                    <td>01-June-2022</td>
                                                    <td>₹ 48</td>
                                                    <td>₹ 8.44</td>
                                                    <td>₹ 56.44</td>
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
                   
                <Dfooter/>   
           
        </div>
    )
}

export default Invoices;