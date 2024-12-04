// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
function fuzzyMatch(drivers, el){
    return drivers.filter(driver => driver.startsWith(el));
}
function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name);

}
