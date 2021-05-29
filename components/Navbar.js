const Navbar = ()=>{
    return(
        <div>
            <div class="site-nav mobile-menu-hide">
              <ul class="leven-classic-menu site-main-menu">
                <li class="menu-item current-menu-item">
                  <a href="index.html">About Me</a>
                 
                </li>

                <li class="menu-item">
                  <a href="resume.html">Resume</a>
                </li>

                <li class="menu-item menu-item-has-children">
                  <a href="portfolio.html">Portfolio</a>
                  <ul class="sub-menu">
                    <li class="menu-item">
                      <a href="portfolio-2-columns.html">Portfolio 2 Columns</a>
                    </li>
                    <li class="menu-item">
                      <a href="portfolio.html">Portfolio 3 Columns</a>
                    </li>
                    <li class="menu-item">
                      <a href="portfolio-4-columns.html">Portfolio 4 Columns</a>
                    </li>
                    <li class="menu-item">
                      <a href="portfolio-5-columns.html">Portfolio 5 Columns</a>
                    </li>
                  </ul>
                </li>
                
                <li class="menu-item menu-item-has-children">
                  <a href="blog.html">Blog</a>
                  <ul class="sub-menu">
                    <li class="menu-item">
                      <a href="blog.html">Blog 2 Columns</a>
                    </li>
                    <li class="menu-item">
                      <a href="blog-3-columns.html">Blog 3 Columns</a>
                    </li>
                  </ul>
                </li>

                <li class="menu-item">
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
        </div>
    );
}
export default Navbar
  