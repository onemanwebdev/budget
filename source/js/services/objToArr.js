const objToArr = (data) => {
    const arr = [];

    for (let key in data) {
        arr.push(data[key]);
    }

    return arr;
};

export default objToArr;
