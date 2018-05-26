import React, { Component } from 'react';



class App extends Component {
  render() {
    return (
      <div classNameName="App">

      <div className="alignpages">
  <div className="center">
<main role="main">


        <div className="marketing container text-center text-md-left">


        <div className="row">

          <div className="col-lg-4">


            <img className="rounded-circle" src="assets/round1.jpeg" alt="Generic placeholder image" width="140" height="140"/>
            <h2>Learn About Us</h2>
            <p>CSIX CONNECT helps individuals in career transition to significantly improve their job search success through education, in-person networking and mutual support.   In today’s job market, more than 80 per cent of jobs obtained result from successful networking.</p>

            <p><div classNameName="btn btn-secondary popup"  onclick="myFunction()">View details »
                   <span className="popuptext" id="myPopup" >
                      <div className="link-className"> <a href="#">Link 1</a></div>
                                  </span>
            </div>
          </p>


          </div>
          <div className="col-lg-4">
            <img className="rounded-circle" src="assets/round2.png" alt="About you image" width="140" height="140"/>
            <h2>Tell Us About Yourself</h2>
            <p>Please tell us about you. What makes you a unique speaker who can change people life </p>
          <button className="btn btn-secondary popup"  onclick="myFunction2()">View details »
                   <div className="popuptext popLayout" id="myPopup2" >
                  <div className="link-className"><a href="#"> Link 2</a></div>
                  </div>
            </button>
          </div>

          <div className="col-lg-4">
            <img className="rounded-circle" src="assets/round3.png" alt="Future Speaker" width="140" height="140"/>
            <h2>Become A Speaker!</h2>

            <p>CSIX is built on the belief that networking is most effective when done face-to-face. Therefore, to join CSIX you must attend a meeting and sign up in person. Membership is free. CSIX membership provides access to a vast array of job listings and job search resources via other members, the CSIX CONNECT Yahoo! group.</p>
            <p><button className="btn btn-secondary popup"  onclick="myFunction3()">View details »
                   <span className="popuptext" id="myPopup3" >
                  <div className="link-className"><a href="#">Link 3</a></div>
                  </span>
            </button></p>
          </div>
        </div>
<p>

  <div className="container">
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
            <div className="embed-responsive embed-responsive-16by9 ">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/y_6aZX35x28" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
      </div>
    <div className="col-md-3"></div>
  </div>
</div>
</p>
      <p classNameName="App-intro">
                  </p>
                  </div>
            </main>

      </div>
      </div>
      </div>
    );
  }
}

export default App;
