// import React, { useEffect, useState } from 'react';

// import { Link, useLocation } from 'react-router-dom';
// import { MdClose } from 'react-icons/md';
// import { HiOutlineMenuAlt1 } from 'react-icons/hi';
// import PropTypes from 'prop-types';

// import AlatLogo from '../../images/logo.png';

// import NavLink from './NavLink';
// import { toggleScroll } from '../../utilities/general';

// function Header({ solidBg }) {
//     const location = useLocation();

//     const [scrolled, setScrolled] = useState(false);
//     const [showMenu, setShowMenu] = useState(false);

//     useEffect(() => {
//         const func = () => setScrolled(window.pageYOffset > 30);

//         if (typeof window !== 'undefined') {
//             window.addEventListener('scroll', func);
//         }
//         func();

//         return (() => {
//             window.removeEventListener('scroll', func);
//         });
//     }, []);

//     useEffect(() => {
//         toggleScroll();

//         return () => setTimeout(() => {
//             toggleScroll();
//         }, 0);
//     }, [showMenu]);

//     return (
//         <>
//             <header className={`w-full h-[106px] top-0 z-40 fixed bg-opacity-80 backdrop-blur-lg ${scrolled || solidBg ? 'bg-white' : ''}`}>
//                 <div className="w-full content">
//                     <div className=" flex items-center justify-between py-8">
//                         <div className="logo">
//                             <Link to="/">
//                                 <img src={AlatLogo} className="w-14 h-auto" alt="Alat Logo" />
//                             </Link>
//                         </div>
//                         <div className="nav-links hidden lg:block">
//                             <ul className="flex items-center space-x-8">
//                                 <NavLink link="/resources" className="font-semibold">Resources</NavLink>
//                                 <NavLink link="/events" className="font-semibold">Events</NavLink>
//                             </ul>
//                         </div>

//                         <div className="lg:hidden">
//                             <HiOutlineMenuAlt1 className="w-8 h-auto cursor-pointer" onClick={() => setShowMenu(true)} />
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             <div
//                 role="presentation"
//                 onClick={(e) => (e?.target?.classList?.contains('side-menu') && setShowMenu(false))}
//                 className={`header-side-menu ${showMenu ? 'show overlay' : ''} fixed z-40 top-0 left-0 w-full h-screen bg-black bg-opacity-40`}
//             >
//                 <div className="bg-white w-full absolute right-0 top-0 h-full overflow-y-auto">
//                     <div className="w-full relative">
//                         <div className="flex justify-between px-5 py-8">
//                             <div className="logo">
//                                 <Link to="/">
//                                     <img src={AlatLogo} className="w-14 h-auto" alt="Alat Logo" />
//                                 </Link>
//                             </div>
//                             <button
//                                 type="button"
//                                 onClick={() => setShowMenu(false)}
//                                 className="font-bold flex items-center hover:bg-opacity-20 hover:bg-primary"
//                             >
//                                 <MdClose className="w-10 h-auto" />
//                             </button>
//                         </div>
//                         <div className="w-full px-5 py-8">
//                             <ul className="w-full text-lg gap-5">
//                                 <Link to="/resources" onClick={() => setShowMenu(false)}>
//                                     <li className={`${location.pathname === '/' ? 'bg-primary bg-opacity-20' : ''} header-side-link`}>
//                                         Resources
//                                     </li>
//                                 </Link>
//                                 <Link to="/events" onClick={() => setShowMenu(false)}>
//                                     <li className={`${location.pathname === '/events' ? 'bg-primary bg-opacity-20' : ''} header-side-link`}>
//                                         Events
//                                     </li>
//                                 </Link>
//                             </ul>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// Header.propTypes = {
//     solidBg: PropTypes.bool
// };

// Header.defaultProps = {
//     solidBg: false
// };

// export default Header;
