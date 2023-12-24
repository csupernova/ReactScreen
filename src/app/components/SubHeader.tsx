import '/src/app/css/App.css'
import '/src/app/css/index.css'
import '/src/app/css/components/Subheader.css'

const SubHeader: React.FC<{}> = () => {
    return (
        <div>
             <div><img className="element" src="/src/assets/images/element.svg" /></div>
             <div className="sub-header">
                <div className="left-side-virtual-healthcare">
                <div className="virtual-healthcare">Virtual healthcare <br />for you</div>
                <p className="text-sub-header">
    Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone
    </p>
    <button className="consult-btn">Consult today</button>
                </div>
                <div className="right-side-virtual-healthcare"><img className="sub-header-illustration" src="/src/assets/images/illustation.png" /></div>
            </div>
        </div>
    )
}
export default SubHeader;