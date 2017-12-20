console.log('script file loaded.');
const BASE_URL = 'http://s-apis.learningfuze.com/sgt/get';
const API_KEY = '?key=testuser1234';
const dataToSend = 'api_key=d7r3OiW4rR';

const settings = {
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    }
};

// // GET METHOD FOR AXIOS
// axios.get(`${BASE_URL}/todos${API_KEY}`).then( (response) => {
//     console.log(response.data);
// });


// // POST METHOD FOR AXIOS
// axios.post(BASE_URL, dataToSend, settings)
//     .then(handleResponse)
//     .catch( (err) => {
//         console.log("Error: ", err);
//     })
//
// function handleResponse(response) {
//     console.log("Real function server response: ", response.data);
// }

//
// // ES6 way of doing AJAX calls
// fetch('http://api.reactprototypes.com/todos?key=testuser1234').then(resp=> {
//     return resp.json();
// }).then(resp => {
//     console.log("Resp: ", resp);
// })