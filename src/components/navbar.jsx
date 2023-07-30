
export default function Navbar()
{
    return (
        <div className="navbar">
            <nav>
                <div className="navbar-brand">
                    <img src="../public/logo.svg"/>
                </div>
                <ul className="navbar-items">
                    <li className="navbar-item">Work</li>
                    <li className="navbar-item">Services</li>
                    <li className="navbar-item">About</li>
                    <li className="navbar-item">Team</li>
                    <li className="navbar-item">Contact</li>
                </ul>
            </nav>
        </div>
    )
}