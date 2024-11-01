import React from 'react';

const LandingPage = () => {
  return (
    <div>
      <div className="navbar" id="navbar">
        <div className="left-menu">
          <img className="logo-img" src="images/logo.png" alt="Logo" />
        </div>
        <div className="logo">EXECUSENCE</div>
        <div className="right-menu">
          <a href="#menu">MENU</a>
        </div>
      </div>
      <div className="tag-line">
        <p>Stories About Empowerment</p>
      </div>
      <div className="banner" id="banner">
        <div className="left-portion">
          <img src="images/robot.png" alt="Robot" />
        </div>
        <div className="right-portion">
          <div className="intro-div">
            <h2>Welcome to ExecuSense AI™</h2>
            <h1>An AI All You Need</h1>
          </div>
        </div>
      </div>
      <div className="try-btn-div">
        <button>Demo Chat <i className="bx bxs-arrow-from-left"></i></button>
      </div>
      <div className="about">
        <h1>ExecuSense</h1>
        <h2>
          AI™ empowers executives with data-driven insights for strategic decisions, real-time performance monitoring, risk forecasting, and employee engagement analysis, optimizing agility and precision to drive organizational growth and resilience.
        </h2>
      </div>
      <div className="services">
        <h2>WHY US-</h2>
        <div className="image-gallery">
          <div className="div1 div">
            <img src="images/path.jpeg" alt="Strategic Decision Support" />
            <p>Strategic Decision Support</p>
          </div>
          <div className="div div2">
            <img src="images/help-others.jpeg" alt="Employee Satisfaction Insights" />
            <p>Employee Satisfaction Insights</p>
          </div>
          <div className="div div3">
            <img src="images/pin2.jpg" alt="Real-Time Leadership Dashboard" />
            <p>Real-Time Leadership Dashboard</p>
          </div>
        </div>
      </div>
      <div className="banner-2">
        <h2>Here We Go</h2>
        <h1>Gain the edge in every decision with real-time insights, predictive intelligence, and seamless oversight—ExecuSense AI™ is here to elevate your leadership and drive impactful outcomes.</h1>
      </div>
      <div className="subscribe-page">
        <div className="left-portion">
          <p>Fill That Void To Subscribe</p>
          <input className="input-box" type="text" />
          <button>Click Me!</button>
        </div>
        <div className="right-portion"></div>
      </div>
      <div className="footer">
        <div className="left-part">
          <p>©ExecuSence</p>
          <p>Powered by @LIGMA</p>
        </div>
        <div className="right-part">
          <a href="#navbar" className="icon">
            <i className='bx bxs-left-top-arrow-circle'></i>
          </a>
        </div>
      </div>

      {/* Inline CSS Styles */}
      <style>{`
        *, body {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          font-family: "Work Sans", sans-serif;
        }
        :root {
          --black: black;
        }
        .navbar {
          padding: 75px 40px 55px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 100px;
        }
        .navbar .logo-img {
          width: 150px;
          margin-top: 30px;
        }
        .navbar .logo {
          font-size: 60px;
          cursor: pointer;
          margin-right: 59px;
          font-weight: 700;
        }
        .navbar .right-menu a {
          font-size: 30px;
          text-decoration: none;
          color: var(--black);
        }
        .tag-line {
          text-align: center;
          font-size: 23px;
        }
        .banner {
          width: 100%;
          display: flex;
          justify-content: center;
          height: 800px;
          align-items: center;
        }
        .left-portion {
          width: 47%;
          height: 700px;
          background: linear-gradient(to bottom, #0f1b24 30%, #192731);
          display: flex;
          justify-content: center;
          font-size: 50px;
          align-items: center;
        }
        .left-portion img {
          padding-top: 128px;
          width: 535px;
        }
        .right-portion {
          height: 700px;
          background-color: black;
          width: 47%;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .intro-div {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .intro-div h2 {
          font-size: 30px;
          font-weight: 500;
          padding-bottom: 70px;
        }
        .intro-div h1 {
          font-size: 70px;
          width: 80%;
          animation-name: anime;
          animation-duration: 10s;
          animation-iteration-count: 1;
          text-align: center;
          position: relative;
        }
        @keyframes anime {
          from {
            color: black;
            font-weight: 650;
          }
          to {
            color: white;
            font-weight: 700;
          }
        }
        .try-btn-div {
          display: flex;
          justify-content: center;
          margin-top: 80px;
          margin-bottom: 100px;
          color: white;
        }
        .try-btn-div button {
          padding: 25px 78px;
          border: 0;
          background-color: black;
          color: white;
          cursor: pointer;
          font-size: 45px;
          font-weight: light;
          border-radius: 10px;
        }
        .try-btn-div button:hover {
          background-color: #28282b;
          transition: 0.5s ease;
          filter: drop-shadow(5px 5px 10px black);
        }
        .about {
          width: 100%;
          height: 200px;
          display: flex;
          justify-content: center;
          margin: 130px 100px 100px 100px;
        }
        .about h1 {
          font-size: 50px;
          font-weight: 600;
        }
        .about h2 {
          width: 40%;
          text-align: justify;
          padding-top: 18.5px;
          padding-left: 10px;
          font-weight: 400;
        }
        .services {
          width: 100%;
          height: 800px;
        }
        .services h2 {
          margin-left: 25px;
          font-size: 40px;
          font-weight: 500;
          margin: 100px 20px 50px 30px;
          box-sizing: border-box;
        }
        .services .image-gallery {
          display: flex;
          justify-content: center;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
        }
        .services .image-gallery .div {
          width: 32%;
          margin: 5px;
          height: 80%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          position: relative;
        }
        .services .image-gallery .div img {
          width: 100%;
          height: 85%;
          object-fit: cover;
        }
        .services .image-gallery .div img:hover {
          transform: scale(1.08);
          transition: 0.3s ease;
        }
        .services .image-gallery .div p {
          position: absolute;
          bottom: 0;
          text-align: center;
          width: 100%;
          margin-bottom: 30px;
        }
        .banner-2 {
          width: 100%;
          height: 700px;
          background: url("images/wall.avif");
          background-size: cover;
          background-repeat: no-repeat;
          margin-top: 70px;
          padding-top: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: black;
        }
        .banner-2 h1 {
          width: 60%;
          margin: 200px;
          text-align: justify;
          font-family: "Poppins", sans-serif;
          font-size: 40px;
          font-weight: 500;
        }
        .subscribe-page {
          width: 100%;
          height: 700px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .subscribe-page .left-portion {
          width: 40%;
          height: 400px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .subscribe-page .left-portion p {
          font-size: 25px;
          font-weight: 500;
          margin-bottom: 30px;
        }
        .subscribe-page .input-box {
          height: 50px;
          width: 90%;
          border: none;
          padding: 10px;
          margin-bottom: 20px;
          border-radius: 5px;
        }
        .subscribe-page button {
          padding: 20px;
          border: none;
          background-color: black;
          color: white;
          cursor: pointer;
          font-size: 20px;
          border-radius: 5px;
        }
        .footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: black;
          color: white;
          padding: 0 40px;
        }
        .footer .left-part p {
          margin: 0;
          font-size: 16px;
        }
        .footer .right-part .icon {
          font-size: 30px;
          color: white;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
