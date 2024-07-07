// Code your solution here
// index.js

function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.startsWith(string));
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string);
}

module.exports = { findMatching, fuzzyMatch, matchName };
