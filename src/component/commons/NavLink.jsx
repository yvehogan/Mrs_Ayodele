import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavLink({ children, className, link }) {
    return (
        <Link to={link}>
            <li className={`${className} relative text-base hover:text-primary hover:after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-4`}>
                {children}
            </li>
        </Link>
    );
}

export default NavLink;

NavLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    link: PropTypes.string
};

NavLink.defaultProps = {
    children: 'Nav Link',
    className: '',
    link: ''
};
