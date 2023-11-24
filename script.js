window.promises = [];
        const promises = [
            new Promise(resolve => setTimeout(() => resolve("Promise 1 resolved"), getRandomTime(1, 5))),
            new Promise(resolve => setTimeout(() => resolve("Promise 2 resolved"), getRandomTime(1, 5))),
            new Promise(resolve => setTimeout(() => resolve("Promise 3 resolved"), getRandomTime(1, 5))),
            new Promise(resolve => setTimeout(() => resolve("Promise 4 resolved"), getRandomTime(1, 5))),
            new Promise(resolve => setTimeout(() => resolve("Promise 5 resolved"), getRandomTime(1, 5)))
        ];

        Promise.any(promises)
            .then(result => {
                // Print the result to the output div
                document.getElementById('output').innerText = result;
            })
            .catch(error => {
                console.error('Error:', error);
            });

// Do not change the code above this
// add your promises to the array `promises`



