import {LOGO_URL}  from "../utils/constants";

    //Header Component
    const Header = () => {
        return (
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL} alt="FoodChef Logo"/>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li> <span className="material-symbols-outlined">shopping_cart</span></li>
                    </ul>
                </div>
            </div>
        )
    };

    // we have to export our component before we can import it from other files
    export default Header;