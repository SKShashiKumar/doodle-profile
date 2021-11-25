import ProgressBars from "./ProgressBars";

const Languages = () => {
    return ( 
        <div className="container-fluid">
            <div className="row">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                        <img src="https://img.icons8.com/ios-glyphs/20/009688/globe.png" alt="globe"/>
                        </div>  
                        <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                            <h5>Languages</h5>
                        </div>
                    </div>
                    <ProgressBars Heading="English" Progress="100" Height="25px"/>               
                    <ProgressBars Heading="Spanish" Progress="60" Height="25px"/>               
                    <ProgressBars Heading="German" Progress="30" Height="25px"/>                             
                </div>
            </div>
        </div>
     );
}
 
export default Languages;