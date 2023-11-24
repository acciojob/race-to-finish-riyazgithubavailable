window.promises = [];
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



