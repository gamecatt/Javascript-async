const getTodos = (resource) => {

    return new Promise((resolve, reject) =>{
        const request = new XMLHttpRequest();
        
        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readystate);
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if(request.readyState === 4) {
                reject('error getting resource')
            }
        });
        
        request.open('GET', resource);
        request.send();
    });
};

getTodos('todos/mario.json').then(data => {
    console.log('promise resolved: ', data);
}).catch((err) => {
    console.log('promise rejected: ', err);
});

// promise example

// const getSmth = () => {
//     return new Promise((resolve, reject) => {
//         //fetch something
//         resolve('some data');
//         //reject('some error');
//     })
// };

// getSmth().then((data) => {
//     console.log(data);
// }, (err) =>{
//     console.log(err);
// });

// getSmth().then((data) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })