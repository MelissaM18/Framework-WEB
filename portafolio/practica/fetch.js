// var url = "https://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript"

// const responseData = fetch(url).then(response => response.json());
// responseData.then(({items, has_more, quota_max, quota_remaining}) => {
//     for(const {title, score, owner, link, answer_count} of items)
//     {
//         console.log("Question Title: -------" + title)
//     }
// })

//-------------------------------------------------------------------------------------------------


// var responseData = fetch(url).then(response => response.json());
// responseData.then(({username, email}) => 
// {
//     for (const{username, email} in responseData) 
//     {
//         console.log("username: " + username + "--- email: " + email)
//     }
// })

//----------------------

var url = "https://jsonplaceholder.typicode.com/users"

// fetch(url).then(response => response.json()).then(response => 
//     {
//         for (var key in response)
//         {
//             console.log("username: " + response[key].username)
//             console.log("email: " + response[key].email)
//             console.log("city: " + response[key].address.city)
//             console.log("zipcode: " + response[key].address.zipcode)
//             console.log("company name: " + response[key].company.name + "\n")
//         }
//     })

//-------------------------------------------------------------------------------------------------

// var url = "https://jsonplaceholder.typicode.com/albums"

// fetch(url).then(response => response.json()).then(response => 
//     {
//          for (var ola in response)
//          {   
//              console.log("user id: " + response[ola].userId)
//              console.log("id: " + response[ola].id)
//              console.log("title: " + response[ola].title + "\n")
//          }
//     })

// //-----------------------------------------------

// fetch(url, {
//     method: "POST",
//     headers: {
//         "Content_type": "application/json"
//     },
//     body: JSON.stringify({
//         userId: 101,
//         id: 101,
//         title: "Foo Bar Title",
//     })
// }).then(response => response.json()).then(response => console.log(response))

// ----------------------------------------------

fetch(url, 
{
    method: "POST",
    headers: 
    {
        "Content_type": "application/json"
    },
    body: JSON.stringify(
    {
        id: 11,
        name: "Melissa Sanchez",
        username: "mel18",
        email: "melissanchez18@gmail.com",
            address:
            {
                street: "Villa Residencial del Bosque",
                suite: "Priv. Magnolias 25216 19",
                city: "Tijuana",
                zipcode: "22204",
                    geo:
                    {
                        lat: "1676.25",
                        lng: "3125.27",
                    },
                phone: "664 810 6777",
                website: "utt.com",
            },
            company:
            {
                name: "UTT",
                catchPhrase: "Ingenieros que resuelven",
                bs: "cuervos"
            }
    })
}).then(response => response.json()).then(response => console.log(response))

//-------------------------------------------------------------------------------------------------
