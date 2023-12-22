import React from 'react'


function Card({cardData}) {
  return  <div className="col-lg-4" >
  <div className="card mb-5 mb-lg-0">
    <div className="card-body">
  <h5 className="card-title text-muted text-uppercase text-center">{cardData.package}</h5>
<h6 className="card-price text-center">{cardData.rupee}<span className="period">{cardData.duration}</span></h6>
<hr/>
<ul className="fa-ul">
  <li className={cardData.isUser?"":"text-muted"}><span className="fa-li"><i className={cardData.isUser?"fas fa-check":"fas fa-times"}></i></span>{cardData.package!=="FREE"?<b>{cardData.user}</b>:<>{cardData.user}</>}</li>
  <li className={cardData.isStore?"":"text-muted"}><span className="fa-li"><i className={cardData.isStore?"fas fa-check":"fas fa-times"}></i></span>{cardData.Store}</li>
  <li className={cardData.isProject?"":"text-muted"}> <span className="fa-li"><i className={cardData.isProject?"fas fa-check":"fas fa-times"}></i></span>{cardData.project}</li>
  <li className={cardData.isAccess?"":"text-muted"}><span className="fa-li"><i className={cardData.isAccess?"fas fa-check":"fas fa-times"}></i></span>{cardData.access}</li>
  <li className={cardData.isProjects?"":"text-muted"}><span className="fa-li"><i className={cardData.isProjects?"fas fa-check":"fas fa-times"}></i></span>{cardData.projects}</li>
  <li className={cardData.isSupport?"":"text-muted"}><span className="fa-li"><i className={cardData.isSupport?"fas fa-check":"fas fa-times"}></i></span>{cardData.support}</li>
  <li className={cardData.isDomain?"":"text-muted"}><span className="fa-li"><i className={cardData.isDomain?"fas fa-check":"fas fa-times"}></i></span>{cardData.package==="PRO"?<><b>Unlimited</b> {cardData.domain}</>:<>{cardData.domain}</>}</li>
  <li className={cardData.isReport?"":"text-muted"}><span className="fa-li"><i className={cardData.isReport?"fas fa-check":"fas fa-times"}></i></span>{cardData.report}</li>
</ul>
<div className="d-grid">
  <a href="#" className="btn btn-primary text-uppercase">{cardData.btn}</a>
</div>
</div>
</div>
</div>
}

export default Card