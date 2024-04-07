import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
  return (
    <div className='text-center mb-4'>
      <div className="list-group">
        <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action" activeClassName="active">
          Manage Categories
        </NavLink>
        <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action" activeClassName="active">
          Create Products
        </NavLink>
        <NavLink to="/dashboard/admin/products" className="list-group-item list-group-item-action" activeClassName="active">
          All Products
        </NavLink>
        <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action" activeClassName="active">
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
