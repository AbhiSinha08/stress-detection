import axios from "axios"

const url = process.env.REACT_APP_API_URL

async function getTestCase(num) {
    const route = 'test/' + num;
    let response;

    await axios.get(url + route)
    .then(res => res.data)
    .then((res) => {
        response = res;
    })
    .catch((error) => {
        console.log(error);
    })

    return response;
}

async function getTestResult(num) {
    const route = 'testresult/' + num;
    let response;

    await axios.get(url + route)
    .then(res => res.data)
    .then((res) => {
        response = res;
    })
    .catch((error) => {
        console.log(error);
    })

    return response;
}

async function predict(json) {
    const route = 'predict'
    let response;
    
    await axios.post(url + route, json)
    .then(res => res.data)
    .then((res) => {
        response = res;
    })
    .catch((error) => {
        console.log(error);
    })

    return response;
}

export { predict, getTestCase, getTestResult }