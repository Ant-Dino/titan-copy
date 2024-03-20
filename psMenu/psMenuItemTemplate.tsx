import React from 'react';

// Assuming we are creating a ListComponent based on the requirements

interface ListComponentProps {
    items: string[];
    fetchItems: () => void;
}

const ListComponent: React.FC<ListComponentProps> = ({ items, fetchItems }) => {
    React.useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
};

export default ListComponent;