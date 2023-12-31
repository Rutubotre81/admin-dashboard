import React from "react";

const Middlepart=()=>{
  
  
    return(
        <>
  <section className="home-section">
              
    <div className="home-content">
      <div className="overview-boxes">

        {/* box1 */}
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
         {/* box2 */}
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
        {/* box3 */}
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
        {/* box4 */}
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
export default Middlepart;