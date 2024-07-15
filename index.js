const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }

  function fuzzyMatch(drivers, query) {
    const filteredDrivers = drivers.filter(driver =>
      driver.toLowerCase().startsWith(query.toLowerCase())
    );
    return filteredDrivers;
  }

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }

  