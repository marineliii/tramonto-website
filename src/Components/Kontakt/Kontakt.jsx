/* eslint-disable no-unused-vars */
import React from 'react'
import './Kontakt.css'

const Kontakt = () => {
    return (
        <div className='contact'>

            <div className='reservation'>
                <div className='reservation-img'>
                    <div className='text-rezervacija'>
                        <h1>Piće ili obrok</h1>
                        <p>Rezervišite svoje mesto u restoranu bez obzira na to da li želite intimnu večeru,
                            poslovni ručak ili opušteno veče sa prijateljima.</p>
                        <p>Resotran Tramonto |<span> 036/338-872</span></p>
                        <p>Picerija Tramonto | <span>036/336-850</span></p>
                    </div>
                </div>

            </div>
            <div className='order-food'>
                <div className='order-food-img'>
                    <div className='text-order'>
                        <h1>PORUČI HRANU</h1>
                        <p>Tvoji omiljeni specijaliteti iz Tramonto restorana <br /> za koje će se naš Wolt partner pobrinuti da u najkracem
                            roku stignu do Vas.<br />
                            <button className='btn'> <a href="https://wolt.com/sr/srb/kraljevo/restaurant/tramonto-kafe-restoran" target="_blank">Poruči sada</a> </button>
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Kontakt
