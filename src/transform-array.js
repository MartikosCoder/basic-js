const transform = arr => {
    if(!Array.isArray(arr)) throw new Error();
    const commands = ['--discard-prev', '--discard-next', '--double-next', '--double-prev'];
    if(!arr.some(elem => commands.includes(elem))) return arr;

    const result = [];
    const arr_len = arr.length;

    for(let i = 0; i < arr_len; i++) {
        switch(arr[i]) {
            case '--discard-prev':
                result.pop();
                break;
            case '--discard-next':
                i++;
                break;
            case '--double-next':
                result.push(arr[i + 1]);
                break;
            case '--double-prev':
                result.push(arr[i - 1]);
                break;
            default:
                result.push(arr[i]);
        }
    }

    return result.filter(elem => elem !== undefined);
}

module.exports = transform;
