const luhnCheck = (num) => {
    try {
        return Number(num);
    } catch (err) {
        return false;
    }
};

export default luhnCheck;
