import React from 'react'

const Dashboard = () => {
  return (
<React.Fragment>
  <div className="pagetitle">
    <h1>Dashboard</h1>
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item active">Dashboard</li>
      </ol>
    </nav>
  </div>{/* End Page Title */}
  <section className="section dashboard">
    <div className="row">
      {/* Left side columns */}
      <div className="col-lg-12">
        <div className="row">
          {/* Sales Card */}
          <div className="col-xxl-3 col-md-6">
            <div className="card info-card sales-card">
              <div className="card-body">
                <h5 className="card-title">Sales <span>| Today</span></h5>
                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-cart-shopping" />
                  </div>
                  <div className="ps-3">
                    <h6>145</h6>
                    <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>{/* End Sales Card */}
          {/* Revenue Card */}
          <div className="col-xxl-3 col-md-6">
            <div className="card info-card revenue-card">
              <div className="card-body">
                <h5 className="card-title">Revenue <span>| This Month</span></h5>
                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-dollar-sign" />
                  </div>
                  <div className="ps-3">
                    <h6>$3,264</h6>
                    <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>{/* End Revenue Card */}
          {/* Customers Card */}
          <div className="col-xxl-3 col-xl-12">
            <div className="card info-card customers-card">
              <div className="card-body">
                <h5 className="card-title">Customers <span>| This Year</span></h5>
                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-user-group" />
                  </div>
                  <div className="ps-3">
                    <h6>1244</h6>
                    <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-12">
            <div className="card info-card customers-card">
              <div className="card-body">
                <h5 className="card-title">Customers <span>| This Year</span></h5>
                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-user-group" />
                  </div>
                  <div className="ps-3">
                    <h6>1244</h6>
                    <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>
                  </div>
                </div>
              </div>
            </div>
          </div>{/* End Customers Card */}
          {/* Reports */}
          {/* Recent Sales */}
          {/* Top Selling */}
        </div>
      </div>{/* End Left side columns */}
      {/* Right side columns */}
      <div className="col-lg-8 mb-3">
        {/* Recent Activity */}
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Test Mode Enabled</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
        </div>{/* End Recent Activity */}
        {/* Budget Report */}
        {/* Website Traffic */}
        {/* End Website Traffic */}
        {/* End News & Updates */}
      </div>{/* End Right side columns */}
      <div className="col-lg-4 mb-3">
        {/* Recent Activity */}
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Test Mode Enabled
            </h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
        </div>{/* End Recent Activity */}
        {/* Budget Report */}
        {/* Website Traffic */}
        {/* End Website Traffic */}
        {/* End News & Updates */}
      </div>
    </div>
  </section>
  <section className="section">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Default Tabs</h5>
            {/* Default Tabs */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
              </li>
            </ul>
            <div className="tab-content pt-2" id="myTabContent">
              <div className="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab">
                Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. Accusantium distinctio omnis et atque fugiat. Itaque doloremque aliquid sint quasi quia distinctio similique. Voluptate nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta.
              </div>
              <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
              </div>
            </div>{/* End Default Tabs */}
          </div>
        </div>
      </div>
    </div>
  </section>
</React.Fragment>
  )
}

export default Dashboard