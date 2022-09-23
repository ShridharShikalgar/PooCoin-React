import React from 'react'
import Styles from './Banner.module.css'
const Banner = () => {
  return (
    <div className={Styles.BannerContainer}>   
        <div className={Styles.Banner}>
            <img src=''/>
        </div>
        
        <h1>BSC Charts</h1>
        <h2>View price charts for any token in your wallet (Binance smart chain)</h2>
        <div className='mb-3 text-center fs-5'>   
            <span>Telegram public chat:</span>
            <a target='_blank' style={{color:'#2DA4D7'}}> https://t.me/poocointokenchat</a>
        </div>
        <div className={Styles.ParentSearchDIV}>
            <div className={Styles.searchDIV}>
                <input type='text' placeholder='Enter token name/address' />
                <div className='css-tlfecz-indicatorContainer' aria-hidden='true'>
                    <svg height='20' width='20' viewBox='0 0 20 20' aria-hidden='true' focusable='false' class='css-8mmkcg'>
                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                        </path>
                    </svg>
                </div>
            </div>
            <button type='button' className='btn btn-light btn-sm ms-1'>
                <i className='far fa-edit'>
                </i>
            </button>
        </div>
        <div className={Styles.CardSection}>
            <div className={Styles.subCardSection}>
                <div className={Styles.CardSearch}>
                    <input type='text' placeholder='Filter' />
                </div>
                <div className={Styles.CardLists}>
                    <ul>
                        <li>
                            <button type='button'>Wallet</button>
                        </li>
                        <li>
                            <button type='button'>Starred</button>
                        </li>
                        <li>
                            <button type='button'>History</button>
                        </li>
                    </ul>
                </div>
                
                <div className={Styles.RestoreHidden}>
                    <button type='button'>Restore Hidden</button>
                </div>
                <div className={Styles.YourTokenSection}>
                    <div className='d-flex justify-content-center mt-3'>
                        Connect your wallet to see your tokens.
                    </div>
                    <div style={{height: 420}}>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
