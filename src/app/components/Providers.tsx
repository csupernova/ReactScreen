import '/src/app/css/App.css'
import '/src/app/css/index.css'
import '/src/app/css/components/Providers.css'

const ProvidersInfo: React.FC<{}> = () => {
    return (
        <div>
            <div className="provider">
                <div className="left-side-provider"><img className="provider-img" src="/src/assets/images/providers.png" /></div>
                    <div className="right-side-provider">
                        <div className="provider-header">Leading healthcare providers</div>
                        <div className="wrap-divider-provider"><div className="divider"></div></div>
                        <p className="text-provider">
                        We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver
                        </p>
                        <div className="wrap-btn">
                            <button className="btn-learnmore"><span className='btn-text'>Learn more</span></button>
                        </div>
                    </div>
            </div>
            <div className="wrap-elem-provider"><div><img src="/src/assets/images/element.svg" /></div></div>
        </div>
    )
}
export default ProvidersInfo;