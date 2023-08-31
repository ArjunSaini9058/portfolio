import React from 'react'
import './Clients.css'
function Clients() {
    return (
        <div className='clients-container'>
            <div className='client-row1'>
                <div className='client-r1-c1'>
                    <p>What says our<br />happy Clients</p>
                </div>
                <div className='client-r1-c2'>
                    <button className='arrow-btn1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="19" viewBox="0 0 29 19" fill="none">
                            <path d="M27.1317 10.6464C27.7392 10.6464 28.2317 10.1539 28.2317 9.54636C28.2317 8.93885 27.7392 8.44636 27.1317 8.44636L27.1317 10.6464ZM1.47903 8.44636C0.871515 8.44636 0.379028 8.93885 0.379028 9.54636C0.379028 10.1539 0.871515 10.6464 1.47903 10.6464L1.47903 8.44636ZM7.11785 18.3441C7.54934 18.7718 8.24582 18.7686 8.67347 18.3372C9.10113 17.9057 9.09802 17.2092 8.66653 16.7815L7.11785 18.3441ZM5.06564 14.7614L5.83998 13.9801L5.06564 14.7614ZM5.06564 4.33135L5.83998 5.11263L5.06564 4.33135ZM8.66653 2.31119C9.09802 1.88353 9.10113 1.18706 8.67347 0.755567C8.24582 0.324078 7.54934 0.320971 7.11785 0.748626L8.66653 2.31119ZM1.51092 10.0487L0.419744 10.1878L0.419744 10.1878L1.51092 10.0487ZM1.51092 9.044L0.419746 8.90491L0.419746 8.90491L1.51092 9.044ZM27.1317 8.44636L1.47903 8.44636L1.47903 10.6464L27.1317 10.6464L27.1317 8.44636ZM8.66653 16.7815L5.83998 13.9801L4.2913 15.5427L7.11785 18.3441L8.66653 16.7815ZM5.83998 5.11263L8.66653 2.31119L7.11785 0.748626L4.2913 3.55007L5.83998 5.11263ZM5.83998 13.9801C4.69455 12.8448 3.90267 12.0576 3.36572 11.389C2.84271 10.7378 2.65268 10.3066 2.60209 9.90964L0.419744 10.1878C0.542692 11.1524 1.00297 11.9604 1.6504 12.7666C2.28389 13.5554 3.18261 14.4438 4.2913 15.5427L5.83998 13.9801ZM4.2913 3.55007C3.18261 4.64891 2.28389 5.5373 1.6504 6.32612C1.00297 7.13229 0.542692 7.94034 0.419746 8.90491L2.60209 9.18308C2.65268 8.78615 2.84271 8.35493 3.36572 7.70368C3.90267 7.03507 4.69455 6.24789 5.83998 5.11263L4.2913 3.55007ZM2.60209 9.90964C2.57134 9.66841 2.57134 9.42432 2.60209 9.18308L0.419746 8.90491C0.365457 9.33084 0.365453 9.76187 0.419744 10.1878L2.60209 9.90964Z" fill="#373737" />
                        </svg>
                    </button>
                    <button className='arrow-btn1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="19" viewBox="0 0 29 19" fill="none">
                            <path d="M1.95135 8.20636C1.34384 8.20636 0.851355 8.69885 0.851355 9.30636C0.851355 9.91388 1.34384 10.4064 1.95135 10.4064L1.95135 8.20636ZM27.604 10.4064C28.2115 10.4064 28.704 9.91387 28.704 9.30636C28.704 8.69885 28.2115 8.20636 27.604 8.20636L27.604 10.4064ZM21.9652 0.508624C21.5337 0.0809699 20.8372 0.084077 20.4096 0.515565C19.9819 0.947055 19.985 1.64353 20.4165 2.07119L21.9652 0.508624ZM24.0174 4.09135L23.2431 4.87263L24.0174 4.09135ZM24.0174 14.5214L23.2431 13.7401L24.0174 14.5214ZM20.4165 16.5415C19.985 16.9692 19.9819 17.6657 20.4096 18.0972C20.8372 18.5286 21.5337 18.5317 21.9652 18.1041L20.4165 16.5415ZM27.5721 8.80399L28.6633 8.66491L28.6633 8.66491L27.5721 8.80399ZM27.5721 9.80872L28.6633 9.94781L28.6633 9.94781L27.5721 9.80872ZM1.95135 10.4064L27.604 10.4064L27.604 8.20636L1.95135 8.20636L1.95135 10.4064ZM20.4165 2.07119L23.2431 4.87263L24.7917 3.31007L21.9652 0.508624L20.4165 2.07119ZM23.2431 13.7401L20.4165 16.5415L21.9652 18.1041L24.7917 15.3026L23.2431 13.7401ZM23.2431 4.87263C24.3885 6.00789 25.1804 6.79507 25.7173 7.46368C26.2403 8.11493 26.4304 8.54615 26.4809 8.94308L28.6633 8.66491C28.5403 7.70034 28.0801 6.89229 27.4326 6.08611C26.7991 5.2973 25.9004 4.40891 24.7917 3.31007L23.2431 4.87263ZM24.7917 15.3026C25.9004 14.2038 26.7991 13.3154 27.4326 12.5266C28.0801 11.7204 28.5403 10.9124 28.6633 9.94781L26.4809 9.66964C26.4304 10.0666 26.2403 10.4978 25.7173 11.149C25.1804 11.8176 24.3885 12.6048 23.2431 13.7401L24.7917 15.3026ZM26.4809 8.94308C26.5117 9.18431 26.5117 9.4284 26.4809 9.66964L28.6633 9.94781C28.7176 9.52188 28.7176 9.09085 28.6633 8.66491L26.4809 8.94308Z" fill="black" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='client-row2'>
                <div className='client-card'>
                    <div className='client-img cim1'>
                    
                    </div>
                    <p className='client-p1'>Jane Cooper</p>
                    <p className='client-p2'>Ceo of Hunt</p>
                    <p className='client-p3'>Amet minim mollit non deserunt ullamco est<br />
                        sit aliqua dolor do amet sint. Velit officia<br />
                        consequatduis enim velit mollit Exer. sit<br />
                        aliqua dolor do amet sint. Velit officia</p>
                </div>
                <div className='client-card'>
                    <div className='client-img cim2'>
                
                    </div>
                    <p className='client-p1'>Devon Lane</p>
                    <p className='client-p2'>Ceo of Hunt</p>
                    <p className='client-p3'>Amet minim mollit non deserunt ullamco est<br />
                        sit aliqua dolor do amet sint. Velit officia<br />
                        consequatduis enim velit mollit Exer. sit<br />
                        aliqua dolor do amet sint. Velit officia</p>
                </div>
                <div className='client-card'>
                    <div className='client-img cim3'>
                
                    </div>
                    <p className='client-p1'>Robert Fox</p>
                    <p className='client-p2'>Ceo of Hunt</p>
                    <p className='client-p3'>Amet minim mollit non deserunt ullamco est<br />
                        sit aliqua dolor do amet sint. Velit officia<br />
                        consequatduis enim velit mollit Exer. sit<br />
                        aliqua dolor do amet sint. Velit officia</p>
                </div>
            </div>
        </div>
    )
}

export default Clients
