// import { axios } from "axios";

const axios = require('axios');

// var url = "https://jsonplaceholder.typicode.com/posts"
// fetch(url).then(response => response.json())
    //.then(response => console.log(response))

// axios.get(url).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

//-----

// axios.get(url).then(({data}) => {
//     for (const key in data) {
//         console.log(data[key].title)
//     }
// }).catch((err) => {
//     console.log(err)
// });

//---------

var url = "https://jsonplaceholder.typicode.com/albums"

// axios.post(url, {
   //userId: 11,
   //title: "utt refugio"  
// }).then(({data}) => console.log(data))

axios.get(url).then(({data}) => {
    for (const key in data) {
        console.log("ID: " + data[key].id)
        console.log("Titulo: " + data[key].title + "\n")
    }
}).catch((err) => {
    console.log(err)
});
