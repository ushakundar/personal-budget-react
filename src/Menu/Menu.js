import react from 'react';
import {
    Link
  } from "react-router-dom"

function Menu() {
  return (
    <nav>
    <ul>
        <li><link href="/">Homepage</link></li>
        <li><link href="/about.html">About</link></li>
        <li><link href="/login.html">Login</link></li>
        <li><link href="https://google.com">Google</link></li>
    </ul>
</nav>
  );
}

export default Menu;
