function replaceSpaces(str, char) {
    if (typeof str == "string" && typeof char == "undefined") {
        for (let i of str) {
            if (i == " ") {
                str = str.replace(i, "-");
            }
        }
        return str;
    } else if (typeof str == "string" && typeof char == "string") {
        for (let i of str) {
            if (i == " ") {
                str = str.replace(i, char);
            }
        }
        return str;
    } else {
        return null;
    }
}

module.exports = replaceSpaces;