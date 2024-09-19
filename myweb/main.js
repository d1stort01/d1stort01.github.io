const headers = {
    Authorization: 'Bearer ' + "lip_2HAxNSCyraaKzc3DX5Ro",
};

fetch('https://lichess.org/api/account', { headers })
    .then(res => res.json())
    .then(console.log);