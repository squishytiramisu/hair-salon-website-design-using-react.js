import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component{
    
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	  }

	 closeDropdown()  {
		try{
			console.log(this.myRef.current);
			this.myRef.current.checked = false;
		}
		catch(err){
			console.log(err);
		}
	}

	render(){
		

        return(
            <header>
	<div class="container">
		<div class="header d-lg-flex justify-content-between align-items-center ">
			<div class="header-agile">
				<h1>
					
					<Link to='/' class="navbar-brand logo">
						TIMI HAJSZALON
					</Link>
				</h1>
			</div>
			<div class="nav_w3ls">
				<nav>
					<label for="drop" class="toggle mt-lg-0 mt-1"><span class="fa fa-bars" aria-hidden="true"></span></label>
					<input type="checkbox" id="drop" ref={this.myRef} />
						<ul class="menu">
							<li class="mr-lg-3 mr-2 active" ><Link to='/' onClick={this.closeDropdown()}>Nyitólap</Link></li>
							<li class="mr-lg-3 mr-2"><Link to='/galleria'>Galléria</Link></li>
							<li class="mr-lg-3 mr-2"><Link to='/frizurak'>Frizurák</Link></li>
							<li class="mr-lg-3 mr-2"><Link to='/uzenet'>Üzenet</Link></li>
							<li class="mr-lg-3 mr-2"><Link to='/elerhetoseg'>Elérhetőség</Link></li>
							<li class="mr-lg-3 mr-2"><Link to='/idopontfoglalas'>Foglalás</Link></li>
							
							

						</ul>
				</nav>
			</div>

		</div>
	</div>
</header>
        )
    }
}
export default Navbar