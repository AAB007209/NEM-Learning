function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// We can also write the functions like this also
// exports.add = (a, b) => a + b; // Doesn't need exporting at the end
// exports.sub = (a, b) => a - b; // Doesn't need exporting at the end

module.exports = { add, sub }