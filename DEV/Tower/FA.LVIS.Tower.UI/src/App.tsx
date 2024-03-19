import React, { useState, useEffect } from 'react';
interface UnauthorizedErrorProps {
    message: string;
}
const UnauthorizedError: React.FC<UnauthorizedErrorProps> = ({ message }) => (
    <div className="alert alert-danger">
        <div className="error"><i className="fa fa-lg fa-ban"> {message}</i></div>
    </div>
);
interface AppProps {
    currentuser: string;
    tenantname: string;
    activityright: string;
    canmanageaccessreq: boolean;
}
const App: React.FC<AppProps> = (props) => {
    const [isUnauthorized, setIsUnauthorized] = useState(false); // Assume authorization mechanisms in place
    const [unauthorizedMessage, setUnauthorizedMessage] = useState('');
    // Mock effect to simulate fetching error state
    useEffect(() => {
        // Apply logic to determine if unauthorized
        // This is just an example. In a real app, you'd likely check some global state or perform an API call.
    }, []);
    return (
        <div className="container-fluid">
            {isUnauthorized ? (
                <UnauthorizedError message={unauthorizedMessage} />
            ) : (
                <div>
                    {/* Assuming ps-framework and related components are known React components in your project */}
                    {/* <ps-framework>, <ps-menu>, <ps-menu-item> equivalents would be created similar to <UnauthorizedError> */}
                </div>
            )}
        </div>
    );
};
export default App;
/*
Note: This conversion assumes that <ps-framework>, <ps-menu>, and <ps-menu-item> are React components that have
been created in your React application to replace their AngularJS counterparts. You might need to adjust the
props passed to these components based on their React implementations. 
Additionally, the example uses useState and useEffect hooks from React to manage state and lifecycle methods
respectively, which are common hooks useful in many scenarios.
The CSS and JavaScript resources that were included in the AngularJS index.html would need to be included in your
React application setup, either by importing them in your React component directly, including them in your HTML
template (if you are using one), or preferably, by installing them via npm/Yarn if available and importing them
in your project.
*/