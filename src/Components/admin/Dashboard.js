import React from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '../../constants/routes'

const Dashboard = () => {
  return (
<React.Fragment>
<section className="content">
    <div className="row">
      <div className="col-lg-3 col-xs-6">
         <div className="small-box bg-aqua ">
          <div className="inner">
            <p>Totoal Merchants </p>
              <h3>{10}</h3>
           </div>
              <div className="icon">
                <i className="ion ion-person"></i>
              </div>
            <NavLink to={routes.MERCHANT} className="small-box-footer">
                <i className="fa fa-arrow-circle-right"></i> <span>View Details</span>
            </NavLink>
          </div>
      </div>
      <div className="col-lg-3 col-xs-6">
            <div className="small-box bg-green">
              <div className="inner">
                <p>verify user </p>
                <h3>{5}</h3>
              </div>
                <NavLink to={"#"} className="small-box-footer">
                <i className="fa fa-arrow-circle-right"></i> <span>View Details</span>
              </NavLink>
              </div>
        </div>
      <div className="col-lg-3 col-xs-6">
          <div className="small-box bg-yellow">
            <div className="inner">
              <p>Block User</p>
              <h3>{4}</h3>
            </div>
            <NavLink to={"#"} className="small-box-footer">
                <i className="fa fa-arrow-circle-right"></i> <span>View Details</span>
              </NavLink>
            </div>
        </div>
      <div className="col-lg-3 col-xs-6">
          <div className="small-box bg-red">
            <div className="inner">
              <p>Total Collectibles</p>
              <h3>{"#"}</h3>
              </div>
                <NavLink to={"#"} className="small-box-footer ">
                <i className="fa fa-arrow-circle-right"></i> <span className='active'>View Details</span>
              </NavLink>
          </div>
        </div>
      </div>
    </section>
</React.Fragment>
  )
}

export default Dashboard