import React, { useState } from 'react'
import './Faq.css'
function Faq() {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    return (
        <div className='faq-container'>
            <div className='faq-title'>
                <p>FAQ</p>
            </div>
            <div className='faq-columns'>
                <div className='faq-col1'>
                    <p>Amet minim mollit non deserunt ullamco est sit <br />
                        aliqua dolor do amet sint. </p>
                </div>
                <div className='faq-col2'>
                    <div className='faq-c2-r1'> Do I need a personal injury report?</div>
                    <div className='faq-c2-r2'>Amet minim mollit non deserunt ullamco est sit<br />
                        aliqua dolor do amet sint. Velit officia consequatduis<br />
                        enim velit mollit Exer. Amet minim mollit non deserunt<br />
                        ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</div>
                    <div className='faq-c2-line'></div>
                    <div className='faq-c2-q'>
                        <div className='tagline'>
                            How much is my case worth?
                        </div>
                        {
                            show ? <button onClick={() => { setShow(false) }} className='faq-add-btn'>
                                ✖
                            </button> : <button onClick={() => { setShow(true) }} className='faq-add-btn'>
                            ✚
                            </button>
                        }
                    </div>
                    {
                        show ? <div className='ans'>
                           Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. 
                        </div> : null
                    }

                    <div className='faq-c2-line'></div>
                    <div className='faq-c2-q'>
                        <div className='tagline'>
                            What should I do right after car accidect
                        </div>
                        {
                            show2 ? <button onClick={() => { setShow2(false) }} className='faq-add-btn'>
                                ✖
                            </button> : <button onClick={() => { setShow2(true) }} className='faq-add-btn'>
                            ✚
                            </button>
                        }
                    </div>
                    {
                        show2 ? <div className='ans'>
                          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. 
                       
                        </div> : null
                    }

                    <div className='faq-c2-line'></div>
                    <div className='faq-c2-q'>
                        <div className='tagline'>
                            How much is my case worth?
                        </div>
                        {
                            show3 ? <button onClick={() => { setShow3(false) }} className='faq-add-btn'>
                               ✖
                            </button> : <button onClick={() => { setShow3(true) }} className='faq-add-btn'>
                            ✚
                            </button>
                        }
                    </div>
                    {
                        show3 ? <div className='ans'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. 
                       
                        </div> : null
                    }

                </div>

            </div>
        </div>
    )
}

export default Faq
