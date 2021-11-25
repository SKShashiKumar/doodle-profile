const Timeline = (props) => {
    return ( 
        <div className="row workSubRows">
        <div className="container-fluid">
            <div className="row">
                <h5 className="txtGray">{props.Title}</h5>
            </div>
            <div className="row TimeStand">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 imgPadding">
                    <img src={props.imgSrc} alt={props.imgAlt} />
                </div>
                <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                    {props.current ? 
                    <p className="subheading">{props.Times} <span className="current rounded">Current</span></p>

                    : 
                    <p className="subheading imgPadding">{props.Times}</p>
                    }
                </div>
            </div>
            <div className="row content">
                <p>{props.Content}</p>
            </div>
        </div>
                    {/* <p className="subheading">Jan 2015 - <span className="current rounded">Current</span></p> */}

    </div>
     );
}
 
export default Timeline;
