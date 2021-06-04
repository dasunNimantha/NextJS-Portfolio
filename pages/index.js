import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div>
      <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/> 
          <title>Portfolio | Dasun | Nimantha</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          <meta name="description" content="Dasun Nimantha - Resume / Portfolio" />
          <meta name="keywords" content="dasun, nimantha, perera, backend, portfolio, developer, cloud, cyber" />
          <meta name="author" content="dasun nimantha" />
          <link rel="shortcut icon" href="favicon.ico"/>
          <link rel="stylesheet" href="css/normalize.css" type="text/css"/>
          <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css"/>
          <link rel="stylesheet" href="css/owl.carousel.css" type="text/css"/>
          <link rel="stylesheet" href="css/magnific-popup.css" type="text/css"/>
          <link rel="stylesheet" href="css/main.css" type="text/css"/>

          <script src="js/modernizr.custom.js"/>
          <script async src='https://lmpixels.com/cdn-cgi/bm/cv/669835187/api.js'/>
      </Head>

      <main className='page'>
          <div className="lm-animated-bg"></div>  
          <div className="lmpixels-scroll-to-top"><i className="lnr lnr-chevron-up"></i></div>
          <div className="page-scroll">
              <div id="page_container" className="page-container bg-move-effect" data-animation="transition-flip-in-right">
                <header id="site_header" className="header">
                    <div className="header-content clearfix">
                      <div className="text-logo">
                        <a href="index.html">
                          <div className="logo-symbol">D</div>
                          <div className="logo-text">Dasun <span>Nimantha</span></div>
                        </a>
                      </div>
                  
                      <Navbar/>
                      <a className="menu-toggle mobile-visible">
                        <i className="fa fa-bars"></i>
                      </a>
                    
                    </div>
                </header>

                <main>
                  <div id="main" className="site-main">
                      <div id="main-content" className="single-page-content">
                          <div id="primary" className="content-area">    
                          <div id="content" className="page-content site-content single-post" role="main">
                              <div className="row">
                              <div className=" col-xs-12 col-sm-12">
                                  <div className="home-content">
                                  <div className="row flex-v-align">
                                      <div className="col-sm-12 col-md-5 col-lg-5">
                                      <div className="home-photo">
                                          <div className="hp-inner" style={{backgroundImage: 'url(img/main_photo.jpg)'}}>
                                          </div>
                                      </div>
                                      </div>
                                      <div className="col-sm-12 col-md-7 col-lg-7">
                                      <div className="home-text hp-left">
                                          <div className="owl-carousel text-rotation">                                    
                                          <div className="item">
                                              <h4>Frontend-developer</h4>
                                          </div>
                                          <div className="item">
                                              <h4>Web Designer</h4>
                                          </div>
                                          </div>
                                          <h1>Hi there...</h1>
                                          <p>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>
                                          <div className="home-buttons">
                                          <a href="#" target="_blank" className="btn btn-primary">Download CV</a>
                                          <a href="#" target="_self" className="btn btn-secondary">Contact</a>
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                              </div>
                              <div>
                                
                              {/* <div className="row">
                                <div className="col-xs-12 col-sm-12">
                                  <div className="p-50" />
                                  <div className="block-title">
                                    <h2>What I Do</h2>
                                  </div>
                                </div>
                              </div> */}

                              {/* <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                  <div className="info-list-w-icon">
                                    <div className="info-block-w-icon">
                                      <div className="ci-icon">
                                        <i className="linecons linecons-pen" />
                                      </div>
                                      <div className="ci-text">
                                        <h4>Copywrite</h4>
                                        <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
                                      </div>
                                    </div>
                                    <div className="info-block-w-icon">
                                      <div className="ci-icon">
                                        <i className="linecons linecons-display" />
                                      </div>
                                      <div className="ci-text">
                                        <h4>Web Design</h4>
                                        <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                  <div className="info-list-w-icon">
                                    <div className="info-block-w-icon">
                                      <div className="ci-icon">
                                        <i className="linecons linecons-shop" />
                                      </div>
                                      <div className="ci-text">
                                        <h4>Ecommerce</h4>
                                        <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
                                      </div>
                                    </div>
                                    <div className="info-block-w-icon">
                                      <div className="ci-icon">
                                        <i className="linecons linecons-megaphone" />
                                      </div>
                                      <div className="ci-text">
                                        <h4>Marketing</h4>
                                        <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}

                            </div>

                          </div>
                          </div> 
                      </div>
                  </div>
                <Footer/>
                </main>
               
              </div>
          </div>
          <script src="js/jquery-2.1.3.min.js"></script>
          <script src="js/imagesloaded.pkgd.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script src='js/jquery.shuffle.min.js'></script>
          <script src='js/masonry.pkgd.min.js'></script>
          <script src='js/owl.carousel.min.js'></script>
          <script src="js/jquery.magnific-popup.min.js"></script>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCrDf32aQTCVENBhFJbMBKOUTiUAABtC2o"></script>
          <script src="js/jquery.googlemap.js"></script>
          <script src="js/validator.js"></script>
          <script src="js/main.js"></script>

          <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/20178704.js"></script>

        
      </main>
    
    </div>
  )
}
