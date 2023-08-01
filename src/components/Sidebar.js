import React,{useState} from "react";

const Sidebar=()=>
{
    const [isActive, setIsActive] = useState(false);

    const handleSidebarToggle = () => {
      setIsActive(!isActive);
    };
    

    return (
        <>
      
               
      
  <div className={`sidebar ${isActive ? 'active' : ''}`}>
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <span className="logo_name">CodingLab</span>
    </div>
      <ul className="nav-links">
        <li>
          <a href="/dashboard">
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name" >Dashboard</span>
            </a>
        </li>
        <li>
        <a href="/dashboard">
            <i className='bx bx-box' ></i>
            <span className="links_name">Product</span>
         </a>
        </li>
        <li>
        <a href="/dashboard">
            <i className='bx bx-list-ul' ></i>
            <span className="links_name" >Order list</span>
         </a>
        </li>
        <li>
        <a href="/dashboard">
            <i className='bx bx-pie-chart-alt-2' ></i>
            <span className="links_name" >Analytics</span>
       </a>
        </li>
        <li>
        <a href="/dashboard">
            <i className='bx bx-coin-stack' ></i>
            <span className="links_name" >Stock</span>
         </a>
        </li>
        <li>
        <a href="/dashboard">
            <i className='bx bx-book-alt' ></i>
            <span className="links_name" >Total order</span>
        </a>
        </li>
        <li>
        <a href="/dashboard">
            <i className='bx bx-user' ></i>
            <span className="links_name">Team</span>
       </a>
        </li>
        <li>
        <a href="/dashboard">
            <i className='bx bx-message' ></i>
            <span className="links_name">Messages</span>
       </a>
        </li>
        <li>
        <a href="/dashboard">
            <i className='bx bx-heart' ></i>
            <span className="links_name">Favrorites</span>
         </a>
        </li>
        <li>
        <a href="/dashboard">
            <i className='bx bx-cog' ></i>
            <span className="links_name" >Setting</span>
        </a>
        </li>
        <li className="log_out">
        <a href="/dashboard">
            <i className='bx bx-log-out'></i>
            <span className="links_name" >Log out</span>
       </a>
        </li>
      </ul>
  </div> <section className="home-section">
    <nav>
      <div className="sidebar-button">
        <i className={`bx ${isActive ? 'bx-menu-alt-right' : 'bx-menu'} sidebarBtn`} onClick={handleSidebarToggle}></i>
        <span className="dashboard" onClick={handleSidebarToggle}>Dashboard</span>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search..."></input>
        <i className='bx bx-search' ></i>
      </div>
      <div className="profile-details">
        <img src="images/profile.jpg" alt=""></img>
        <span className="admin_name">Prem Shahi</span>
        <i className='bx bx-chevron-down' ></i>
      </div>
    </nav>
   
   
    
    <div className="home-content">
      <div className="overview-boxes">
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Order</div>
            <div className="number">40,876</div>
            <div className="indicator">
              <i className='bx bx-up-arrow-alt'></i>
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className='bx bx-cart-alt cart'></i>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Sales</div>
            <div className="number">38,876</div>
            <div className="indicator">
              <i className='bx bx-up-arrow-alt'></i>
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className='bx bxs-cart-add cart two' ></i>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Profit</div>
            <div className="number">$12,876</div>
            <div className="indicator">
              <i className='bx bx-up-arrow-alt'></i>
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className='bx bx-cart cart three' ></i>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Return</div>
            <div className="number">11,086</div>
            <div className="indicator">
              <i className='bx bx-down-arrow-alt down'></i>
              <span className="text">Down From Today</span>
            </div>
          </div>
          <i className='bx bxs-cart-download cart four' ></i>
        </div>
      </div>

      
      <div className="sales-boxes">
        <div className="recent-sales box">
          <div className="title">Recent Sales</div>
          <div className="sales-details">
<ul className="details">
           
  <li><a href="/dashboard">02 Jan 2021</a></li>
  <li><a href="/dashboard">02 Jan 2021</a></li>
  <li><a href="/dashboard">02 Jan 2021</a></li>
  <li><a href="/dashboard">02 Jan 2021</a></li>
  <li><a href="/dashboard">02 Jan 2021</a></li>
  <li><a href="/dashboard">02 Jan 2021</a></li>
  <li><a href="/dashboard">02 Jan 2021</a></li>
</ul>
<ul className="details">
  <li><a href="/dashboard">Alex Doe</a></li>
  <li><a href="/dashboard">David Mart</a></li>
  <li><a href="/dashboard">Roe Parter</a></li>
  <li><a href="/dashboard">Diana Penty</a></li>
  <li><a href="/dashboard">Martin Paw</a></li>
  <li><a href="/dashboard">Doe Alex</a></li>
  <li><a href="/dashboard">Aiana Lexa</a></li>
  <li><a href="/dashboard">Rexel Mags</a></li>
  <li><a href="/dashboard">Tiana Loths</a></li>
</ul>

<ul className="details">
  <li><a href="/dashboard">Delivered</a></li>
  <li><a href="/dashboard">Pending</a></li>
  <li><a href="/dashboard">Returned</a></li>
  <li><a href="/dashboard">Delivered</a></li>
  <li><a href="/dashboard">Pending</a></li>
  <li><a href="/dashboard">Returned</a></li>
  <li><a href="/dashboard">Delivered</a></li>
  <li><a href="/dashboard">Pending</a></li>
  <li><a href="/dashboard">Delivered</a></li>
</ul>
<ul className="details">
  <li className="topic">Total</li>
  <li><a href="/dashboard">$204.98</a></li>
  <li><a href="/dashboard">$24.55</a></li>
  <li><a href="/dashboard">$25.88</a></li>
  <li><a href="/dashboard">$170.66</a></li>
  <li><a href="/dashboard">$56.56</a></li>
  <li><a href="/dashboard">$44.95</a></li>
  <li><a href="/dashboard">$67.33</a></li>
  <li><a href="/dashboard">$23.53</a></li>
  <li><a href="/dashboard">$46.52</a></li>
</ul>

          </div>
          <div className="button">
            <a href="/dashboard">See All</a>
          </div>
        </div>
        <div className="top-sales box">
          <div className="title">Top Seling Product</div>
          <ul className="top-sales-details">
            <li>
            <a href="/dashboard">
                <img src="images/sunglasses.jpg" alt=" "></img>
              <span className="product">Vuitton Sunglasses</span>
            </a>
            <span className="price">$1107</span>
          </li>
          <li>
          <a href="/dashboard">
             <img src="images/jeans.jpg" alt="" />
              <span className="product">Hourglass Jeans </span>
          </a>
            <span className="price">$1567</span>
          </li>
          <li>
          <a href="/dashboard">
            <img src="images/nike-min.jpg" alt="" />
              <span className="product">Nike Sport Shoe</span>
           </a>
            <span className="price">$1234</span>
          </li>
          <li>
            <a href="/dashboard">
          <img src="images/scarves.jpg" alt="" />
              <span className="product">Hermes Silk Scarves.</span>
           </a>
            <span className="price">$2312</span>
          </li>
          <li>
          <a href="/dashboard">
            <img src="images/blueBag.jpg" alt="" />
              <span className="product">Succi Ladies Bag</span>
       </a>
            <span className="price">$1456</span>
          </li>
          <li>
          <a href="/dashboard">
             <img src="images/addidas.jpg" alt="" />
              <span className="product">Gucci Womens's Bags</span>
           </a>
            <span className="price">$2345</span>
            </li>
          <li>
          <a href="/dashboard">
          <img src="images/bag.jpg" alt="" />
              <span className="product">Addidas Running Shoe</span>
            </a>
            <span className="price">$2345</span>
          </li>
          <li>
          <a href="/dashboard">
          <img src="images/shirt.jpg" alt=" "/>
              <span className="product">Bilack Wear's Shirt</span>
            </a>
            <span className="price">$1245</span>
          </li>
          </ul>
        </div>
      </div>
   </div>
   </section>

 


   
        </>
    )

    }
export default Sidebar;

