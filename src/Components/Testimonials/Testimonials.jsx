import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next_icon.png'
import prev_icon from '../../assets/next_icon.png'
import user_1 from '../../assets/user-1.png'
// import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef(null);
    let tx = 0;

const sliderForward = () => {
    if (tx > -50) {
        tx -= 25;
        slider.current.style.transform = `translateX(${tx}%)`;
    }
}
const sliderBackward = () => {
    if (tx < 0) {
        tx += 25;
        slider.current.style.transform = `translateX(${tx}%)`;
    }
}

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={sliderForward} />
        <img src={prev_icon} alt="" className='back-btn' onClick={sliderBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
                                    The supportive community, state-of-art facilities, and 
                                    commitment to academic excellence have truly exceed my expectations.</p>
                            </div>
                        </div>
                    </div>
                </li>                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_3} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
                                    The supportive community, state-of-art facilities, and 
                                    commitment to academic excellence have truly exceed my expectations.</p>
                            </div>
                        </div>
                    </div>
                </li>                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_4} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
                                    The supportive community, state-of-art facilities, and 
                                    commitment to academic excellence have truly exceed my expectations.</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials