import './Header.css';
import { Link } from 'react-router-dom';
function Header(){
    return(
        <>
            <div className="main">
    
                <div className="notification">
                    <marquee >50% OFF on Fullstack Web Development   |   20% OFF on Cyber Security   |   30% OFF on Java Development   |   40% OFF on Python Programming   |   25% OFF on MERN Stack Mastery   |   35% OFF on Data Science & Machine Learning   |   50% OFF on Web Design UI/UX Courses   |   30% OFF on Cloud Computing & DevOps   |   45% OFF on Mobile App Development   |   20% OFF on Digital Marketing Professional Course   |   30% OFF on SQL & Database Engineering   |   40% OFF on C++ & DSA Masterclass   |   15% OFF on Ethical Hacking Essentials   |   50% OFF on Interview Preparation & Soft Skills Training
 </marquee>
                    {/* Consider replacing <marquee> with a more accessible alternative in the future */}
                </div>


        
                <div className="header">

                    <div className="left-header">
    
                        <div className="left-header1">
                            <img src = "./public/images-homepage/logo2.webp"/>
                        </div>
    
                        <div className="left-header2">
                            <h1>SkillPointX ᴘᴠᴛ .ʟᴛᴅ.</h1>
                        </div>
                        
                    </div>
    
                    <div className="right-header">
    
                        <div className="right-header1">
                            
                                <i className="fa fa-map-marker">
                                </i>
                                        location
                                        <br/>
                                    
                                        ᴷᴼᴸᴷᴬᵀᴬ | ᴰᵁᴿᴳᴬᴾᵁᴿ | ᴾᴬᴺᴬᴳᴬᴿᴴ | ᴿᴬᴺᴵᴳᴬᴺᴶ
                                    
                            
                        </div>

                        <div className="right-header2">
                            
                                <Link to="https://mail.google.com/mail/" target="_blank">
                                    <i className="fa fa-envelope"></i>
                                    admin@skillpointx.co.in
                                </Link>
                            
                            <br/>
                            <p>follow us on -</p>
                            
                                <Link to="https://www.facebook.com/" target="_blank">
                                    <i className="fa fa-facebook"></i>
                                </Link>
                            
                            
                                <Link to="https://www.instagram.com/" target="_blank">
                                    <i className="fa fa-instagram"></i>
                                </Link>
                            
                            
                                <Link to="https://twitter.com/" target="_blank">
                                    <i className="fa fa-twitter"></i>
                                </Link>
                            
                            
                                <Link to="https://www.youtube.com/" target="_blank">
                                    <i className="fa fa-youtube-play"></i>
                                </Link>
                            
                        </div>
                    </div>
                    
                </div>



        
                <div className="navbar">

                    <div className="left-navbar">
                        <ul className="menu-list">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/login" className="btn">Login</Link>
                                
                            </li>
                            
                        </ul>

                    </div>

                    <div className="right-navbar">

                        <div className="right-navbar1">
                            
                                {/* <input type="search" placeholder="search here"/>
                                    <i className="fa fa-search"></i> */}
                                
                            
                        </div>

                        <div className="right-navbar2">
                            
                                {/* <Link to="D:\html\AICT\website design\F\subpages\cart.html">
                                    <i className="fa fa-shopping-cart fa-2x"></i>
                                </Link> */}
                                        
                        </div>

                        <div className="right-navbar3">
                            
                                    {/* <Link to="D:\html\AICT\website design\F\subpages\account.html">
                                        <i className="fa fa-user fa-2x"></i>
                                    </Link> */}
                                
                            
                        </div>

                            
                    </div>
                
                </div>



                <br/>

                <br/>

    
            

                


            </div>

        </>
    );
}
export default Header;