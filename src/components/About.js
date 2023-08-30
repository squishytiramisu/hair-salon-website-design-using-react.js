import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class About extends Component{
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
		<li class="breadcrumb-item active" aria-current="page">Köszöntő</li>
	</ol>
</div>
    <section class="banner-bottom py-1" id="exp">
        <div class="container py-md-5">
            <div class="row mid-grids mt-lg-5 mt-3">
                <div class="col-md-10 content-left-bottom entry-w3ls-info text-left">
                    <h4>Kedves (Leendő) Vendégeim!</h4>
                    <p class="mt-1 text-left">
                    Szeretnék a megnyílt fodrász szalonomba betérő vendégeim számára egy kis kedvcsinálót kínálni a
                    következő sorokkal.
                    Valamiről alkotott benyomást nem lehet második alkalommal kieszközölni. Az üzleti találkozó, vagy üzleti
                    fogadás, vagy egy szerelmi légyott első pillanatában kialakult véleményünk mélyen a tudatunkba
                    beleágyazódik és ott él és formálja a másikról alkotott véleményünket. Ehhez hozzátartozik az ízléses
                    öltözködés, a jól ápoltság , a jól megválasztott illat és az egyéniséghez passzoló frizura.
                    Már fodrász tanuló koromban a szüleim nagy hangsúlyt fektettek arra, hogy nagyon jó fodrászoktatóhoz
                    kerüljek. Ekkor volt szerencsém megismerni Köcskiné Jutkát. Ó megismertette velem a szakma apró
                    fogásait, fortélyait. Később egyre inkább törekedtem arra, hogy a tudásomat professzionista szintre
                    vigyem. Veszprémben évekig dolgoztam Pikler Tibor mesterfodrász útmutatása mellett.
                    Ezután felkerültem Budapestre, ahol 7 éven keresztül az Árkád Üzletházban egy német érdekeltségű
                    cégnél még tovább fejlesztettem szakmai tudásomat. Mindig az volt a vágyam, hogy a megszerzett
                    tapasztalataimat egy szépen felszerelt üzletben megmutathassam. Most ez a vágyam teljesült. 2023.
                    szept. 1-étől a Margit utca 123. alatt nyítottam egy kitűnően felszerelt, ám családias hangulatú üzletet.
                    A ragyogó környezet, a szakmai kompetenciám és a már meglévő vendégköröm a garancia arra, hogy Ón
                    megtalálja azt, amire vágyott.
                    Örömömre szolgálna, hogy holnaptól Önöket is vendégeimként üdvözölhetném.
                    <br/>
                    <br/>
                    A szépség szolgálatában: 
                    <h5 class="mt-1">Völler Tímea</h5>
                    </p>
                    

                </div>


            </div>
        </div>
    </section>
    {/* <!-- //about-mid    

  <section class="stats-count">
  <div class="overlay py-5">
    <div class="container py-md-5">
      <div class="row text-center">
        <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info ">
          <h5>700</h5>
          <h6 class="pt-2">Clients</h6>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
          <h5>250 +</h5>
          <h6 class="pt-2">Awards</h6>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
          <h5>150</h5>
          <h6 class="pt-2">styles</h6>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
          <h5>125</h5>
          <h6 class="pt-2">Men spas</h6>
        </div>
      </div>
    </div>
	</div>
  </section>
  {/* <!--//states -->

-->*/}
    <section class="banner-bottom">
            <div class="row mt-lg-8 mt-8 justify-content-center">
                <div class="col-md-8 text-center place-content-center">
                    <div class="team-img mb-8">
                        <img src="assets/images/timi.jpg" class="img-fluid" alt="user-image" width="512px" />
                    </div>
                    <div class="team-info">
                        <h3 class="mt-md-4 mt-3">Völler Tímea</h3>
                    </div>
                </div>
        </div>
    </section>
    <br/>
    <br/>
    <br/>

            </div>
	
        )
    }
}
export default About