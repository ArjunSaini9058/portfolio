import React from 'react'
import Navbar from './first/Navbar'
import './Firstbox.css'
function Firstbox() {
    return (
        <div className='Fisrt-Container'>
            <div className='row1'>
                <Navbar />
            </div>
            <div className='row2'>
                <div className='col1'>
                    <div className='col1-row1'>
                        <h1 className='tag1'>You don’t have to </h1>
                        <h1 className='tag2'>Fight them Alone.</h1>
                    </div>
                    <div className='col1-row2'>
                        <p className='tag3'>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
                    </div>
                    <div className='col1-row3'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M1.13877 3.87535C0.833313 5.012 0.833313 6.58008 0.833313 9C0.833313 12.4373 0.833313 14.1559 1.70865 15.3607C1.99135 15.7498 2.33353 16.092 2.72263 16.3747C3.92743 17.25 5.64606 17.25 9.08331 17.25H10.9166C14.3539 17.25 16.0725 17.25 17.2773 16.3747C17.6664 16.092 18.0086 15.7498 18.2913 15.3607C19.1666 14.1559 19.1666 12.4373 19.1666 9C19.1666 6.57201 19.1666 5.00156 18.8581 3.864L16.9306 5.79154C15.4344 7.2878 14.2618 8.46038 13.2239 9.25227C12.1615 10.0628 11.1599 10.539 9.99985 10.539C8.83986 10.539 7.83818 10.0628 6.77583 9.25227C5.73792 8.46038 4.56535 7.28779 3.0691 5.79152L1.27685 3.99927L1.13877 3.87535Z" fill="white" />
                                <path d="M1.74998 2.58333L1.84975 2.6659L2.22286 3.00074L4.00418 4.78206C5.5457 6.32358 6.65397 7.42978 7.60988 8.15911C8.54992 8.87634 9.26137 9.16403 9.99985 9.16403C10.7383 9.16403 11.4498 8.87634 12.3898 8.15911C13.3457 7.42978 14.454 6.32358 15.9955 4.78206L18.1111 2.66648L18.2262 2.55197C17.9436 2.16287 17.6664 1.90804 17.2773 1.62534C16.0725 0.75 14.3539 0.75 10.9166 0.75H9.08331C5.64606 0.75 3.92743 0.75 2.72263 1.62534C2.33353 1.90804 2.03268 2.19423 1.74998 2.58333Z" fill="white" />
                            </svg> <input type='email' placeholder='Enter your Email address' />
                        </div>
                        <div>
                            <button>
                                Let's Talk
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col2'>

                </div>
            </div>

        </div>
    )
}

export default Firstbox