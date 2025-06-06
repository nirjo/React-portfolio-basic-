// // import React, {useState} from "react";
// // import "./header.css";

// // const Header = () => { 
// //     /* Change Background Header*/
// //     window.addEventListener('scroll', function () {
// //         const header = document.querySelector(".header");
// //         if (this.scrollY >= 800) 
// //             header.classList.add("show-scroll");
// //          else 
// //             header.classList.remove("show-scroll");
        
// //     })
// //     /* Toggle Menu*/
// //     const [Toggle, ShowMenu] = useState(false)
// //     const [activeNav, setActiveNav] = useState('#home');

// //     return (
// //         <header className="header">
// //             <nav className="nav container">
// //                 <a href="index.html" className="nav__logo">
// //                     NirmalRaj
// //                 </a>

// //                 <div className={
// //                     Toggle ? "nav__menu show-menu" : "nav__menu"
// //                 }>
// //                     <ul li className="nav__list grid">
// //                         <li li className="nav__item">
// //                             <a href="#Home"
// //                             onClick={()=>setActiveNav("#home")}
// //                              className={activeNav === "#home" ? "nav__link active-link" : "nav_link"}
// //                              >
// //                                 <i className="uil uil-estate nav__icon"></i>
// //                                 Home

// //                             </a>
// //                         </li>
// //                         <li li className="nav__item">
// //                             <a href="#about"   onClick={()=>setActiveNav("#about")}
// //                              className={activeNav === "#about" ? "nav__link active-link" : "nav_link"}
// //                              >


// //                                 <i className="uil uil-user nav__icon"></i>
// //                                 About
// //                             </a>
// //                         </li>
// //                         <li li className="nav__item">
// //                             <a href="#skills" onClick={()=>setActiveNav("#skills")}
// //                              className={activeNav === "#skills" ? "nav__link active-link" : "nav_link"}
// //                              >

// //                                 <i className="uil uil-fil-alt nav__icon"></i>
// //                                 Skills

// //                             </a>
// //                         </li>
// //                         <li li className="nav__item">
// //                             <a href="#services"onClick={()=>setActiveNav("#services")}
// //                              className={activeNav === "#services" ? "nav__link active-link" : "nav_link"}
// //                              >

// //                                 <i className="uil uil-briefcase nav__icon"></i>
// //                                 Services

// //                             </a>
// //                         </li>
// //                         <li li className="nav__item">
// //                             <a href="#portfolio"onClick={()=>setActiveNav("#portfolio")}
// //                              className={activeNav === "#portfolio" ? "nav__link active-link" : "nav_link"}
// //                              >

// //                                 <i className="uil uil-scenery nav__icon"></i>
// //                                 Portfolio

// //                             </a>
// //                         </li>
// //                         <li li className="nav__item">
// //                             <a href="#contact"onClick={()=>setActiveNav("#contact")}
// //                              className={activeNav === "#contact" ? "nav__link active-link" : "nav_link"}
// //                              >

// //                                 <i className="uil uil-message nav__icon"></i>
// //                                 Contact

// //                             </a>
// //                         </li>


// //                     </ul>

// //                     <i class="uil uil-times nav__close"
// //                         onClick={
// //                             () => {
// //                                 ShowMenu(!Toggle)
// //                             }
// //                     }></i>
// //             </div>
// //             <div className="nav__toggle"
// //                 onClick={
// //                     () => ShowMenu(!Toggle)
// //             }>
// //                 <i class="uil uil-apps"></i>
// //             </div>
// //         </nav>
// //     </header>
// //     );
// // };

// // export default Header;

// import React, { useState, useEffect, useRef } from "react";

// const Header = () => {
//   const [toggle, setToggle] = useState(false);
//   const [activeNav, setActiveNav] = useState("#home");
//   const headerRef = useRef(null);

//   // Scroll Effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= 800) {
//         headerRef.current.classList.add("bg-white", "shadow-lg", "transition");
//       } else {
//         headerRef.current.classList.remove("bg-white", "shadow-lg", "transition");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { href: "#home", icon: "uil-estate", label: "Home" },
//     { href: "#about", icon: "uil-user", label: "About" },
//     { href: "#skills", icon: "uil-file-alt", label: "Skills" },
//     { href: "#services", icon: "uil-briefcase", label: "Services" },
//     { href: "#portfolio", icon: "uil-scenery", label: "Portfolio" },
//     { href: "#contact", icon: "uil-message", label: "Contact" },
//   ];

//   return (
//     <header
//       ref={headerRef}
//       className="fixed top-0 left-0 w-full z-50 bg-transparent"
//     >
//       <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
//         <a href="index.html" className="text-2xl font-bold text-indigo-600">
//           NirmalRaj
//         </a>

//         {/* Menu Icon (Mobile) */}
//         <div className="lg:hidden text-2xl cursor-pointer" onClick={() => setToggle(!toggle)}>
//           <i className="uil uil-apps"></i>
//         </div>

//         {/* Nav Menu */}
//         <div
//           className={`${
//             toggle ? "left-0" : "-left-full"
//           } fixed top-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg p-6 transition-all lg:static lg:flex lg:items-center lg:bg-transparent lg:p-0 lg:shadow-none lg:w-auto`}
//         >
//           {/* Close icon */}
//           <div className="flex justify-end mb-6 lg:hidden">
//             <i
//               className="uil uil-times text-2xl cursor-pointer"
//               onClick={() => setToggle(false)}
//             ></i>
//           </div>

//           <ul className="flex flex-col gap-4 lg:flex-row lg:gap-8">
//             {navItems.map(({ href, icon, label }) => (
//               <li key={href}>
//                 <a
//                   href={href}
//                   onClick={() => {
//                     setActiveNav(href);
//                     setToggle(false);
//                   }}
//                   className={`flex items-center gap-2 text-base ${
//                     activeNav === href
//                       ? "text-indigo-600 font-semibold"
//                       : "text-gray-700 hover:text-indigo-500"
//                   }`}
//                 >
//                   <i className={`uil ${icon}`}></i> {label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//     </header>
//   ); 
// };

// export default Header;
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import FolderIcon from "@mui/icons-material/Folder";
import MessageIcon from "@mui/icons-material/Message";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const navLinks = [
  { label: "Home", href: "#home", icon: <HomeIcon /> },
  { label: "About", href: "#about", icon: <PersonIcon /> },
  { label: "Skills", href: "#skills", icon: <InsertDriveFileIcon /> },
  { label: "Services", href: "#services", icon: <WorkIcon /> },
  { label: "Portfolio", href: "#portfolio", icon: <FolderIcon /> },
  { label: "Contact", href: "#contact", icon: <MessageIcon /> },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [elevate, setElevate] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Scroll elevation
  useEffect(() => {
    const handleScroll = () => {
      setElevate(window.scrollY >= 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <Box display="flex" justifyContent="flex-end" p={2}>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navLinks.map(({ label, href, icon }) => (
          <ListItemButton
            key={href}
            onClick={() => setActiveNav(href)}
            component="a"
            href={href}
            selected={activeNav === href}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
     <AppBar
  position="fixed"
  elevation={elevate ? 4 : 0}
  sx={{
    backgroundColor: elevate ? "background.paper" : "transparent",
    color: elevate ? "text.primary" : "common.white",
    boxShadow: elevate ? 3 : "none",
    transition: "all 0.3s ease-in-out",
  }}
>
  <Toolbar sx={{ justifyContent: "space-between" }}>
    <Typography
      variant="h6"
      component="a"
      href="#"
      sx={{
        textDecoration: "none",
           color: "#FF9800", // Changed color here

        fontWeight: "bold",
      }}
    >
      NirmalRaj
    </Typography>

    {/* Desktop Navigation */}
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
      {navLinks.map(({ label, href, icon }) => (
      
        <Typography
  key={href}
  component="a"
  href={href}
  onClick={() => setActiveNav(href)}
  sx={{
    color: activeNav === href ? "primary.main" : "text.secondary",
    textDecoration: "none",
    fontWeight: activeNav === href ? "bold" : "normal",
    display: "flex",
    alignItems: "center",
    gap: 1,
    transition: "color 0.2s",
    "&:hover": {
      color: "primary.main",
    },
  }}
>
  {icon}
  {label}
</Typography>

      ))}
    </Box>

    {/* Mobile Toggle */}
    <IconButton
      edge="end"
      color="inherit"
      aria-label="menu"
      onClick={handleDrawerToggle}
      sx={{ display: { md: "none" } }}
    >
      <MenuIcon />
    </IconButton>
  </Toolbar>
</AppBar>
      {/* Drawer (Mobile Nav) */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { md: "none" } }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
