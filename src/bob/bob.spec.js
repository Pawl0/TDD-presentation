const Person_bob = require('./bob.js')

describe('All test concerning person Bob', () => {
	test('Bob should be 25 years old', () => {
		//Test
		expect(Person_bob.get_age()).toBe(
			25
		) //Assertion to be validated
	})

	test("Bob should not be 20years old", () => {
		expect(Person_bob.get_age()).not.toBe(20);//Fails when Bob is 20
	});

	test("Bob must be an adult", () => {
		expect(Person_bob.get_age()).toBeGreaterThan(18);//Fails when bob is a kid.
	})

})
