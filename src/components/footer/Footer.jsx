// // import React, {useState} from "react";
// // import "./footer.css";

// // const Footer = () => {
// //    /* Change Background Header*/
// //    window.addEventListener('scroll', function () {
// //     const header = document.querySelector(".header");
// //     if (this.scrollY >= 800)
// //         header.classList.add("show-scroll");
// //      else
// //         header.classList.remove("show-scroll");

// // })
// //    const [Toggle, ShowMenu] = useState(false)
// //       const [activeNav, setActiveNav] = useState('#home');
// //   return (
// //     <footer className="footer">
// //       <div className="footer__container container">
// //         <h1 className="footer__title">NirmalRaj Joseph</h1>
// //         <ul className="footer__list">
// //           {/* <li>
// //             <a href="about" className="footer__link">
// //               About
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#portfolio" className="footer__link">
// //               Projects
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#testimonials" className="footer__link">
// //               Testimonials
// //             </a>
// //           </li> */}
// //           <div className={
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
// //         </ul>
// //         <div className="footer__social">
// //           <a
// //             href="https://www.facebook.com/"
// //             className="home__social-icon"
// //             target="_blank"
// //             rel="noreferrer"
// //           >
// //             <i className="bx bxl-facebook"></i>
// //           </a>
// //           <a
// //             href="https://www.instagram.com/"
// //             className="home__social-icon"
// //             target="
// //         _blank"
// //             rel="noreferrer"
// //           >
// //             <i className="bx bxl-instagram"></i>
// //           </a>
// //           <a
// //             href="https://twitter.com/"
// //             className="home__social-icon"
// //             target="_blank"
// //             rel="noreferrer"
// //           >
// //             <i className=" bx bxl-twitter"></i>
// //           </a>
// //         </div>
// //         <span className="footer__copy">
// //         &#169; fusioncoder. All rigths reserved

// //         </span>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;
// import React from "react";
// import "./footer.css";

// const Footer = () => {
//   /* Change Background Header */
//   window.addEventListener("scroll", function () {
//     const header = document.querySelector(".header");
//     if (this.scrollY >= 800) header.classList.add("show-scroll");
//     else header.classList.remove("show-scroll");
//   });

//   // const [Toggle, ShowMenu] = useState(false);

//   return (
//     <footer className="footer">
//       <div className="footer__container container">
//         <h1 className="footer__title">NirmalRaj Joseph</h1>

//         {/* Removed nav__menu with links */}

//         <div className="footer__social">
//           <a
//             href="https://www.facebook.com/"
//             className="home__social-icon"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <i className="bx bxl-facebook"></i>
//           </a>
//           <a
//             href="https://www.instagram.com/"
//             className="home__social-icon"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <i className="bx bxl-instagram"></i>
//           </a>
//           <a
//             href="https://twitter.com/"
//             className="home__social-icon"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <i className="bx bxl-twitter"></i>
//           </a>
//         </div>

//         <span className="footer__copy">
//           &#169; fusioncoder. All rights reserved
//         </span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Container,
  Stack,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.900",
        color: "white",
        py: 6,
        mt: 10,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          NirmalRaj Joseph
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          sx={{ my: 2 }}
        >
          <IconButton
            color="inherit"
            component="a"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            color="inherit"
            component="a"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </IconButton>

          <IconButton
            color="inherit"
            component="a"
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </IconButton>
        </Stack>

        <Typography variant="body2" color="grey.400">
          &copy; fusioncoder. All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
