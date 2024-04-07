import './index.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h1>Indigo Learn</h1>
            <ul type='none' className='nav-links-container'>
                <li className='nav-links'>Home</li>
                <li className='nav-links'>Why Us?</li>
                <li className='nav-links'>Learnings</li>
                <li className='nav-links'>Placements</li>
            </ul>
            <button className='login-button'>Login/Sign Up</button>
        </div>
    )
}

export default Header