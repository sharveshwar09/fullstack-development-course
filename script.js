async function getData() {
    console.log("Fetching data...");
    let result = await fetchOperation();
    console.log("Data fetched:", result);
    return result;
    
}

function fetchOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Sample Data");
        }, 2000);
    });
}

getData();