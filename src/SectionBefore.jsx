import React from 'react'

export default function SectionBefore() {
  return (
    <div className="container sec-before">
      <div className="row">
        <div className="col-md-6">
          <img className='img-fluid' src="https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />

        </div>
        <div className="col-md-6">

          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">My Info</h5>
              <h6 className="card-subtitle mb-2 text-muted">Hi..</h6>
              <p className="card-text">I am Sohan</p>
              <a href="#" className="card-link">Facebook</a>
              <a href="#" className="card-link">Github</a>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}
