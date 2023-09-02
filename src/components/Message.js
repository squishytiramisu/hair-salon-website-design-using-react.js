import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Api from '../service/api';
import Alert from '@material-ui/lab/Alert';

function Contact(){

    const [name, setName] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [message, setMessage] = React.useState(null);

    const [success, setSuccess] = React.useState(false);

    const [unSuccess, setUnSuccess] = React.useState(false);

    const sendMail = () => {
        if(name == null || name == undefined || email == null || email == undefined || message == null || message == undefined){
            return;
        }

        if(localStorage.getItem("ctr") == true && localStorage.getItem("lmd") == new Date().toISOString().split("T")[0]){
            return;
        }

        if(localStorage.getItem("lmd") == new Date().toISOString().split("T")[0]){
            localStorage.setItem("ctr",true);
        }else{
            localStorage.setItem("ctr",false);
        }

        Api.sendMail(name,email,message).then((response) => {
            console.log(response);
            setSuccess(true);

        }).catch((error) => {
            setUnSuccess(true);
            console.log(error);
        });

        localStorage.setItem("lmd",new Date().toISOString().split("T")[0]);
    }


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
                                <input class="form-control" type="text" name="Name" placeholder="" required="" onChange={ (e) => setName(e.target.value) } />
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input class="form-control" type="email" name="Email" placeholder="" required="" onChange={(e) => setEmail(e.target.value)} style={{textTransform:"unset"}}/>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label>Üzenet</label>
                                <textarea class="form-control" name="Message" placeholder="" required="" onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div class="form-group mx-auto mt-3">
                        {success ? <Alert severity="success">Sikeresen elküldve!</Alert> : <button type="button" class="btn submit" onClick={sendMail}>Küldés</button> }
                        {unSuccess && !success ? <Alert severity="error">Hiba történt!</Alert> : <div></div>}
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


	</div>
        )
    }
export default Contact