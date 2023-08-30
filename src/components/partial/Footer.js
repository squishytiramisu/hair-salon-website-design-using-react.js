import React, {Component} from 'react';

class Footer extends Component{
    render(){

        return(
            <footer class="footer-content">
        <div class="layer footer">
            <div class="container-fluid">
                <div class="row footer-top-inner-w3ls">
                    <div class="col-lg-4 col-md-6 footer-top ">
                        <h2>
                            <a href="/">TIMI HAJSZALON</a>
                        </h2>
   
                    </div>
                    <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                        <div class="footer-w3pvt">
                            <h3 class="mb-3 w3pvt_title">Nyitvatartás</h3>
                            <hr/>
                            <ul class="list-info-w3pvt last-w3ls-contact mt-lg-4">
                                <li>
                                    <p> Hétfő - Péntek: 08.00 - 16.00</p>

                                </li>
                                <li class="my-2">
                                    <p>Saturday - Vasárnap: Zárva</p>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mt-lg-0 mt-5">
                        <div class="footer-w3pvt">
                            <h3 class="mb-3 w3pvt_title">Elérhetőség</h3>
                            <hr/>
                            <div class="last-w3ls-contact">
                                <p>
                                    <a href="mailto:vollertimi@gmail.com">vollertimi@gmail.com</a>
                                </p>
                            </div>
                            <div class="last-w3ls-contact my-2">
                                <p>+ 36 000 0000</p>
                            </div>
                            <div class="last-w3ls-contact">
                                <p>1165 Budapest,
                                    <br/>Margit utca 123.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <p class="copy-right-grids text-li text-center my-sm-4 my-4">© 2019 TIMI HAJSZALON. Minden jog fenntartva.</p>
                <div class="w3ls-footer text-center mt-4">
                    
                </div>
            </div>
            {/* <!-- //footer bottom --> */}
        </div>
    </footer>
        )
    }
}
export default Footer