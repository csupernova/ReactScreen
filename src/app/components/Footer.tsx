import '/src/app/css/App.css'
import '/src/app/css/index.css'

const Footer: React.FC<{}>= () => {

    return (
        <footer className='footer'>
            <div className='about-company'>
                <div className='head'>
                <div className='ellipse-footer'><span className="logo-letter-footer">T</span></div>
                <span className="title-footer">HeathCare</span>
                </div>
                <p className='text-about-company'>HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                <p className='footer-company'>©HealthCare PTY LTD 2023. All rights reserved</p>
                <div className='wrap-elem-footer'><img  src="/src/assets/images/element2.png"></img></div>
            </div>
            <div className='wrap-catalog-footer'>
                <p className='catalog-footer'>Company</p>
                <ol className='list-links'>
                <li><a href="/">About</a></li>
                <li><a href="/">Testimonials</a></li>
                <li><a href="/">Find a doctor</a></li>
                <li><a href="/">Apps</a></li>
                </ol>
            </div>
            <div className='wrap-catalog-footer'>
                <p className='catalog-footer'>Region</p>
                <ol className='list-links'>
                <li><a href="/">Indonesia</a></li>
                <li><a href="/">Singapore</a></li>
                <li><a href="/">Hongkong</a></li>
                <li><a href="/">Canada</a></li>
                </ol>
            </div>
            <div className='wrap-catalog-footer'>
                <p className='catalog-footer'>Help</p>
                <ol className='list-links'>
                <li><a href="/">Help center</a></li>
                <li><a href="/">Contact support</a></li>
                <li><a href="/">Instructions</a></li>
                <li><a href="/">How it works</a></li>
                </ol>
            </div>
        </footer>
    )
}
export default Footer;