import  {React, useState } from 'react';
import HistoryList from './Historylist';
import RequestForm from './Requestform'; 
import ResponseDisplay from './ResponseDisplay';
import './Docsmain.css';
import axios from 'axios';


function Docsmain() {
    const [response, setResponse] = useState(null);
    const [history, setHistory] = useState([]);

    const handleSaveHistory = (request) => {
    setHistory([request, ...history]);
    };

    const handleSelectHistoryItem = (item) => {
    setResponse({ data: 'Loading...' });
    const { method, fullUrl, headers, body } = item;

    const config = {
      method,
      url: fullUrl,
      headers: headers ? JSON.parse(headers) : {},
      data: body,
    };

    axios.request(config)
      .then((response) => {
        setResponse(response);
        console.log(response.data);
      })
      .catch((error) => {
        setResponse(error.response || { data: 'Error making request' });
        console.log(error);
      });
  };
 
  
  

    

  return (
    <>

    {/**sidebar section start */}
    <div className="sidebar2">
    <div className="sc-feJyhm YzuTm">
        <a href="#" className="sc-iELTvK cCiYxb">
            <img src="assets/img/logo.webp" alt="logo" title='PayuGuru' className="sc-kafWEX hZCbNs"/>
        </a>
    </div>
    <div role="search" className="sc-esOvli kKQhLA">
        <svg className="sc-hMFtBS ibpoCO search-icon" version="1.1" viewBox="0 0 1000 1000" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px"></svg>
        <input placeholder="Search..." type="text" className="sc-cmthru kzNiFq search-input" value=""/>
    </div>
    
    <ul className="nav flex-column flex-nowrap overflow-hidden content1">
        <li className="nav-item gcUzvG">
            <a className="nav-link text-truncate" href="#"><i className="fa fa-home"></i> <span className="d-none d-sm-inline">API URL</span></a>
        </li>
        <li className="nav-item gcUzvG">
            <a className="nav-link collapsed text-truncate" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i className="fa fa-table"></i> <span className="d-none d-sm-inline">Payments</span></a>
            <div className="collapse" id="submenu1" aria-expanded="false">
                <ul className="flex-column pl-2 nav">
                    <li className="nav-item gpbcFk"><a className="nav-link py-0" href="#"><span>Initiate Fund Transfers</span></a></li>
                    <li className="nav-item gpbcFk"><a className="nav-link py-0" href="#"><span>Fetch Status</span></a></li>
                </ul>
            </div>
        </li>
        <li className="nav-item gcUzvG">
            <a className="nav-link collapsed text-truncate" href="#submenu2" data-toggle="collapse" data-target="#submenu2"><i className="fa fa-table"></i> <span className="d-none d-sm-inline">Banking</span></a>
            <div className="collapse" id="submenu2" aria-expanded="false">
                <ul className="flex-column pl-2 nav">
                    <li className="nav-item gpbcFk"><a className="nav-link py-0" href="#"><span>Fetch Balance</span></a></li>
                    <li className="nav-item gpbcFk"><a className="nav-link py-0" href="#"><span>Fetch Connected Banking </span></a></li>
                </ul>
            </div>
        </li>
        <li className="nav-item gcUzvG"><a className="nav-link text-truncate" href="#"><i className="fa fa-bar-chart"></i> <span className="d-none d-sm-inline">Virtual UPI ID</span></a></li>
        <li className="nav-item gcUzvG"><a className="nav-link text-truncate" href="#"><i className="fa fa-download"></i> <span className="d-none d-sm-inline">UPI Collection Request</span></a></li>
    </ul>
</div>

  {/**Middle part section start */}
  <div className="content iniCdN api-content">
    <div className="sc-gzVnrw eesUPo">
        <div className="sc-bxivhb cjtbAK api-info">
            <h1 className="sc-htoDjs sc-fYxtnH dTJWQH">PayuGuru <span>(1.0.0)</span></h1>
            <div className="sc-jWBwVP sc-iRbamj flfxUM">
                <p>PayuGuru Partner APIs are completely RESTful and all our responses are returned in JSON.</p>
            </div>
        </div>
    </div>
    <div className="sc-ifAKCX dluJDj">
        <div className="sc-bxivhb cjtbAK api-info">
            <h1 className="sc-htoDjs sc-fYxtnH dTJWQH">API URL <span></span></h1>
            <div className="sc-jWBwVP sc-iRbamj flfxUM"></div>
            <div className="sc-jWBwVP sc-iRbamj flfxUM">
                <p>The PayuGuru Partner API URL is https://partners.PayuGuru.in. You need to include this before each API endpoint to make API calls.</p>
            </div>
        </div>
    </div>
    <div className="sc-ifAKCX dluJDj">
        <div className="sc-bxivhb cjtbAK api-info">
            <h1 className="sc-htoDjs sc-fYxtnH dTJWQH">Payments <span></span></h1>
            <div className="sc-jWBwVP sc-iRbamj flfxUM"></div>
            <div className="sc-jWBwVP sc-iRbamj flfxUM">
                <p>This section explains how to initiate a fund transfer to any bank account and check the status of the transaction.</p>
            </div>
        </div>
    </div>
    <div id="operation/fund_transfer" data-section-id="operation/fund_transfer" className="sc-ifAKCX hiuczA">
        <div className="sc-gzVnrw sc-ibxdXY bSFXlp">
            <div className="sc-bxivhb cjtbAK">
                <h2 className="sc-dnqmqq ioYTqA">
                    <a className="sc-VigVT kGvRyb" href="#operation/fund_transfer"></a>
                    Initiate Fund Transfers
                </h2>
                <div className="sc-RefOD boajtD">
                    <div className="sc-jWBwVP sc-iRbamj flfxUM">
                        <p>Transfer amount to any bank account</p>
                    </div>
                </div>
                <h5 className="sc-gqjmRU LiUBH">Request Body schema: <span className="sc-hSdWYo hoUoen">application/json</span></h5>
                <div className="sc-jWBwVP sc-iRbamj flfxUM"></div>
                <table></table>
            </div>
        </div>
    </div>


    {/**blue side part start */}
    <div className='fLUKgj'>
      <div className="container mx-auto p-4">
        <div className="max-w-xl mx-auto">
          <RequestForm onResponse={setResponse} onSaveHistory={handleSaveHistory} />
          {response && <ResponseDisplay response={response} />}
          {history.length > 0 && (
            <HistoryList history={history} onSelect={handleSelectHistoryItem} />
          )}
        </div>
      </div>
    </div>
    
    
</div>

  
  
  
  
  
    </>
  )
}
export default Docsmain;
