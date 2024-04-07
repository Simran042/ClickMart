import React from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from './../../components/layout/AdminMenu';

const Users = () => {
  return (
    <Layout title={"Dashboard- All Users"}>
      <div className="row m-4 p-4">
        <div className="col-md-3">
            <AdminMenu />

        </div>
        <div className="col-md-9">
            <h2>All users</h2>
        </div>
      </div>
    </Layout>
  )
}

export default Users
