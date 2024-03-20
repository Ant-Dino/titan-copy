import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
const PsFrameworkComponent = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isMenuButtonVisible, setIsMenuButtonVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [tenantName, setTenantName] = useState(null);
  const [assemblyVersion, setAssemblyVersion] = useState('');
  const [serverName, setServerName] = useState('');
  const [cookies] = useCookies(['currentuser', 'tenantname']);
  const history = useHistory();
  useEffect(() => {
    setCurrentUser(cookies.currentuser);
    setTenantName(cookies.tenantname);

    const checkWidth = () => {
      const width = Math.max(window.innerWidth);
      setIsMenuVisible(width >= 768);
      setIsMenuButtonVisible(!isMenuVisible);
    };

    const fetchData = async () => {
      try {
        const versionResponse = await axios.get('Security/GetAssemblyVersion/');
        const serverResponse = await axios.get('Security/GetServerName/');
        setAssemblyVersion(versionResponse.data);
        setServerName(serverResponse.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
    checkWidth();

    const handleResize = () => {
      checkWidth();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuVisible, cookies.currentuser, cookies.tenantname]);
  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const navigate = (route) => {
    history.push(route);
    checkWidth();
  };
  return (
    <div>
      {isMenuVisible && (
        <button onClick={toggleMenuVisibility}>Toggle Menu</button>
      )}
      <div>
        Current User: {currentUser || 'Not logged in'}
      </div>
      <div>
        Tenant Name: {tenantName || 'None'}
      </div>
      <div>
        Assembly Version: {assemblyVersion}
      </div>
      <div>
        Server Name: {serverName}
      </div>
    </div>
  );
};
export default PsFrameworkComponent;