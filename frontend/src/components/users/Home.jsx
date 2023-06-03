import React, { Fragment } from 'react'
import { getUserDetails } from '../../helper/SessionHelper'
import moment from "moment";
const Home = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className="row">
        <div className="col-md-12 pt-5 col-sm-12">
          <div className="p-5">
            <div className='m-3'>
              <h1 className='text-center text-primary shadow-none p-3 mb-5 bg-light rounded'>User Information</h1>
            </div>
            <div className='p-5 shadow-lg  mb-5 bg-body rounded'>
              <h2>Name : {getUserDetails().name}</h2>
              <h2>E-mail : {getUserDetails().email}</h2>
              <h2>Create Date : {moment(getUserDetails().createdDate).format('MMMM Do YYYY')}</h2>
            </div>
          </div>
        </div>
        </div>
      </div>

    </Fragment>
  )
}

export default Home