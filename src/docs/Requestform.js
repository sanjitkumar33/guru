// src/components/RequestForm.js
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { ENDPOINTS } from '../utils/apiConfig';

const environments = {
  dev: ENDPOINTS,
  prod: ENDPOINTS,
};

const RequestForm = ({ onResponse, onSaveHistory }) => {
  const [method, setMethod] = useState('POST');
  const [env, setEnv] = useState('dev');
  let headersData = {'api_key':'abcd1233'}
  const [url, setUrl] = useState('/user/login');
  const [headers, setHeaders] = useState(JSON.stringify(headersData));
  const [body, setBody] = useState('{}');
  const [theme, setTheme] = useState('light');
  const [mobile, setMobile] = useState('7028442470');
  const [password, setPassword] = useState('1234@Are');
  useEffect(() => {
    try {
      const parsedBody = JSON.parse(body);
      parsedBody.mobile = mobile;
      parsedBody.password = password;
      setBody(JSON.stringify(parsedBody, null, 2));
    } catch (error) {
      console.error("Invalid JSON body:", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobile, password]); // Removed 'body' from dependencies array

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullUrl = `${environments[env]}${url}`;
    try {
      const config = {
        method,
        url: fullUrl,
        headers: headers ? JSON.parse(headers) : {},
        data: JSON.parse(body),
      };
      console.log("Request Config:", config); // Debug: Log the config
      const response = await axios(config);
      onResponse(response);
      onSaveHistory({ method, fullUrl, headers, body });
    } catch (error) {
      onResponse(error.response || { data: 'Error making request' });
      console.log(error); // Debug: Log the error
    }
  };

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="p-4  border-gray-300 rounded-lg">
      <h2 className="text-lg mb-4 text-white">Make API Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label text-white">Environment</label>
          <select
            className="form-select"
            value={env}
            onChange={(e) => setEnv(e.target.value)}
          >
            {Object.keys(environments).map((env) => (
              <option key={env} value={env}>
                {env}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Method</label>
          <select
            className="form-select"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            {['GET', 'POST', 'PUT', 'DELETE'].map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label text-white">URL</label>
          <input
            type="text"
            className="form-control"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Headers (JSON)</label>
          <input
            type="text"
            className="form-control"
            value={headers}
            onChange={(e) => setHeaders(e.target.value)}
          />
        </div>
        {method !== 'GET' && (
          <div className="mb-3">
            <label className="form-label text-white">Body</label>
            <textarea
              className="form-control"
              style={{ height: '100px' }} // Increase height
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
        )}
        <div className="mb-3">
        {/*<button type="button" className="btn btn-secondary" onClick={handleThemeChange}>
          {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
        </button>*/}
        <button type="submit" className="btn btn-primary ml-2">
          Send Request
        </button>
      </div>
      </form>
    </div>
  );
};

export default RequestForm;
