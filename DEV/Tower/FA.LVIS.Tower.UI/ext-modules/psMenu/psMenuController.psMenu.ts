import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getApplicationStatus } from '../services/applicationStatusActions';

const MenuComponent: React.FC = () => {
    const [isVertical, setIsVertical] = useState<boolean>(false);
    const [showMenu, setShowMenu] = useState<boolean>(true);
    const [allowHorizontalToggle, setAllowHorizontalToggle] = useState<boolean>(false);
    const [applicationStatusDisabled, setApplicationStatusDisabled] = useState<boolean>(false);
    const dispatch = useDispatch();
    const applicationStatus = useSelector((state: any) => state.applicationStatusReducer.applicationStatus);

    useEffect(() => {
        dispatch(getApplicationStatus());
    }, [dispatch]);

    useEffect(() => {
        const disableStatus = applicationStatus.some((status: any) => !status.Active);
        setApplicationStatusDisabled(disableStatus);
    }, [applicationStatus]);

    return (
        <div>
            {/* Render based on state */}
        </div>
    );
};

export default MenuComponent;