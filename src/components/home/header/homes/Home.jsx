import React from "react";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img src="./assets/home.png" alt="" />
            </div>
          </div>
          <div className="right topMargin">
            <h1>
              I AM A <br />
              WEB DEVELOPER
            </h1>
            <div className="socialIcon">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-youtube"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              commodi animi aliquam sunt cumque laborum magni nisi iure nemo
              maiores distinctio mollitia provident necessitatibus reiciendis,
              dolor dolore asperiores fuga quaerat.
            </p>
            <button className="btn-primary">Contact Us</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
