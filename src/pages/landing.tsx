/* first section (logo,more, which when clicked it as links to all other sections , a link to the registration and log in pages, an image for the backgraund,text above the backgraund)
   second section (form that collects pick, up location,pickup date,dropoff location and date,rent by brands secton that has cards with the car brands logo, the same with rent by body section which has different car dody types on cards)
   section three (collection of cars available  has cards with car image name of the carprice of the car,specs of the car rent now button, then after the cards we have a see all cars button)
   section four (image of a car 3 cards with  with  texts on them)
   section five (our services and benefits,    wide range of choices, good service, fully online ) 
   section six (customer sentiments card with user profil and the users comments) */

//import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      {/* First Section */}
      <section id="first-section">
        <header>
          <div>Logo</div>
          <nav>
            <ul>
              <li><a href="#first-section">More</a></li>
              <li><a href="#second-section">Rent</a></li>
              <li><a href="#third-section">Collection</a></li>
              <li><a href="#fourth-section">Features</a></li>
              <li><a href="#fifth-section">Services</a></li>
              <li><a href="#sixth-section">Sentiments</a></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">login</Link></li>
            </ul>
          </nav>
          <img src="dummy-image.jpg" alt="Background" />
          <h1>Welcome to Our Car Rental Service</h1>
        </header>
      </section>

      {/* Second Section */}
      <section id="second-section">
        <form>
          <input type="text" placeholder="Pick-up Location" />
          <input type="date" placeholder="Pick-up Date" />
          <input type="text" placeholder="Drop-off Location" />
          <input type="date" placeholder="Drop-off Date" />
        </form>
        <div>
          <h2>Rent by Brand</h2>
          <div className="brand-cards">
            <div>Brand 1</div>
            <div>Brand 2</div>
            <div>Brand 3</div>
          </div>
        </div>
        <div>
          <h2>Rent by Body Type</h2>
          <div className="body-cards">
            <div>Body Type 1</div>
            <div>Body Type 2</div>
            <div>Body Type 3</div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section id="third-section">
        <h2>Available Cars</h2>
        <div className="car-cards">
          <div>
            <img src="dummy-image.jpg" alt="Car" />
            <h3>Car Name</h3>
            <p>Price: $XXX</p>
            <p>Specs: Lorem ipsum</p>
            <button>Rent Now</button>
          </div>
          <div>
            <img src="dummy-image.jpg" alt="Car" />
            <h3>Car Name</h3>
            <p>Price: $XXX</p>
            <p>Specs: Lorem ipsum</p>
            <button>Rent Now</button>
          </div>
          <div>
            <img src="dummy-image.jpg" alt="Car" />
            <h3>Car Name</h3>
            <p>Price: $XXX</p>
            <p>Specs: Lorem ipsum</p>
            <button>Rent Now</button>
          </div>
        </div>
        <button>See All Cars</button>
      </section>

      {/* Fourth Section */}
      <section id="fourth-section">
        <img src="dummy-image.jpg" alt="Car" />
        <div className="info-cards">
          <div>Info 1</div>
          <div>Info 2</div>
          <div>Info 3</div>
        </div>
      </section>

      {/* Fifth Section */}
      <section id="fifth-section">
        <h2>Our Services and Benefits</h2>
        <ul>
          <li>Wide range of choices</li>
          <li>Good service</li>
          <li>Fully online</li>
        </ul>
      </section>

      {/* Sixth Section */}
      <section id="sixth-section">
        <h2>Customer Sentiments</h2>
        <div className="sentiment-cards">
          <div>
            <img src="dummy-image.jpg" alt="User Profile" />
            <p>User Comment 1</p>
          </div>
          <div>
            <img src="dummy-image.jpg" alt="User Profile" />
            <p>User Comment 2</p>
          </div>
          <div>
            <img src="dummy-image.jpg" alt="User Profile" />
            <p>User Comment 3</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
