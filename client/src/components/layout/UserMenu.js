import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className='text-center mb-4'>
      <div className="list-group">
        <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action" activeClassName="active">
          Profile
        </NavLink>
        <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action" activeClassName="active">
          Orders
        </NavLink>
        
      </div>
    </div>
  )
}

export default UserMenu
