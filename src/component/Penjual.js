import React from 'react';
import box from '../assets/images/fi_box.png'
import chevronRight from '../assets/images/fi_chevron-right.png'
import dollar from '../assets/images/fi_dollar-sign.png'
import love from '../assets/images/Vector.png'
import plus from '../assets/images/fi_plus.png'
import Diminati from '../assets/images/Group 33.png'
import barang from '../assets/images/Rectangle23.png'
// mobile icon kategori
import boxMob from '../assets/images/mobile-fi_box.png'
import dollarMob from '../assets/images/mobile-fi_dollar-sign.png'
import loveMob from '../assets/images/mobile-fi_heart.png'

const Jual = () => {
    return (

        <div className='Container'>

            <span className='daftarjual-title'>Daftar Jual Saya</span>
            <div className='penjual'>
                <div className='frame-138'>
                    <img className='foto-penjual' />
                    <div className='frame-137'>
                        <span className='nama-penjual'>Nama</span>
                        <span className='kota'>Kota</span>
                    </div>
                    <div className='frame-141'>
                    <a href="/info-profile">
                        <span className='edit'>Edit</span>
                    </a>
                    </div>

                </div>
            </div> 
            
        </div>
        
    );
 
};

export default Jual;