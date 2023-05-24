import React from 'react';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let code=urlParams.get('code');
console.log(code);

function HomePage() {
    return <a href='https://www.bungie.net/en/OAuth/Authorize?response_type=code&client_id=43378'>Authorize Me!</a>
}

export default HomePage;
