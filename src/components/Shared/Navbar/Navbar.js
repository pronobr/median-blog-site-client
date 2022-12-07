import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
const Navbar = () => {
    return (
        <div className='wapper'>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
    <a class="navbar-brand " href="#"><img className='logo' src="https://darinka.design/median/wp-content/uploads/Logo.png" alt="band" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-auto g-5" id="navbarSupportedContent">


      <div className='searchBar navbar-nav ms-auto mb-2 mb-lg-0'>
      <form role="search" method="get" class="search-form me-3" action="https://darinka.design/median/">
				<label>
					<input type="search" class="search-field" placeholder="Search …" value="" name="s"/>
				</label>
				<input type="submit" class="search-submit" value="Search"/>
			</form>
      </div>

<div className='login-container me-3'>
<Link className="login" to="/login">Login</Link>

</div>

<div className='signUp-container'>
<Link className="signUp-btn" to="/signup">Create an account</Link>
</div>


    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;