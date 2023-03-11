import React from 'react';

async function GetAllUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if(!res.ok) throw Error('failed to fetch data')

    return res.json()
}

export default GetAllUser;