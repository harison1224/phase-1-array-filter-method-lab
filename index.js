// Code your solution here
function findMatching(drivers, query) {
    
    const queryLower = query.toLowerCase();
    
    return drivers.filter(driver => driver.toLowerCase() === queryLower);
}

function fuzzyMatch(drivers, query) {
    
    const queryLower = query.toLowerCase();
    
    return drivers.filter(driver => driver.toLowerCase().startsWith(queryLower));
}

function matchName(driverObjects, query) {
    
    const queryLower = query.toLowerCase();
    
    return driverObjects.filter(driver => driver.name.toLowerCase() === queryLower);
}