import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaHackerrank } from 'react-icons/fa';


const HeaderSocials = () =>{
    return(
        <div className="header__socials">

            <a href="https://linkedin.com" target="_blank"><FaLinkedin/></a>
            <a href="https://github.com" target="_blank"><FaGithub/></a>
            <a href="https://hackerrank.com" target="_blank"><FaHackerrank/></a>
        </div>
    )
}

export default HeaderSocials;