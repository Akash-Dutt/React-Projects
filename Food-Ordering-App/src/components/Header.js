import {LOGO_URL}  from "../utils/constants";
import {useState} from "react";
    //Header Component
    const Header = () => {
        const [LoginBtn, setLoginBtn] = useState("Login");
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
                        <button className="logInOut-btn" 
                                onClick = {() => {
                                    if(LoginBtn == "Login"){
                                        setLoginBtn("Logout");
                                    }else{
                                        setLoginBtn("Login");
                                    }
                                }} 
                        >{LoginBtn}</button>
                    </ul>
                </div>
            </div>
        )
    };

    // we have to export our component before we can import it from other files
    export default Header;