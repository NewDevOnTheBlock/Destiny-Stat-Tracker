import React from 'react';
require('dotenv').config();

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let code=urlParams.get('code');
console.log(code);

async function HomePage() {
    if (code) {
        let response = await fetch(`https://destiny2appbackend.onrender.com/?code=${code}`);
        console.log(response);
    }
    return <a href={`https://www.bungie.net/en/OAuth/Authorize?response_type=code&client_id=43378`}>Authorize Me!</a>
}

export default HomePage;
