 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal'; // Assuming a Modal component for add/edit operations
import { extractHostname } from './utils'; // Assuming a utility function for extracting hostname
import { useTable } from 'react-table'; // This line assumes you're using react-table for table UI

const WebhookDomainsMappings = ({ customerNameInitial }) => {
    const [customerDetail, setCustomerDetail] = useState(customerNameInitial.split(":"));
    const [customerName, setCustomerName] = useState(customerDetail[0]);
    const [customerID, setCustomerID] = useState(customerDetail[1]);
    const [domainsData, setDomainsData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('add'); // 'add' or 'edit'
    const [selectedDomain, setSelectedDomain] = useState(null);

    useEffect(() => {
        if (customerName !== '') {
            axios.get(`Customers/GetWebhookDomains/${customerID}`)
                .then(response => {
                    setDomainsData(response.data);
                })
                .catch(error => console.error("There was an error retrieving the webhook domains: ", error));
        }
    }, [customerID, customerName]);

    const handleAddDomain = () => {
        setSelectedDomain({ Domain: '' });
        setModalType('add');
        setShowModal(true);
    };

    const handleEditDomain = (domain) => {
        setSelectedDomain(domain);
        setModalType('edit');
        setShowModal(true);
    };

    const saveDomain = (domain, operation) => {
        let url = '';

        if(operation === 'add') {
            url = 'Customers/AddWebhookDomain';
        } else {
            url = 'Customers/UpdateWebhookDomain';
        }

        axios.post(url, {
            WebhookDomainId: domain.WebhookDomainId,
            CustomerId: customerID,
            Domain: domain.Domain,
            // Assuming the following fields are handled server-side
        })
        .then(response => {
            setShowModal(false);
            // Refresh the list of domains
            axios.get(`Customers/GetWebhookDomains/${customerID}`)
                .then(response => {
                    setDomainsData(response.data);
                })
        })
        .catch(error => {
            console.error("Error in saving the domain: ", error);
        });
    };

    const deleteDomain = (domain) => {
        // Remove domain functionality here
    };

    const columns = React.useMemo(() => [
        { Header: 'WebhookDomainId', accessor: 'WebhookDomainId', show: false },
        { Header: 'Domain', accessor: 'Domain' },
        { Header: 'Actions', 
          Cell: ({ row }) => (<div>
              <button onClick={() => handleEditDomain(row.original)}>Edit</button>
              <button onClick={() => deleteDomain(row.original)}>Delete</button>
            </div>)
        },
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: domainsData });

    return(
        <div>
            <button onClick={handleAddDomain}>Add New Domain</button>
            {showModal && (
                <Modal 
                    closeModal={() => setShowModal(false)}
                    saveDomain={saveDomain}
                    domain={selectedDomain}
                    type={modalType}
                />
            )}
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default WebhookDomainsMappings;
