import ProgressBars from "./ProgressBars";

const Skills = () => {
    return ( 
        <div className="container-fluid mt-2 mb-2">
            <div className="row">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                            <img src="https://img.icons8.com/ios-glyphs/20/009688/asterisk.png" alt="asterisk"/>
                        </div>  
                        <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                            <h5 className="txtGray">Skils</h5>
                        </div>
                    </div>
                    <ProgressBars Heading="Adobe Photoshop" Progress="90" Height="18px" Label="90%"/>               
                    <ProgressBars Heading="Photography" Progress="80" Height="18px" Label="80%"/>               
                    <ProgressBars Heading="Adobe Illustrator" Progress="75" Height="18px" Label="75%"/>               
                    <ProgressBars Heading="Media" Progress="50" Height="18px" Label="50%"/>               
                </div>
            </div>
        </div>
     );
}
 
export default Skills;