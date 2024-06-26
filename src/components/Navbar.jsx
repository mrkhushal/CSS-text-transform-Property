import React from 'react'; 
import PropTypes from 'prop-types' ; 
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
<div className='container'>
<Link className="navbar-brand" to="/">{props.title}</Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav mr-auto">
<li className="nav-item">
<Link className="nav-link" to="/">Home  </Link>
</li>
<li className="nav-item">
<Link  className="nav-link" to="/About">{props.about}</Link>
</li>

</ul> 
{/* <form className="form-inline my-2 my-lg-0">
<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form> */}
<label className="switch">
<input type="checkbox" onClick={props.toggleMode} />
<span className="slider"></span>
</label>  <p style={{color : props.mode==='dark'?'white':'black'}}>DarkMode</p>
</div>
</div>
</nav>
    </>
  )
}
 

Navbar.protoTypes = {
  title:  PropTypes.string,
  about:  PropTypes.string
}


// Specifies the default values for props:
Navbar.defaultProps = {
  title: 'Company Name'
};