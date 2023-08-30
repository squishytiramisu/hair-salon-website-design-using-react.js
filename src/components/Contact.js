import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Contact extends Component{
    render(){
        return(
			<div>
<div class="inner-page-banner" id="home">
        <img src="assets/images/ban2.jpg" alt="" class="img-responsive banner-img" />
</div>
<div class="breadcrumb-agile">
	<ol class="breadcrumb mb-0">
		<li class="breadcrumb-item">
        <Link to='/'>Nyitólap</Link>
		</li>
		<li class="breadcrumb-item active" aria-current="page">Elérhetőség</li>
	</ol>
</div>
    <section class="testimonials py-1" id="testimonials">
        <div class="container py-md-5">
               <h3 class="heading text-center mb-3 mb-sm-5">Elérhetőség</h3>
            <div class="row mt-4 justify-content-center">

                <div class="col-md-3 test-grid text-left px-lg-4">
                    <div class="test-info">

                        <h3 class="mt-md-4 mt-2"> Helyszín</h3>
                        <p>1165 Budapest, <br/> Margit utca 123.</p>

    
                    </div>
                </div>
                <div class="col-md-3 test-grid text-left px-lg-4">
                    <div class="test-info">

                        <h3 class="mt-md-4 mt-2"> Kapcsolat</h3>
                        <p>Email: <a>vollertimi@gmail.com</a>
                        <br/> Telefon: <a>+ 36 000 0000 </a>
                        </p>

    
                    </div>
                </div>
                <div class="col-md-3 test-grid text-left px-lg-4">
                    <div class="test-info">

                        <h3 class="mt-md-4 mt-2"> Nyitvatartás</h3>
                        <p>Hétfő-Péntek: 10:00-17:00 <br/> Szombat-Vasárnap: Zárva</p>

    
                    </div>
                </div>
            </div>


        </div>
    </section>

    <div class="map-w3layouts">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d700.5025184246496!2d19.190047728841922!3d47.516826803120914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c4eca0c8fbb9%3A0x235d770e8c24b50b!2sMargit%20u.%20123!5e0!3m2!1shu!2shu!4v1693233524953!5m2!1shu!2shu" width="600" height="450" allowfullscreen="true" loading="lazy"></iframe>
   </div>
	</div>
        )
    }
}
export default Contact