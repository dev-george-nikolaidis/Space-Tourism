import styles from "./designSystem.module.scss";

const DesignSystem: React.FC = () => {
  return (
    <>
      <div className="container flow">
        <h1 className="uppercase">Design system</h1>

        <section className="flow" id="colors">
          <h2 className="numbered-title">
            <span>01</span> colors
          </h2>
          <div className="flex">
            <div className="flow">
              <div className="bg-dark text-white ff-serif fs-500">#0B0D17</div>
              <p>
                <span className="text-accent">RGB</span> 11, 13, 23
              </p>
              <p>
                <span className="text-accent">HSL</span> 230°, 35%, 7%
              </p>
            </div>
            <div className="flow">
              <div className="bg-accent text-dark ff-serif fs-500">#D0D6F9</div>
              <p>
                <span className="text-accent">RGB</span> 208, 214, 249
              </p>
              <p>
                <span className="text-accent">HSL</span> 231°, 77%, 90%
              </p>
            </div>
            <div className="flow">
              <div className="bg-white text-dark ff-serif fs-500">#FFFFFF</div>
              <p>
                <span className="text-accent">RGB</span> 255, 255, 255
              </p>
              <p>
                <span className="text-accent">HSL</span> 0°, 0%, 100%
              </p>
            </div>
          </div>
        </section>

        <section className="flow" id="typography">
          <h2 className="numbered-title">
            <span>02 </span>Typography
          </h2>
          <div className="flex">
            <div className="flow">
              <div>
                <p className="text-accent">Heading 1 - Bellefair Regular - 150px</p>
                <p className="fs-900 ff-serif uppercase">Earth</p>
              </div>
              <div>
                <p className="text-accent">Heading 2 - Bellefair Regular - 100px</p>
                <p className="fs-800 ff-serif uppercase">Venus</p>
              </div>
              <div>
                <p className="text-accent">Heading 3 - Bellefair Regular - 56px</p>
                <p className="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
              </div>
              <div>
                <p className="text-accent">Heading 4 - Bellefair Regular - 32px</p>
                <p className="fs-600 ff-serif uppercase">Uranus, Neptune, & Pluto</p>
              </div>
              <div>
                <p className="text-accent">Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
                <p className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
                  So, you want to travel to space
                </p>
              </div>
            </div>

            <div className="flow">
              <div>
                <p className="text-accent">Subheading 1 - Bellefair Regular - 28px</p>
                <p className="fs-500 ff-serif uppercase">384,400 km</p>
              </div>
              <div>
                <p className="text-accent">Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">Avg. Distance</p>
              </div>
              <div>
                <p className="text-accent">Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
                <p className="fs-300 uppercase ff-sans-cond letter-spacing-2">Europa</p>
              </div>
              <div>
                <p className="text-accent">Body Text</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet
                  nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
                  sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                  mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
                  mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                  blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
                  aliquet vel, dapibus id, mattis vel, nisi.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flow" id="interactive-elements"></section>
        <h2 className="numbered-title">
          <span>03</span> Interactive elements
        </h2>

        <div>
          <nav>
            <ul className="primary-navigation underline-indicators flex">
              <li>
                <a className="uppercase text-white letter-spacing-2" href="#">
                  <span>01</span>Active
                </a>
              </li>
              <li>
                <a className="uppercase text-white letter-spacing-2" href="#">
                  <span>02</span>Hovered
                </a>
              </li>
              <li>
                <a className="uppercase text-white letter-spacing-2" href="#">
                  <span>03</span>Idle
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex">
          <div>
            <a href="#" className="large-button uppercase ff-serif fs-600 text-dark bg-white">
              Explore
            </a>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default DesignSystem;