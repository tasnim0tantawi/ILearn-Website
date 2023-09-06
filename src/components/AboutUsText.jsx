import React from "react";

function AboutUsText(){
    return (
        <>
           <div className="container">
          <div className="about-section">
            <div className="row">
              <div className="col-md-6">
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="About Us" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <div className="about-heading">
                  <h2>About Us</h2>
                  <hr className="my-4 w-50 " />
                </div>
                <div className="about-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum lectus elit, sit amet ullamcorper ex gravida eget. Quisque lacinia ipsum non mi tincidunt, nec tincidunt nunc fringilla. Nulla facilisi. Suspendisse et mauris eget dolor aliquet volutpat in at lectus. Cras ac tortor ipsum. Integer rhoncus malesuada leo, eget egestas ex consequat sed.</p>
                  <p>Proin eu sapien ut ligula aliquam ultricies. Donec sed libero non urna suscipit fringilla. Nam venenatis purus sed mi faucibus posuere. Etiam quis lectus condimentum, rhoncus metus eget, consequat purus. Sed scelerisque ligula eu erat tristique vestibulum. Sed accumsan nisl eget mauris vulputate, eget vestibulum tortor dapibus. Etiam eleifend vestibulum nisi, at iaculis arcu finibus id. Fusce dapibus iaculis ex, ac finibus elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    );
}

export default AboutUsText;