// // import React, { useState } from 'react';
// // import './Navbar.css';
// // import underline from '../../assets/nav_underline.svg';
// // import AnchorLink from 'react-anchor-link-smooth-scroll';
// // import menu_open from '../../assets/menu_open.svg'
// // import menu_close from '../../assets/menu_close.svg'

// // const Navbar = () => {
 
// //   const [nav, setNav] = useState("about");


// //   return (
// //     <div className="navbar">
     
// //       <img src={menu_open} alt="" className='nav-mob-open' />
// //         <ul className={nav-menu }>
// //           <img src= {menu_close} alt="" className='nav-mob-close' />
// // <li><AnchorLink className = 'anchor-link'  href='#home'  ><p onClick={() => setNav("home")}>Home</p></AnchorLink>{nav === "home" ? <img src={underline} alt="" /> : null}</li>
// // <li><AnchorLink className = 'anchor-link' offset={50} href='#about'><p onClick={() => setNav("about")}>About Me</p></AnchorLink>{nav === "about" ? <img src={underline} alt="" /> : null}</li>
// // <li><AnchorLink className = 'anchor-link' offset={50} href='#services'><p onClick={() => setNav("services")}>Services</p></AnchorLink>{nav === "services" ? <img src={underline} alt="" /> : null}</li>
// // <li><AnchorLink className = 'anchor-link' offset={50} href='#work'><p onClick={() => setNav("work")}>Portfolio</p></AnchorLink>{nav === "work" ? <img src={underline} alt="" /> : null}</li>
// // <li><AnchorLink className = 'anchor-link' offset={50} href='#contact' ><p onClick={() => setNav("contact")}>Contact</p></AnchorLink>{nav === "contact" ? <img src={underline} alt="" /> : null}</li>
// // <div className="nav-connect"><AnchorLink className = 'anchor-link' offset={50} href='#contact' >Connect with me</AnchorLink></div>
// // </ul>
// //   </div>
// //   );
// // };

// // export default Navbar;




// import React, { useRef, useState } from 'react';
// import './Navbar.css';
// import underline from '../../assets/nav_underline.svg';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import menu_open from '../../assets/menu_open.svg';
// import menu_close from '../../assets/menu_close.svg';

// const Navbar = () => {
//   const [nav, setNav] = useState("about");
//   const menuRef = useRef()

//   const openMenu = () =>{
//     menuRef.current.style.right ="0";
//   }
//   const closeMenu = () =>{
//     menuRef.current.style.right ="-350px";
//   }

//   return (
//     <div className="navbar">
//     <h1>AC-CREATION</h1>
//     <img src={menu_open} onClick={openMenu} alt="Open menu" className="nav-mob-open" />
//     <ul ref={menuRef} className="nav-menu">
//     <img src={menu_close} onClick={closeMenu} alt="Close menu" className="nav-mob-close" />

//   <li><AnchorLink className="anchor-link" href="#home"><p onClick={() => setNav("home")}>Home</p></AnchorLink>
//   {nav === "home" ? <img src={underline} alt="underline" /> : null}</li>
//         <li>
//           <AnchorLink className="anchor-link" offset={50} href="#about">
//             <p onClick={() => setNav("about")}>About Me</p>
//           </AnchorLink>
//           {nav === "about" ? <img src={underline} alt="underline" /> : null}
//         </li>
//         <li>
//           <AnchorLink className="anchor-link" offset={50} href="#services">
//             <p onClick={() => setNav("services")}>Services</p>
//           </AnchorLink>
//           {nav === "services" ? <img src={underline} alt="underline" /> : null}
//         </li>
//         <li>
//           <AnchorLink className="anchor-link" offset={50} href="#work">
//             <p onClick={() => setNav("work")}>Portfolio</p>
//           </AnchorLink>
//           {nav === "work" ? <img src={underline} alt="underline" /> : null}
//         </li>
//         <li>
//           <AnchorLink className="anchor-link" offset={50} href="#contact">
//             <p onClick={() => setNav("contact")}>Contact</p>
//           </AnchorLink>
//           {nav === "contact" ? <img src={underline} alt="underline" /> : null}
//         </li>
//         <div className="nav-connect">
//           <AnchorLink className="anchor-link" offset={50} href="#contact">
//             Connect with me
//           </AnchorLink>
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;



import React, { useRef, useState } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [nav, setNav] = useState("about");
  const menuRef = useRef();

  const openMenu = () => {
    console.log("Menu opened");
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    console.log("Menu closed");
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <h1 className='ac-navbar'> AC-CREATION</h1>
      <img src={menu_open} onClick={openMenu} alt="Open menu" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close menu" className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setNav("home")}>Home</p>
          </AnchorLink>
          {nav === "home" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setNav("about")}>About Me</p>
          </AnchorLink>
          {nav === "about" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setNav("services")}>Services</p>
          </AnchorLink>
          {nav === "services" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setNav("work")}>Portfolio</p>
          </AnchorLink>
          {nav === "work" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setNav("contact")}>Contact</p>
          </AnchorLink>
          {nav === "contact" ? <img src={underline} alt="underline" /> : null}
        </li>
        <div className="nav-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;







