import React, { createContext, useState } from "react";

const ApplicationContext = createContext();

const ApplicationContextProvider = ({ children }) => {
  const [kycStatus, setKycStatus] = useState(null);

  return (
    <ApplicationContext.Provider value={{ kycStatus, setKycStatus }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export { ApplicationContext, ApplicationContextProvider };
