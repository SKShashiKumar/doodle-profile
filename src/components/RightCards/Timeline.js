const Timeline = (props) => {
    return ( 
        <div className="row workSubRows">
        <div className="container-fluid">
            <div className="row">
                <h5>{props.Title}</h5>
            </div>
            <div className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                    {/* <img src="https://img.icons8.com/ios/20/009688/tear-off-calendar.png" alt='calender'/> */}
                    <img src={props.imgSrc} alt={props.imgAlt} />
                </div>
                <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                    {/* <p className="subheading">Jan 2015 - <span className="current rounded">Current</span></p> */}
                    <p className="subheading">{props.Times}</p>
                </div>
            </div>
            <div className="row">
                <p>{props.Content}</p>
            </div>
        </div>
    </div>
     );
}
 
export default Timeline;