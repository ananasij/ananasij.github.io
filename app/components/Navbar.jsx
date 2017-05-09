import React from 'react';

const navItems = [
    { id: 1, title: 'About', href: '#about' },
    { id: 2, title: 'Projects', href: '#projects' },
    { id: 3, title: 'Contact', href: '#contact' }
];

function Navbar() {
    const navbarItems = navItems.map(item => (
        <li key={item.id}>
            <a href={item.href}> {item.title} </a>
        </li>
    ));
    return (
        <div className="navbar navbar-fixed-top menu-top">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#about">Logo</a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        {navbarItems}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

