import { useTheme } from "../../theme-context";
import React from "react";
// import { Clock } from "react-feather";
import Clock from '../Clock'
const DashboardTopbar = () => {
  const docsModalOpen = () => {
    const myModal = new window.bootstrap.Modal(
      document.getElementById("docsReqModal")
    );
    myModal.show();
  };

  const {theme, toggleTheme} = useTheme();

  const toggleMode = () => {
    toggleTheme();
  };

  return (
    <>
      <div className={`row mt-0 h-theme ${theme}`}>
        <div className="col-lg-9 col-md-9 col-12">
         
          <Clock/>
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <button type="button" className="btn btn-top" onClick={docsModalOpen}>
            Docs Required
          </button>
        </div>
      </div>

      <div
        className="modal fade docReqModal"
        id="docsReqModal"
        aria-labelledby="docsReqModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content docsReqModal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="docsReqModalLabel">
                Your account is pending Activation!
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
                <h6>Your account is pending activation.</h6>
                <p className={`h-theme ${theme}`}>
                  Please submit your document to{" "}
                  <span className="text-primary"> info@payu.guru </span> for
                  activating your PayuGuru account. you can also chat with our
                  support team and share your documents.
                </p>
              </div>
              <div className="table-responsive">
                <table className="table table-striped reqDocsModalBorder">
                  <thead className="reqDocsModalBorder">
                    <tr className="reqDocsModalBorder">
                      <th className="reqDocsModalBorder">Sol Propriotership</th>
                      <th className="reqDocsModalBorder">Partnership</th>
                      <th className="reqDocsModalBorder">Private Limited</th>
                      <th className="reqDocsModalBorder">LLP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GST</td>
                      <td>Partnership Deed</td>
                      <td>MOA</td>
                      <td>LLP Deed</td>
                    </tr>
                    <tr>
                      <td>IEC Certificate</td>
                      <td>GST</td>
                      <td>AOA</td>
                      <td>COI</td>
                    </tr>
                    <tr>
                      <td>Shop Act</td>
                      <td>IEC Certificate</td>
                      <td>COI</td>
                      <td>PAN Card</td>
                    </tr>
                    <tr>
                      <td>KYC Individual</td>
                      <td>PAN Card </td>
                      <td>PAN Card </td>
                      <td>GST </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>KYC Individual</td>
                      <td>GST</td>
                      <td>KYC Individual</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>KYC Individual</td>
                      <td>IEC Certificate</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>IEC Certificate</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
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
      
    </>
  );
};

export default DashboardTopbar;
