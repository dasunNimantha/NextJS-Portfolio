import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/> 
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
          <div class="lm-animated-bg"></div>
            
          <div class="lmpixels-scroll-to-top"><i class="lnr lnr-chevron-up"></i></div>
          <div class="page-scroll">
              <div id="page_container" class="page-container bg-move-effect" data-animation="transition-flip-in-right">
                <header id="site_header" class="header">
                    <div class="header-content clearfix">
                          
                  
                      <div class="text-logo">
                        <a href="index.html">
                          <div class="logo-symbol">D</div>
                          <div class="logo-text">Dasun <span>Nimantha</span></div>
                        </a>
                      </div>
                  
                      <Navbar/>
                      <a class="menu-toggle mobile-visible">
                        <i class="fa fa-bars"></i>
                      </a>
                    
                    </div>
                </header>
                <Footer/>
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
        
      </main>
    
    </div>
  )
}
