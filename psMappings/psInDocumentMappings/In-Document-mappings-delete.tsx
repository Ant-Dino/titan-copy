import React, { useState, useEffect } from 'react';
type Item = {
    id: number;
    name: string;
type Props = {
    fetchData: () => Promise<Item[]>;
    addItem: (itemName: string) => Promise<void>;
};
const ListDisplayComponent: React.FC<Props> = ({ fetchData, addItem }) => {
    const [items, setItems] = useState<Item[]>([]);
    const [newItemName, setNewItemName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            try {
                const fetchedItems = await fetchData();
                setItems(fetchedItems);
            } catch (error) {
                console.error("Failed to fetch items", error);
            } finally {
                setLoading(false);
            }
        };
        fetchItems();
    }, [fetchData]);
    const handleAddItem = async () => {
        if (!newItemName.trim()) return;
        await addItem(newItemName);
        setNewItemName('');
        // Optionally refetch the items list to include the new item
    };
    if (loading) return <div>Loading...</div>;
    return (
        <div>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
            />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};
export default ListDisplayComponent;