import React,{useState} from "react";

const Header=()=>{
    const [isActive, setIsActive] = useState(false);

    const handleSidebarToggle = () => {
      setIsActive(!isActive);
    };

    return(
        <>
        
   <section className="home-section">
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
    </section>

      


          
        </>
    )
}
export default Header;