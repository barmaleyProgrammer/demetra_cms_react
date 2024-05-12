import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className=" text-xs">
                <div className="text-xs font-light">
                    <NavLink to="/">
                        <p> © {new Date().getFullYear()} demetra.fish</p>
                    </NavLink>
                    <p>Всі права захищені</p>
                </div>
                <div className="font-light">
                    barmaley_dev
                </div>
            </div>
        </footer>
    );
};

export default Footer;