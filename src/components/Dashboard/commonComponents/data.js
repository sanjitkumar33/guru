import { ENDPOINTS } from "../../../utils/apiConfig";
import axios from "axios";


// function processData(response) {
//     // Parse JSON string if response is a string
//     const data = typeof response === 'string' ? JSON.parse(response) : response;
  
//     // Access and process data
//     console.log('Message:', data['mess'].message);
//     console.log('Total Count:', data['']);
  
//     // Iterate over virtual accounts
//     data['virtual_account_list'].forEach(account => {
//       console.log('Account ID:', account.AC_id);
//       console.log('Bank:', account.AC_bank);
//     });
//   }

/////////// GET VIRTUAL ACCOUNT LIST ///////////////////

export async function FetchVirtualAccountList(Skip = 0, currentPageNo = 1, itemsPerPage = 5, sortBy = 'createdAt', sortDirection = 'desc' , searchText = 'Y') {
        var DataList = {};
        const DataResult = {
          data: {
            message: "",
            pagination: {
              totalCount: 0,
              currentPage: currentPageNo,
              currentItems: 0,
              remainingItems: 0,
            },
            sortBy:'',
            sortDirection:'',
            virtual_account_list: [],
          },
        };
          const currentDate = new Date().toISOString();
          const startDate = new Date();
          startDate.setDate(startDate.getDate() - 30); // Adjust range as needed
          const startDateISO = startDate.toISOString();

          const sessionid = sessionStorage.getItem("sessionid");
          let CurrentPage = sessionStorage.getItem("AC_currentPage") ? parseInt(sessionStorage.getItem("AC_currentPage")) : currentPageNo;
          let totalCount = sessionStorage.getItem("AC_totalCount") ? parseInt(sessionStorage.getItem("AC_totalCount")) : 0;
          let perPage = itemsPerPage ? parseInt(itemsPerPage): itemsPerPage; // Default value for perPage, adjust as needed

          // Calculate the correct skip value based on current page and total count
          //  skip = CurrentPage > 1 ? ((CurrentPage - 1) * perPage) : skip;
          //  skip = Math.min(skip, totalCount); // Ensure skip doesn't exceed total count// Ensure skip doesn't exceed total count// Ensure skip doesn't exceed total count// Ensure skip doesn't exceed total count
        //   let currentPageNo = Skip === 0 ? 0 : currentpageNo;
        //   if (Skip === 0 && CurrentPage === 1) {
        //     Skip =  0 ;//parseInt((((CurrentPage > 0) ? (((currentPageNo - 1) * itemsPerPage)/itemsPerPage): 0)));//(CurrentPage - 1) * perPage;
        //     sessionStorage.setItem('currentPage',parseInt( currentPageNo++));
        // }
        // else if(Skip > 0  && currentPageNo > 1){
        //   Skip = (currentPageNo - 1) * perPage;
        //   Skip = Math.min(Skip, totalCount);
        //   sessionStorage.setItem('currentPage',parseInt( currentPageNo++));
        // }
        // Ensure skip doesn't exceed total count
         console.log('0. Skip: ', Skip);
        try{
          const response = await axios.post(ENDPOINTS.GET_VIRTUAL_ACCOUNT_LIST, {
            range: [startDateISO, currentDate],
            pagination: {
                skip: Skip,
                limit: itemsPerPage,
            },
            sessionid: sessionid,
            sortBy: 'createdAt',        //sortBy,
            sortDirection:'desc',//sortDirection,
            searchText: searchText
        });
       console.log('====================================');
       console.log('response: ', response.data);
       console.log('====================================');
        let responseData = response.data;
        DataList = `{ ${response.data} }`;
        const resDataPg = responseData.split(",");
        let dataCount = resDataPg[3].replace(/\\/g, "");
        let dataCurentP = resDataPg[4].replace(/\\/g, "").replace("}", "");
        
        let pagination = `{ ${JSON.stringify(DataList).replace(/\\/g, "").replace("{ {"," {").split('{')[2].split('},')[1]} }`.replace('/','');
        const resDataT = responseData.split("[");
        var dataT = JSON.stringify(resDataT[1].replace("]", "")).replace('/','');
        var virtual_account_list = "[" + JSON.parse(dataT) + "]";

        console.log('====================================');
        console.log('Virtual Account List: ', virtual_account_list);
        console.log('====================================');
        let ACcount;
        const data = JSON.parse(virtual_account_list);

        // Get the length
        ACcount = data.length;
        ACcount = parseInt(ACcount);

        // Output the total number of results
      
       
        console.log('====================================');
        console.log('Total number of results:', ACcount);
        console.log('====================================');
        var message = `{${JSON.stringify(DataList).replace(/\\/g, "").replace("{ {"," {").split('}')[0].replace("{","").replace("{g","").replace('" "mess":{','')}}`.replace('/','');
        // var DataResult = {
        //   data:{
        //     message:message,
        //     pagination:pagination,
        //     virtual_account_list:virtual_account_list
        //   }
        // }
        DataResult.data.message = message || "";
         let TotalCount = dataCount.replace('"totalCount":', "");
         TotalCount = parseInt(TotalCount);
         let CurrentPageNo = dataCurentP.replace('"currentPage":', "") != null ? dataCurentP.replace('"currentPage":', "") :  currentPageNo;
         CurrentPageNo = parseInt(CurrentPageNo);
         console.log('====================================');
         console.log('1. Current Page: ', CurrentPageNo);
         console.log('====================================');
        let remainingItems = parseInt(TotalCount - (((CurrentPageNo - 1) * perPage) + ACcount));
         console.log('====================================');
         console.log('response totalCount: ',  parseInt(TotalCount));
         console.log('====================================');

         console.log('====================================');
         console.log('response CurrentPageNumber: ', parseInt(CurrentPageNo));
         console.log('====================================');

         console.log('====================================');
         console.log('remaining Items: ', remainingItems);
         console.log('====================================');

         sessionStorage.setItem("AC_totalCount", parseInt(TotalCount));
         sessionStorage.setItem("AC_currentPage", parseInt(CurrentPageNo));
         sessionStorage.setItem("AC_currentItems", parseInt(ACcount));
         sessionStorage.setItem("AC_remainingItems", parseInt(remainingItems));


         sessionStorage.setItem('virtual_account_list',virtual_account_list )
        DataResult.data.pagination = {
          totalCount: TotalCount,
          currentPage: CurrentPageNo,
          currentItems: ACcount,
          remainingItems: remainingItems
      };
      DataResult.data.virtual_account_list = virtual_account_list || [];
      DataResult.data.sortBy = sortBy;
      DataResult.data.sortDirection = sortDirection;
       console.log('Data Result: ', DataResult);
        return DataResult;  //JSON.parse("[" + JSON.parse(dataT) + "]");
        }catch(error){
          console.error('Error fetching users:', error);
          // Handle error as appropriate, possibly return an empty DataResult
          return DataResult;
        }
         
 }

 /////////// END VIRTUAL ACCOUNT LIST ///////////////////


////////////////// GET UPI LIST ////////////////////////

 export async function FetchUPIList(Skip = 0, currentPageNo = 1, itemsPerPage = 5 , sortBy = 'createdAt', sortDirection = 'desc' , searchText = 'Y') {
  var DataList = {};
  const DataResult = {
    data: {
      message: "",
      pagination: {
        totalCount: 0,
        currentPage: currentPageNo,
        currentItems: 0,
        remainingItems: 0,
      },
      upi_list: [],
    },
  };
    const currentDate = new Date().toISOString();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30); // Adjust range as needed
    const startDateISO = startDate.toISOString();

    const sessionid = sessionStorage.getItem("sessionid");
    let CurrentPage = sessionStorage.getItem("upi_currentPage") ? parseInt(sessionStorage.getItem("upi_currentPage")) : currentPageNo;
    let totalCount = sessionStorage.getItem("upi_totalCount") ? parseInt(sessionStorage.getItem("totalCount")) : 0;
    let perPage = itemsPerPage ? parseInt(itemsPerPage): itemsPerPage; // Default value for perPage, adjust as needed

    // Calculate the correct skip value based on current page and total count
    //  skip = CurrentPage > 1 ? ((CurrentPage - 1) * perPage) : skip;
    //  skip = Math.min(skip, totalCount); // Ensure skip doesn't exceed total count// Ensure skip doesn't exceed total count// Ensure skip doesn't exceed total count// Ensure skip doesn't exceed total count
  //   let currentPageNo = Skip === 0 ? 0 : currentpageNo;
  //   if (Skip === 0 && CurrentPage === 1) {
  //     Skip =  0 ;//parseInt((((CurrentPage > 0) ? (((currentPageNo - 1) * itemsPerPage)/itemsPerPage): 0)));//(CurrentPage - 1) * perPage;
  //     sessionStorage.setItem('currentPage',parseInt( currentPageNo++));
  // }
  // else if(Skip > 0  && currentPageNo > 1){
  //   Skip = (currentPageNo - 1) * perPage;
  //   Skip = Math.min(Skip, totalCount);
  //   sessionStorage.setItem('currentPage',parseInt( currentPageNo++));
  // }
  // Ensure skip doesn't exceed total count
   console.log('0. Skip: ', Skip);
  try{
    const response = await axios.post(ENDPOINTS.GET_UPI_LIST, {
      range: [startDateISO, currentDate],
      pagination: {
          skip: Skip,
          limit: itemsPerPage,
      },
      sessionid: sessionid,
      sortBy: 'createdAt',        //sortBy,
      sortDirection:'desc',//sortDirection,
      searchText: searchText
  });
 console.log('====================================');
 console.log('response: ', response.data);
 console.log('====================================');
  let responseData = response.data;
  DataList = `{ ${response.data} }`;
  const resDataPg = responseData.split(",");
  let dataCount = resDataPg[3].replace(/\\/g, "");
  let dataCurentP = resDataPg[4].replace(/\\/g, "").replace("}", "");
  
  let pagination = `{ ${JSON.stringify(DataList).replace(/\\/g, "").replace("{ {"," {").split('{')[2].split('},')[1]} }`.replace('/','');
  const resDataT = responseData.split("[");
  var dataT = JSON.stringify(resDataT[1].replace("]", "")).replace('/','');
  var upi_list = "[" + JSON.parse(dataT) + "]";

  console.log('====================================');
  console.log('UPI List: ', upi_list);
  console.log('====================================');
  let UPIcount;
  const data = JSON.parse(upi_list);

  // Get the length
  UPIcount = data.length;
  UPIcount = parseInt(UPIcount);

  // Output the total number of results

 
  console.log('====================================');
  console.log('Total number of results:', UPIcount);
  console.log('====================================');
  var message = `{${JSON.stringify(DataList).replace(/\\/g, "").replace("{ {"," {").split('}')[0].replace("{","").replace("{g","").replace('" "mess":{','')}}`.replace('/','');
  // var DataResult = {
  //   data:{
  //     message:message,
  //     pagination:pagination,
  //     upi_list:upi_list
  //   }
  // }
  DataResult.data.message = message || "";
   let TotalCount = dataCount.replace('"totalCount":', "");
   TotalCount = parseInt(TotalCount);
   let CurrentPageNo = dataCurentP.replace('"currentPage":', "") != null ? dataCurentP.replace('"currentPage":', "") :  currentPageNo;
   CurrentPageNo = parseInt(CurrentPageNo);
   console.log('====================================');
   console.log('1. Current Page: ', CurrentPageNo);
   console.log('====================================');
  let remainingItems = parseInt(TotalCount - (((CurrentPageNo - 1) * perPage) + UPIcount));
   console.log('====================================');
   console.log('response totalCount: ',  parseInt(TotalCount));
   console.log('====================================');

   console.log('====================================');
   console.log('response CurrentPageNumber: ', parseInt(CurrentPageNo));
   console.log('====================================');

   console.log('====================================');
   console.log('remaining Items: ', remainingItems);
   console.log('====================================');

   sessionStorage.setItem("upi_totalCount", parseInt(TotalCount));
   sessionStorage.setItem("upi_currentPage", parseInt(CurrentPageNo));
   sessionStorage.setItem("upi_currentItems", parseInt(UPIcount));
   sessionStorage.setItem("upi_remainingItems", parseInt(remainingItems));


   sessionStorage.setItem('upi_list',upi_list )
  DataResult.data.pagination = {
    totalCount: TotalCount,
    currentPage: CurrentPageNo,
    currentItems: UPIcount,
    remainingItems: remainingItems
};
DataResult.data.upi_list = upi_list || [];
DataResult.data.sortBy = sortBy;
DataResult.data.sortDirection = sortDirection;
 console.log('Data Result: ', DataResult);
  return DataResult;  //JSON.parse("[" + JSON.parse(dataT) + "]");
  }catch(error){
    console.error('Error fetching users:', error);
    // Handle error as appropriate, possibly return an empty DataResult
    return DataResult;
  }
   
}

///////////////////// END UPI LIST /////////////////////
  
  export var VAccountsList = FetchVirtualAccountList();
  export var UPIList = FetchUPIList();