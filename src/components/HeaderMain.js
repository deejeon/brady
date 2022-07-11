import React from "react";
import "./HeaderMain.css";

function HeaderMain() {
    return (
        <div className="headermain-container">
            <img src="https://d38nf78ffv4u5r.cloudfront.net/userfiles/brady-bradyifs-logo-color-250x50.png" alt="" className="headermain-logos" />
            <div className="centermessage">
                <p className="centermessage-lineone">Supplies & Solutions for</p>
                <p className="centermessage-linetwo"><span className="blue">Cleaning</span> & <span className="red">Foodservice</span> Professionals</p>
            </div>
            <div className="headermain-accountcart">
                <div className="accountcart-account">
                    <div className="account-words">
                        <p className="words-myaccount">My Account</p>
                        <p className="words-signin">Sign In / Register</p>
                    </div>
                    <img src="" alt="" className="account-icon" />
                </div>
                <div className="accountcart-cart">
                    <div className="cart-words">
                        <p className="words-mycart">My Cart</p>
                        <p className="words-itemsprice">0 items - $0.00</p>
                    </div>
                    <img src="" alt="" className="cart-icon" />
                </div>
            </div>
        </div>
    )
}

export default HeaderMain;