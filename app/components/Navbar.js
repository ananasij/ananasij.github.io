var React = require('react');

const navItems = [
    { title: 'About', href: '#about'},
    { title: 'Projects', href: '#projects'},
    { title: 'Contact', href: '#contact'}
];
class Navbar extends React.Component {


    render() {
        const navbarItems = navItems.map((item, index) => (
            <li key={index}>
                <a href={item.href}> {item.title} </a>
            </li>
        ));
        return (
            <div className="navbar navbar-fixed-top menu-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">AnanasijWeb</a>
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
}

module.exports = Navbar;

