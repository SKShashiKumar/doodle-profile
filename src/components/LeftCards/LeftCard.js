import Languages from "./Languages";
import Skills from "./Skills";

const LeftCard = () => {
    // const PersonalDetails = ['https://img.icons8.com/ios-glyphs/24/009688/toolbox.png','Designer','https://img.icons8.com/material-rounded/24/009688/home.png','London, UK','https://img.icons8.com/material-rounded/24/009688/mail.png','ex@mail.com','https://img.icons8.com/material-rounded/24/009688/phone.png','1224435534']
    return ( 
       <div className="container-fluid cardEffect bg-white">
           <div className="row">
              <div className="container-fluid">
                  <div className="row poSRelative">
                      <img src="img/avatar_hat.jpg" alt="profilePic" height="100%" width="100%" /> 
                       <p className="janeDoe"> Jane Doe</p>
                  </div>
                  <div className="row mTmBBB">
                      <div className="container-fluid">
                          <div className="row">
                              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                <img src="https://img.icons8.com/ios-glyphs/20/009688/toolbox.png" alt=""/>
                              </div>
                              <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                                  <p className="txtGray">Designer</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                <img src="https://img.icons8.com/material-rounded/20/009688/home.png" alt=""/>
                              </div>
                              <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                                  <p className="txtGray">London, UK</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                <img src="https://img.icons8.com/material-rounded/20/009688/mail.png" alt=""/>
                              </div>
                              <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                                  <p className="txtGray">ex@mail.com</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                <img src="https://img.icons8.com/material-rounded/20/009688/phone.png" alt=""/>
                              </div>
                              <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                                  <p className="txtGray">1224435534</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <Skills/>
                      <Languages/>
                  </div>
              </div>
           </div>
       </div> 
     );
}
 
export default LeftCard