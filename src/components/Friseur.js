import React,{Component, useState} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from './DatePicker';

import Demo from './FormDialog';


const Friseur = () =>{
    const [openModal, setOpenModal] = useState(false);


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
		<li class="breadcrumb-item active" aria-current="page">Frizurák</li>
	</ol>
</div>
    <section class="gallery py-1" id="gallery">
        <div class="container py-md-5">
	<h3 class="heading text-center mb-3 mb-sm-5">Frizurák</h3>
            <div class="gallery-content">
                <div class="row">
                </div>

            </div>
        </div>
    </section>

    </div>
        )
    }

export default Friseur