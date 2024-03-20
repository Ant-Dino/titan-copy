 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

function CategoryMappingsComponent() {
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasSuperAccess, setHasSuperAccess] = useState(false);
  const [categories, setCategories] = useState([]);
  const [tenant, setTenant] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfoResponse = await axios.get('/userinfo');
        const { ActivityRight, CanManageTEQ, CanManageBEQ } = userInfoResponse.data;
        setActivityRight(ActivityRight);
        setCanManageTEQ(CanManageTEQ);
        setCanManageBEQ(CanManageBEQ);

        if (['Admin', 'SuperAdmin'].includes(ActivityRight)) {
          setHasAccess(true);
        }
        if (ActivityRight === 'SuperAdmin') {
          setHasSuperAccess(true);
        }

        const categoriesResponse = await axios.get('Categories/GetCategories/');
        setCategories(categoriesResponse.data);

        const tenantResponse = await axios.get('Security/GetTenant');
        setTenant(tenantResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const handleAddNewGroup = async (newGroupData) => {
    try {
      const response = await axios.post('/api/CategoryMappings/AddCategory', newGroupData);
      if (response.data) {
        setCategories(prevCategories => [...prevCategories, response.data]);
        alert("Category added successfully");
      }
    } catch (error) {
      console.error("Error adding new group", error);
      alert("Error adding new category");
    }
  };

  const handleUpdateGroup = async (updatedGroupData) => {
    try {
      const response = await axios.post('/api/CategoryMappings/UpdateCategory', updatedGroupData);
      if (response.data) {
        setCategories(categories.map(cat => cat.CategoryId === response.data.CategoryId ? response.data : cat));
        alert("Category updated successfully");
      }
    } catch (error) {
      console.error("Error updating group", error);
      alert("Error updating category");
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      const response = await axios.post(`/Categories/DeleteCategory/${categoryId}`);
      if (response.data === 0) {
        setCategories(categories.filter(cat => cat.CategoryId !== categoryId));
        alert("Category deleted successfully");
      } else {
        alert("Error deleting category");
      }
    } catch (error) {
      console.error("Failed to delete category", error);
      alert("Failed to delete category");
    }
  };

  return (
    <div>
      <h2>Category Mappings</h2>
      {/* Render UI based on state here */}
    </div>
  );
}

export default CategoryMappingsComponent;
