import '/src/app/css/App.css'
import '/src/app/css/index.css'
import '/src/app/css/components/Header.css'

const Header: React.FC<{}> = () => {
    return (
        <header>
            <div className="head">
                <div className="ellipse"><span className="logo-letter">T</span></div>
                <span className="title">HeathCare</span>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Find a doctor</a></li>
                    <li><a href="/">Apps</a></li>
                    <li><a href="/">Testimonials</a></li>
                    <li><a href="/">About us</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;