import React, { useState } from 'react';

type CategoryProps = {
  vgmap: {
    entity: {
      CategoryId?: string;
      Tenant?: string;
      CategoryName?: string;
    };
    save: () => void;
  };
  closeModal: () => void;
}

const CategoryForm: React.FC<CategoryProps> = ({ vgmap, closeModal }) => {
  const [categoryName, setCategoryName] = useState(vgmap.entity.CategoryName || '');
  const validCategoryName = categoryName.length >= 3 && /^[a-zA-Z0-9\s]+$/.test(categoryName);

  return (
    <div>
      <div className="widget-header">
        <button type="button" onClick={closeModal} className="close" data-dismiss="modal">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-plus"></i>
        <h3>Add New Category </h3>
      </div>
      <div className="widget-content">
        <form className="serviceForm">
          <div>
            {vgmap.entity.Tenant === 'LVIS' && (
              <div className="form-group">
                <label>Tenant</label>
                <input className="input" type="text" disabled value={vgmap.entity.Tenant} />
              </div>
            )}
            <div className={`form-group required ${!validCategoryName ? 'has-error' : ''}`}>
              <label>Category Name </label>
              <input className="input" name="groupname" type="text" required value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
              <div className="help-block with-errors">
                {!categoryName && <p>Category Name cannot be empty.</p>}
                {categoryName && categoryName.length < 3 && <p>Category Name must contain at least 3 characters.</p>}
                {categoryName && !/^[a-zA-Z0-9\s]+$/.test(categoryName) && <p>Special characters are not allowed</p>}
              </div>
            </div>
          </div>
        </form>
        <br />
        <div className="modal-footer">
          <button className="btn btn-success" disabled={!validCategoryName} onClick={() => validCategoryName && vgmap.save()}>Save</button>
          <button className="btn btn-primary" onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryForm;