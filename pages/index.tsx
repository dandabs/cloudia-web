import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      {/* BEGIN: ed8c6549bwf9 */}
      <div id="content">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("DOMContentLoaded", function() {
                var con = document.getElementById("content");
                con.style.marginRight = "unset";
                con.style.marginLeft = "unset";
              });
            `,
          }}
        ></script>

        <div className="container" id="stretch" style={{ marginTop: "-50px" }}>
          <div className="row">
            <div className="col-12">
              <div className="card box1" style={{ height: "80vh" }} id="hero">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block">
                      <Image
                        src="/img/body.png"
                        id="presoutline"
                        className="d-none d-lg-block"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="card-body-2" style={{ zIndex: 300 }}>
                        <div>
                          <Image
                            src="/img/CG.png"
                            style={{ width: "50%" }}
                            width={500}
                            height={500}
                          />
                          <h1 style={{ fontSize: "calc(1.475rem + 1.5vw)" }}>
                            <strong>A new government.</strong>
                          </h1>
                          <p style={{ fontSize: "1.2rem" }}>
                            Proudly flying the Icelandic flag since 1.7.2022.
                            <br />
                            Currently under the office of the 6th President.
                          </p>
                          <button
                            type="button"
                            className="btn btn-outline-light"
                            onClick={() =>
                              (window.location.href = "/government/how-government-works")
                            }
                          >
                            How does it work? --&gt;
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="card box2" style={{ height: "40vh" }} id="hero">
                <div className="card-body container" style={{ zIndex: 300 }}>
                  <div>
                    <h1 style={{ fontSize: "calc(1.475rem + 1.5vw)" }}>
                      <strong>Decisions.</strong>
                    </h1>
                    <p style={{ fontSize: "1.2rem" }}>
                      Learn what it's like behind the scenes of the Cloudic Government,
                      <br />
                      and see how they come together to make your experience phenomenal.
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-light"
                      onClick={() =>
                        (window.location.href = "/government/behind-the-scenes")
                      }
                    >
                      Learn more --&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="card box3" style={{ height: "40vh" }} id="hero">
                <div className="card-body container" style={{ zIndex: 300 }}>
                  <div>
                    <h1 style={{ fontSize: "calc(1.475rem + 1.5vw)" }}>
                      <strong>Getting on top.</strong>
                    </h1>
                    <p style={{ fontSize: "1.2rem" }}>
                      View results from previous presidential elections,
                      <br />
                      and figure out how you could be making the decisions next.
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-light"
                      onClick={() => (window.location.href = "/government/elections")}
                    >
                      Run for president --&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card box4" style={{ height: "80vh" }} id="hero" data-aos="fade-up">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <div className="card-body-2" style={{ zIndex: 300 }}>
                        <div>
                          <Image
                            src="/img/DoE.png"
                            style={{ width: "50%" }}
                            width={500}
                            height={500}
                          />
                          <h1 style={{ fontSize: "calc(1.475rem + 1.5vw)" }}>
                            <strong>Changes that matter.</strong>
                          </h1>
                          <p style={{ fontSize: "1.2rem" }}>
                            The 3rd Overseer Cabient of the Nordic Era.
                            <br />
                            Developing the future of CloudCraft since 12.10.2021.
                          </p>
                          <button
                            type="button"
                            className="btn btn-outline-light"
                            onClick={() =>
                              (window.location.href = "/government/who-represents-me")
                            }
                          >
                            Meet the Overseers --&gt;
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block">
                      <Image
                        src="/img/body-14.png"
                        id="execoutline"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="card box5" style={{ height: "40vh" }} id="hero" data-aos="fade-up">
                <div className="card-body container" style={{ zIndex: 300 }}>
                  <div>
                    <h1 style={{ fontSize: "calc(1.475rem + 1.5vw)" }}>
                      <strong>&gt; ssh root@10.0.10.2</strong>
                    </h1>
                    <p style={{ fontSize: "1.2rem" }}>
                      Get an insight to the astonishing development of CloudCraft,
                      <br />
                      and take a peek at what we're working on next.
                    </p>
                    <button type="button" className="btn btn-outline-light">
                      Learn more --&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="card box6" style={{ height: "40vh" }} id="hero" data-aos="fade-up">
                <div className="card-body container" style={{ zIndex: 300 }}>
                  <div>
                    <h1 style={{ fontSize: "calc(1.475rem + 1.5vw)" }}>
                      <strong>Events.</strong>
                    </h1>
                    <p style={{ fontSize: "1.2rem" }}>
                      Learn what it's like to be behind an event on the server,
                      <br />
                      from planning, to building, to the final execution.
                    </p>
                    <button type="button" className="btn btn-outline-light">
                      Learn more --&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              AOS.init();
            `,
          }}
        ></script>

        <style jsx>{`
          #presoutline {
            /*position: absolute;
            top: 23%;
            left:10%;  */
            height: 80vh;
            z-index: 300;
            position: relative;
          }
          #execoutline {
            /*position: absolute;
            top: 23%;
            left:10%;  */
            height: 80vh;
            z-index: 300;
            position: relative;
          }

          .box1 {
            background: url('/img/2022-02-24_23.23.58.png') center center;
            background-size: cover;
          }
          .box2 {
            background: url('/img/2021-12-10_18.46.31.png') center center;
            background-size: cover;
          }
          .box3 {
            background: url('/img/2021-06-05_00.35.28.png') center center;
            background-size: cover;
          }

          .box4 {
            background: url('/img/2022-02-05_12.49.08.png') center center;
            background-size: cover;
          }
          .box5 {
            background: url('/img/2021-05-08_18.44.46.png') center center;
            background-size: cover;
          }
          .box6 {
            background: url('/img/2021-08-07_17.49.28.png') center center;
          }

          #content {
            margin-left: 0px !important;
            margin-right: 0px !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
          }
          #stretch {
            width: 100vw;
            max-width: unset !important;
            left: 0.5%;
            padding-right: calc(.77rem * 2);
            padding-left: calc(.77rem * 2);
          }
          .card-body {
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
          }
          .card-body-2 {
            text-align: center;
            color: white;
            -ms-transform: translateY(-50%);
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
          .card-body-3 {
            text-align: center;
            color: white;
            -ms-transform: translateY(-50%);
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
          #hero {
            width: 100%;
          }
          #hero:before {
            content: "";
            display: block;
            position: absolute; /* could also be absolute */
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-size: cover;
          }
          #hero:after {
            content: "";
            display: block;
            position: absolute; /* could also be absolute */
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            z-index: 10;
            background-color: rgba(0, 0, 0, 0.55);
          }
        `}</style>
      </div>
      {/* END: ed8c6549bwf9 */}
    </Layout>
  );
}
