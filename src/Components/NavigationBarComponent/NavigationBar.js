import React from 'react'
import Styles from './NavigationBar.module.css'
const NavigationBar = () => {
  return (
    <div className={Styles.NavContainer}>
        <div className={Styles.NavChild1}>
            <div className={Styles.LeftDiv}>
                <a target='_blank' href="#" className={Styles.PoocoinImages1}>
                    <img src='https://poocoin.app/images/logo/poocoin512.png' height='30' className='me-2'/>
                    <span className={Styles.PooCoinCharts}>PooCoin<br/>Charts</span>
                </a>

                <div className={Styles.PoocoinImages2}>
                    <div className='text-light fw-bold'>
                        >Binance (BSC)
                    </div>
                        <div>
                            <a target='_blank' href="#">Polygon (matic)</a>
                        </div>
                        <div>
                            <a target='_blank' href="#">KuChain (KCC)</a>
                        </div>    
                </div>
                <a className={Styles.PoocoinImages3}>
                    <span className={Styles.PooImageCircleBack}>
                        <img src='https://poocoin.app/images/logo/poocoin512.png' height="18"/>
                    </span>
                    <span style={{color:'green'}}>
                        $0.29
                    </span>
                </a>
                <a style={{marginBottom:28,marginLeft:-10}}>
                    <img src='https://poocoin.app/images/logos/telegram.svg' height="25"/>
                </a>
            </div>
            <div className={Styles.bunchOfLinks}>
                <a target='_blank'>Charts</a>
                <a target='_blank'>Trade</a>
                <a target='_blank'>Multi Cart</a>
                <a target='_blank'>About</a>
                <a target='_blank'>Tools</a>
                <a target='_blank'>Premium</a>
                <a target='_blank'>Advertise</a>
                <a target='_blank'>FreePriceBot</a>
            </div>
      </div>
      <button className={Styles.Btn}>Connect</button>
    </div>
  )
}

export default NavigationBar
