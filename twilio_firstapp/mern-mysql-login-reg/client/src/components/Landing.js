import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col mt-4">
            <div
              className="carousel slide "
              id="principal-carousel"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-targer="#principal-carousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-targer="#principal-carousel" data-slide-to="1"></li>
                <li data-targer="#principal-carousel" data-slide-to="2"></li>
              </ol>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="img/job.jpg" alt="" />
                </div>
              </div>
              <a
                href="#principal-carousel"
                class="carousel-control-prev"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Anterior</span>
              </a>
              <a
                href="#principal-carousel"
                class="carousel-control-next"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Siguiente</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
