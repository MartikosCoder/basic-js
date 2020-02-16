const calculateHanoi = (disksNumber, turnsSpeed) => {
    const turns = 2 ** disksNumber;
    return {
        turns,
        seconds: turns / turnsSpeed * 3600
    }
}

module.exports = calculateHanoi;