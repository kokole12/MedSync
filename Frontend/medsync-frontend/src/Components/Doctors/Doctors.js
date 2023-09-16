import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import './styles/Doctors.css'

const Doctors = () => {
  return (
    <div id="main-body" class="container-fluid">
	  <header id="header" class="header fixed-top d-flex align-items-center">

    <div class="d-flex align-items-center justify-content-between">
	  <a href="../Landing/Landing.js" class="logo d-flex align-items-center">
        <span class="d-none d-lg-block">MedSync</span>
      </a>
      <i class="bi bi-list toggle-sidebar-btn"></i>
    </div>

    <div class="search-bar">
      <form class="search-form d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
        <button class="search-button" type="submit" title="Search"><i class="fa-solid fa-magnifying-glass"></i> <i class="bi bi-search"></i></button>
      </form>
    </div> {/* End Search Bar */}

    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">

        <li class="nav-item d-block d-lg-none search-icon">
          <a class="nav-link nav-icon search-bar-toggle " href="#">
	   <i class="fa-solid fa-magnifying-glass"></i>
          </a>
        </li> {/* End Search Icon */}

        <li class="nav-item dropdown">

          <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
	  <i class="fa-regular fa-bell"></i>
	  {/* <i class="bi bi-bell"></i> */}
            <span class="badge bg-primary badge-number">4</span>
          </a> {/* End Notification Icon */}

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li class="dropdown-header">
              You have 4 new notifications
              <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li class="notification-item">
              <i class="fa-solid fa-circle-exclamation"></i>
              <div>
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>30 min. ago</p>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider" />
            </li>

            <li class="notification-item">
              <i class="fa-solid fa-circle-xmark"></i>
              <div>
                <h4>Atque rerum nesciunt</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>1 hr. ago</p>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider" />
            </li>

            <li class="notification-item">
              <i class="fa-solid fa-circle-check"></i>
              <div>
                <h4>Sit rerum fuga</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>2 hrs. ago</p>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider" />
            </li>

            <li class="notification-item">
              <i class="fa-solid fa-circle-info"></i>
              <div>
                <h4>Dicta reprehenderit</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>4 hrs. ago</p>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider" />
            </li>
            <li class="dropdown-footer">
              <a href="#">Show all notifications</a>
            </li>

          </ul> {/* End Notification Dropdown Items */}

        </li> {/* End Notification Nav */}

        <li class="nav-item dropdown">

          <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
          <i class="fa-regular fa-envelope"></i>  
            <span class="badge bg-success badge-number">3</span>
          </a> {/* End Messages Icon */}

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
            <li class="dropdown-header">
              You have 3 new messages
              <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
	  {/* Stopped */}

            <li class="message-item">
              <a href="#">
                <img src="assets/img/messages-1.jpg" alt="" class="rounded-circle" />
                <div>
                  <h4>Maria Hudson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>4 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li class="message-item">
              <a href="#">
                <img src="assets/img/messages-2.jpg" alt="" class="rounded-circle" />
                <div>
                  <h4>Anna Nelson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>6 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li class="message-item">
              <a href="#">
                <img src="assets/img/messages-3.jpg" alt="" class="rounded-circle" />
                <div>
                  <h4>David Muldon</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>8 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li class="dropdown-footer">
              <a href="#">Show all messages</a>
            </li>

          </ul> {/* End Messages Dropdown Items */}

        </li> {/* End Messages Nav */}

        <li class="nav-item dropdown pe-3">

          <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src="../Images/medsync16.jpg" alt="Profile" class="rounded-circle" />
            <span class="d-none d-md-block dropdown-toggle ps-2">Name</span> {/* Use inner html */}
          </a> {/* End Profile Iamge Icon */}

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li class="dropdown-header">
              <h6>Name</h6> {/* Use innerText */}
              <span>Position</span> {/* Use innerText */}
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i class="fa-solid fa-person"></i>
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i class="fa-solid fa-gear"></i>
                <span>Account Settings</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
	  	<i class="fa-solid fa-circle-question"></i>
                <span>Need Help?</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="#">
	  	<i class="fa-solid fa-arrow-right-from-bracket"></i>
                <span>Sign Out</span>
              </a>
            </li>

          </ul> {/* End Profile Dropdown Items */}
        </li> {/* End Profile Nav */}

      </ul>
    </nav> {/* End Icons Navigation */}

  </header>


	  <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <a class="nav-link " href="index.html">
          <i class="fa-solid fa-table-cells-large"></i>
          <span>Dashboard</span>
        </a>
      </li>{/* End Dashboard Nav */}

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Components</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="components-alerts.html">
              <i class="fa-solid fa-circle-exclamation"></i><span>Alerts</span>
            </a>
          </li>
          <li>
            <a href="components-accordion.html">
              <i class="fa-solid fa-circle"></i><span>Accordion</span>
            </a>
          </li>
          <li>
            <a href="components-badges.html">
              <i class="fa-solid fa-circle"></i><span>Badges</span>
            </a>
          </li>
          <li>
            <a href="components-breadcrumbs.html">
              <i class="fa-solid fa-circle"></i></i><span>Breadcrumbs</span>
            </a>
          </li>
          <li>
            <a href="components-buttons.html">
              <i class="fa-solid fa-circle"></i><span>Buttons</span>
            </a>
          </li>
          <li>
            <a href="components-cards.html">
              <i class="fa-solid fa-circle"></i><span>Cards</span>
            </a>
          </li>
          <li>
            <a href="components-carousel.html">
              <i class="fa-solid fa-circle"></i><span>Carousel</span>
            </a>
          </li>
          <li>
            <a href="components-list-group.html">
              <i class="fa-solid fa-circle"></i><span>List group</span>
            </a>
          </li>
          <li>
            <a href="components-modal.html">
              <i class="fa-solid fa-circle"></i><span>Modal</span>
            </a>
          </li>
          <li>
            <a href="components-tabs.html">
              <i class="fa-solid fa-circle"></i><span>Tabs</span>
            </a>
          </li>
          <li>
            <a href="components-pagination.html">
              <i class="fa-solid fa-circle"></i><span>Pagination</span>
            </a>
          </li>
          <li>
            <a href="components-progress.html">
              <i class="fa-solid fa-circle"></i><span>Progress</span>
            </a>
          </li>
          <li>
            <a href="components-spinners.html">
              <i class="fa-solid fa-circle"></i><span>Spinners</span>
            </a>
          </li>
          <li>
            <a href="components-tooltips.html">
              <i class="fa-solid fa-circle"></i><span>Tooltips</span>
            </a>
          </li>
        </ul>
      </li>{/* End Components Nav */}

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i class="fa-solid fa-book-medical"></i><span>Forms</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="forms-elements.html">
              <i class="fa-solid fa-circle"></i><span>Form Elements</span>
            </a>
          </li>
          <li>
            <a href="forms-layouts.html">
              <i class="fa-solid fa-circle"></i><span>Form Layouts</span>
            </a>
          </li>
          <li>
            <a href="forms-editors.html">
              <i class="fa-solid fa-circle"></i><span>Form Editors</span>
            </a>
          </li>
          <li>
            <a href="forms-validation.html">
              <i class="fa-solid fa-circle"></i><span>Form Validation</span>
            </a>
          </li>
        </ul>
      </li>{/* End Forms Nav */}

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <i class="fa-solid fa-table-list"></i><span>Tables</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="tables-general.html">
              <i class="fa-solid fa-circle"></i><span>General Tables</span>
            </a>
          </li>
          <li>
            <a href="tables-data.html">
              <i class="fa-solid fa-circle"></i><span>Data Tables</span>
            </a>
          </li>
        </ul>
      </li>{/* End Tables Nav */}

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
          <i class="fa-solid fa-chart-column"></i><span>Charts</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="charts-chartjs.html">
              <i class="fa-solid fa-circle"></i><span>Chart.js</span>
            </a>
          </li>
          <li>
            <a href="charts-apexcharts.html">
              <i class="fa-solid fa-circle"></i><span>ApexCharts</span>
            </a>
          </li>
          <li>
            <a href="charts-echarts.html">
              <i class="fa-solid fa-circle"></i><span>ECharts</span>
            </a>
          </li>
        </ul>
      </li>{/* End Charts Nav */}

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
          <i class="fa-solid fa-gem"></i><span>Icons</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="icons-bootstrap.html">
              <i class="fa-solid fa-circle"></i><span>Bootstrap Icons</span>
            </a>
          </li>
          <li>
            <a href="icons-remix.html">
              <i class="fa-solid fa-circle"></i><span>Remix Icons</span>
            </a>
          </li>
          <li>
            <a href="icons-boxicons.html">
              <i class="fa-solid fa-circle"></i><span>Boxicons</span>
            </a>
          </li>
        </ul>
      </li>{/* End Icons Nav */}

      <li class="nav-heading">Pages</li>

      <li class="nav-item">
        <a class="nav-link collapsed" href="users-profile.html">
          <i class="fa-solid fa-person"></i>
          <span>Profile</span>
        </a>
      </li>{/* End Profile Page Nav */}

      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-faq.html">
          <i class="fa-solid fa-circle-question"></i><span>F.A.Q</span>
        </a>
      </li>{/* End F.A.Q Page Nav */}

      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-contact.html">
          <i class="fa-solid fa-envelope"></i><span>Contact</span>
        </a>
      </li>{/* End Contact Page Nav */}

      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-register.html">
          <i class="fa-solid fa-clipboard-list"></i>
          <span>Register</span>
        </a>
      </li>{/* End Register Page Nav */}


      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-error-404.html">
          <i class="fa-solid fa-circle-minus"></i>
          <span>Error 404</span>
        </a>
      </li><!-- End Error 404 Page Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-blank.html">
          <i class="bi bi-file-earmark"></i>
          <span>Blank</span>
        </a>
      </li><!-- End Blank Page Nav -->

    </ul>

  </aside>

	  <div class="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="../Landing/Landing.js">Home</a></li>i
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>


    </div>
  )
}

export default Doctors
