import React from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'
import { useAuth } from '../../context/auth'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const AdminDashboard = () => {
    const [auth, setAuth]= useAuth()
  return (
    <Layout>
      <div className="container-fluid m-4 p-4">
        <div className="row">
            <div className="col-md-3">
                <AdminMenu />
            </div>
            <div className="col-md-9">
                <div className="card w-75 p-3">
                    <h3>
                        Name: {auth?.user?.name}
                    </h3>
                    <h3>
                        Email: {auth?.user?.email}
                    </h3>
                    <h3>
                        Contact Number: {auth?.user?.phone}
                    </h3>

                </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard
