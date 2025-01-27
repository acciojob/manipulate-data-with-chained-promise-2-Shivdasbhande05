//your JS code here. If required.
let arr = [1,2,3,4];

const output = document.getElementById("output");

function promise1(data1){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data1);
        },3000);
    })
}

function promise2(data2){
    return new Promise(resolve => {
        let evenData = data2.filter(item => item %2 === 0);

        resolve(evenData);
    });
}

function promise3(data3){
    return new Promise(resolve => {
        let x2 = data3.map(item => {
            return item *= 2;
        });
        resolve(x2);
    })
}

promise1(arr).then(data => {
    return promise2(data);
}).then(data => {
    setTimeout(() => {
        output.textContent = data;
    },1000);
    return promise3(data);
}).then(data => {
    setTimeout(() => {
        output.textContent = data;
    },2000);
});



