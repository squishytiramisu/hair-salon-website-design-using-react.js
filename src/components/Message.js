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
		<li class="breadcrumb-item active" aria-current="page">Üzenet</li>
	</ol>
</div>
    <section class="content-info py-1">
        <div class="container py-md-5">
            <div class="text-center px-lg-5">
                <h3 class="heading text-center mb-3 mb-sm-5">Üzenet küldés</h3>

            </div>
            <div class="contact-w3pvt-form mt-5">
                <form action="#" class="w3layouts-contact-fm" method="post">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label>Név</label>
                                <input class="form-control" type="text" name="Name" placeholder="" required="" />
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input class="form-control" type="email" name="Email" placeholder="" required="" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label>Üzenet</label>
                                <textarea class="form-control" name="Message" placeholder="" required=""></textarea>
                            </div>
                        </div>
                        <div class="form-group mx-auto mt-3">
                            <button type="submit" class="btn submit">Küldés</button>
                        </div>
                    </div>


                </form>
                <div class="title-desc text-center px-lg-5">
                    <p class="px-lg-5 sub-wthree">
                    Az adatokat kizárólag a weboldalunk működésének céljából használjuk fel. Nem osztjuk meg, értékesítjük vagy továbbítjuk ezeket az adatokat harmadik feleknek.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <div class="map-w3layouts">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d700.5025184246496!2d19.190047728841922!3d47.516826803120914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c4eca0c8fbb9%3A0x235d770e8c24b50b!2sMargit%20u.%20123!5e0!3m2!1shu!2shu!4v1693233524953!5m2!1shu!2shu" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
   </div>
	</div>
        )
    }
}
export default Contact