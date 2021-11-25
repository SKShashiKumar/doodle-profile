import Education from "./RightCards/Education";
import Work from "./RightCards/Work";

const RightCard = () => {
    return ( 
        <div className="container-fluid mgLneg">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 cardEffect bg-white mb-3">
                    <Work/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 cardEffect bg-white">
                    <Education/>
                </div>
            </div>
        </div>
     );
}
 
export default RightCard;