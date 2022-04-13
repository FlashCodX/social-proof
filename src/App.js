import colton from "./assets/image-colton.jpg";
import anne from "./assets/image-anne.jpg";
import irene from "./assets/image-irene.jpg";
import star from "./assets/icon-star.svg";
import bg_top from "./assets/bg-pattern-top-desktop.svg";
import bg_bottom from "./assets/bg-pattern-bottom-desktop.svg";

import styles from "./styles/App.module.css";

function App() {
  const {
    container,
    bgContainer,
    content,
    topSection,
    info,
    ratings,
    rating,
    testimonials,
    card,
    author,
    attribution,
  } = styles;
  return (
    <div className={container}>
      <div className={bgContainer}>
        <img src={bg_top} alt="bgtop" />
        <img src={bg_bottom} alt="bgbot" />
      </div>

      <main className={content}>
        <div className={topSection}>
          <div className={info}>
            <h1>10,000+ of our users love our products.</h1>
            <p>
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className={ratings}>
            <div className={rating}>
              <div>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>

              <p>Rated 5 Stars in Reviews</p>
            </div>
            <div className={rating}>
              <div>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <p>Rated 5 Stars in Report Guru</p>
            </div>
            <div className={rating}>
              <div>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <p>Rated 5 Stars in BestTech</p>
            </div>
          </div>
        </div>
        <div className={testimonials}>
          <div className={card}>
            <div className={author}>
              <img src={colton} alt="colton" />
              <div>
                <h1>Colton Smith</h1>
                <p>Verified User</p>
              </div>
            </div>
            <p>
              "We needed the same printed design as the one we had ordered a
              week prior. Not only did they find the original order, but we also
              received it in time. Excellent!"
            </p>
          </div>

          <div className={card}>
            <div className={author}>
              <img src={irene} alt="irene" />
              <div>
                <h1>Irene Roberts</h1>
                <p>Verified User</p>
              </div>
            </div>
            <p>
              "Customer service is always excellent and very quick turn around.
              Completely delighted with the simplicity of the purchase and the
              speed of delivery."
            </p>
          </div>

          <div className={card}>
            <div className={author}>
              <img src={anne} alt="anne" />
              <div>
                <h1>Anne Wallace</h1>
                <p>Verified User</p>
              </div>
            </div>
            <p>
              "Put an order with this company and can only praise them for the
              very high standard. Will definitely use them again and recommend
              them to everyone!"
            </p>
          </div>
        </div>
      </main>
      <div className={attribution}>
        Challenge by
        <a
          href="https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        Coded By
        <a
          href="https://www.linkedin.com/in/luispintodev/"
          target="_blank"
          rel="noreferrer"
        >
          Luis Pinto.
        </a>
      </div>
    </div>
  );
}

export default App;
