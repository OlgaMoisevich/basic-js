const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    };

    let arr_with_first_letter = [];

    members.forEach(i => {
        if (typeof i === 'string') {
            let name_with_space = i.replace(/\s+/, '');
            let first_letter = name_with_space.slice(0, 1).toUpperCase();
            arr_with_first_letter.push(first_letter)
        }
    });
    arr_with_first_letter.sort();
    return arr_with_first_letter.join('')
};
