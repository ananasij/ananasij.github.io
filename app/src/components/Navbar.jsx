import React from 'react';
import jump from 'jump.js';

const navItems = [
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' }
];

function Navbar() {
    const navbarItems = navItems.map((item) => {
        const target = '.js-jump-'.concat(item.title);
        return (
            <li key={item.title}>
                <a
                    href={item.href}
                    onClick={(e) => {
                        e.preventDefault();
                        jump(target);
                    }}
                >
                    {item.title}
                </a>
            </li>
        );
    });
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

