// nof parameters random values
// no current date/time
// no global state (dom, files, db)
// no mutation of parameters
// pure function should take args and return same

function isEligible(age, miniAge) {
  return age > miniAge;
}

//benefits
// easily testatble
// concurrency
//cacheable
// self documenting
