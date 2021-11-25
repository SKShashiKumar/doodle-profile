import Timeline from "./Timeline";

const Education = () => {
  return (
    <div className="container-fluid">
      <div className="row workMainRows">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
          <img
            src="https://img.icons8.com/ios-filled/42/009688/bahai-star.png"
            alt="work"
          />
        </div>
        <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 pt-1">
          <h2 className="txtGray">Education</h2>
        </div>
      </div>
      <div className="pt-1 pb-1">
        <Timeline
          Title="W3Schools.com"
          imgSrc="https://img.icons8.com/ios/20/009688/tear-off-calendar.png"
          imgAlt="calender"
          Times="Forever"
          Content="Web Development! All I need to know in one place"
        />
        <Timeline
          Title="London Business School"
          imgSrc="https://img.icons8.com/ios/20/009688/tear-off-calendar.png"
          imgAlt="calender"
          Times="2013 - 2015"
          Content="Master Degree"
        />
        <Timeline
          Title="School of Coding"
          imgSrc="https://img.icons8.com/ios/20/009688/tear-off-calendar.png"
          imgAlt="calender"
          Times="2010 - 2013"
          Content="Bachelor Degree"
        />
      </div>
    </div>
  );
};

export default Education;
