import React from "react";

const PageNotFound = () => {
  return (
    <>
      <link rel="stylesheet" href="src/App.scss" />
      {/* <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="contant_box_404">
                  <h3 class="h2">Look like you're lost</h3>

                  <p className="p">The Page you are looking for not Available!</p>

                  <a href="/" class="link_404">
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <body class="bg-purple">
        
        <div class="stars">
            
            <div class="central-body">
                <img class="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px"/>
                <a href="/" class="btn-go-home">GO BACK HOME</a>
            </div>
            <div class="objects">
                <img class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"/>
                <div class="earth-moon">
                    <img class="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"/>
                    <img class="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px"/>
                </div>
                <div class="box_astronaut">
                    <img class="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px"/>
                </div>
            </div>
            <div class="glowing_stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>

            </div>

        </div>

    </body> */}
      <div className="main">
        <div class="mars"></div>
        <img src="https://assets.codepen.io/1538474/404.svg" class="logo-404" />
        <img
          src="https://assets.codepen.io/1538474/meteor.svg"
          class="meteor"
        />
        <p class="title">Oh no!!</p>
        <p class="subtitle">
          You’re either misspelling the URL <br /> or requesting a page that's
          no longer here.
        </p>
        <div align="center">
          <a class="btn-back" href="/">
            Back to previous page
          </a>
        </div>
        <img
          src="https://assets.codepen.io/1538474/astronaut.svg"
          class="astronaut"
        />
        <img
          src="https://assets.codepen.io/1538474/spaceship.svg"
          class="spaceship"
        />
      </div>
    </>
  );
};

export default PageNotFound;
