import React from 'react';

const navItems = [
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' }
];

function Navbar() {
    const navbarItems = navItems.map(item => (
        <li key={item.title}>
            <a href={item.href}> {item.title} </a>
        </li>
    ));
    return (
        <nav className="navbar navbar-fixed-top menu-top container">
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    {navbarItems}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

