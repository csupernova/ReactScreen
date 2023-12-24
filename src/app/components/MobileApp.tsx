import '/src/app/css/App.css'
import '/src/app/css/index.css'
import '/src/app/css/components/Mobileapp.css'

const MobileApp: React.FC<{}> = () => {
    return (
        <div>
             <div className="mobile-app">
                <div className="left-side-mobile-app">
                <div className="dwnld-mobile">Download our mobile apps</div>
                <div className="wrap-divider-provider"><div className="divider"></div></div>
                <p className="text-mobile-app">
                Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely
    </p>
                        <div className="wrap-btn">
                            <button className="btn-learnmore">
                                <span className='btn-text'>Download</span>
                                <img className = 'dwnld-vector' src='/src/assets/images/Vector.svg'></img>
                                </button>
                        </div>
                </div>
                <div className="right-side-mobile-app"><img className="mobile-app-illus" src="/src/assets/images/illumobile.png" /></div>
            </div>
        </div>
    )
}
export default MobileApp;