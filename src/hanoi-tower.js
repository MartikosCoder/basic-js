const calculateHanoi = (disksNumber, turnsSpeed) => {
    const turns = 2 ** disksNumber - 1;
    return {
        turns,
        seconds: turns / (turnsSpeed / 3600)
    }
}

module.exports = calculateHanoi;