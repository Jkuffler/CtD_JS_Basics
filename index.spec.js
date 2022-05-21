//import your functions and variables to check against here.

const { firstName, lastName, homeCountry, fullName, isJorge, mySentence, theAnswer, funkyInitials, x, y, var1, var2, var3, var4q, var4a } = require('./index.js')

describe("Question 1: Testing name and country vars", () => {
  test("firstName is a string and is not empty", () => {
    expect (typeof firstName).toEqual("string")
    const firstNameLength = firstName.length
    expect(firstNameLength).toBeGreaterThan(0)
  })
  test("lastName is a string and is not empty", () => {
    expect(typeof lastName).toEqual("string")
    const lastNameLength = lastName.length
    expect(lastNameLength).toBeGreaterThan(0)
  })
  test("homeCountry is a string and is not empty", () => {
    expect(typeof homeCountry).toEqual("string")
    const homeCountryLength = homeCountry.length
    expect(homeCountryLength).toBeGreaterThan(0)
  })
})

describe("Question 2: FullName is firstName + ' ' + lastName", () => {
  test("is fullName a concatenation of the firstName and lastName values", () => {
    expect(fullName).toEqual(firstName + ' ' + lastName)
    expect(typeof fullName).toEqual("string")
  })
})

describe("Question 3: A full sentence", () => {
  test("mySentence is correct", () => {
    expect(typeof mySentence).toEqual("string")
    expect(mySentence).toEqual("My full name is " + fullName + ". I am from " + homeCountry + ".");
  })
})

describe("Question 4: funkyInitials var", () => {
  test("is funkyInitials last initals + uppercase ", () => {
    expect(typeof funkyInitials).toEqual("string")
    let output = (firstName.charAt(firstName.length - 1) + lastName.charAt(lastName.length - 1)).toUpperCase()
    expect(funkyInitials).toEqual(output)
  })
})


describe("Question 5: isJorge var", () => {
  test("isJorge is true if firstName isJorge and false otherwise ", () => {
    if (firstName == "Jorge") {
      expect(isJorge).toBe(true)
    } else {
      expect(isJorge).toBe(false)
    }
  })
})

describe("Question 7: x var", () => {
  test("that x is the integer 21.46", () => {
    expect(typeof x).toEqual("number")
    expect(x).toBe(21.46)
    // expect (dataType).toEqual("string")
  })
})

describe("Question 8: y var", () => {
  test("y is a whole number, 15 ", () => {
    expect(y).toEqual(15)
    expect(typeof y).toEqual("number")
  })
})

describe("Question 9: var3 var", () => {
  test("var three is an integer, 42 ", () => {
    expect(var3).toEqual(42)
  })
})

describe("var4q and var4a var", () => {
  test("is it correct", () => {
    expect(var4a).toEqual("It is divisible.")
  })
})

