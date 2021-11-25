import Timeline from "./Timeline";

const Work = () => {
    return (         
        <div className="container-fluid">
            <div className="row workMainRows">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                    <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/42/009688/external-briefcase-interface-kiranshastry-solid-kiranshastry.png" alt="work"/>
                </div>
                <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 pt-1">
                    <h2 className="txtGray">Work Experience</h2>
                </div>
            </div>
            <div className="pt-1 pb-1">
                <Timeline Title="Front End Developer / w3schools.com" current={true} imgSrc="https://img.icons8.com/ios/20/009688/tear-off-calendar.png" imgAlt="calender" Times="Jan 2015 - " Content="Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."/>
                <Timeline Title="Web Developer / something.com"  current={false} imgSrc="https://img.icons8.com/ios/20/009688/tear-off-calendar.png" imgAlt="calender" Times="Mar 2012 - Dec 2014" Content="Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."/>
                <Timeline Title="Graphic Designer / designsomething.com"  current={false} imgSrc="https://img.icons8.com/ios/20/009688/tear-off-calendar.png" imgAlt="calender" Times="Jun 2010 - Mar 2012" Content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
            </div>
        </div> 
    );
}
 
export default Work;