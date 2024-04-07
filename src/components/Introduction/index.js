import { BsBook } from "react-icons/bs";
import { FaCalendarAlt,FaCalendarCheck } from "react-icons/fa";
import { SlNotebook } from "react-icons/sl";
import ApplicationForm from "../ApplicationForm";
import './index.css'

const Introduction = () => {
    return (
        <div className='introduction-container'>
            <div className='intro-content-container'>
                <h1>Become ACCA in 18 months</h1>
                <p>
                    Acquire globally recognized accountancy qualification, ACCA (also called as Global CA), and get placed in top MNCs & Big4s.
                </p>
                <div className='features-container'>
                    <div className='feature-container'>
                    <BsBook className="feature-icon" />
                        <div>
                            <h3>Levels</h3>
                            <p>Three (13 papers) </p>
                        </div>
                    </div>

                    <div className='feature-container'>
                    <FaCalendarAlt className="feature-icon" />
                        <div>
                            <h3>Duration</h3>
                            <p>6-30 months</p>
                        </div>
                    </div>

                    <div className='feature-container'>
                    <SlNotebook className="feature-icon" />
                        <div>
                            <h3>Exams</h3>
                            <p>Quarterly (Online)</p>
                        </div>
                    </div>

                    <div className='feature-container'>
                    <FaCalendarCheck className="feature-icon" />
                        <div>
                            <h3>Exemptions</h3>
                            <p>Up to 9 papers</p>
                        </div>
                    </div>
                </div>

                
            </div>
            <ApplicationForm />
        </div>
    )
}

export default Introduction