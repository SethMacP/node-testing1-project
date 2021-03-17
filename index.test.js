const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
    let input = {}
    let expected = {}

    beforeEach(()=>{
        input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
        expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    })
    it('[1] returns an object with the properties trimmed', () => {
        const actual = utils.trimProperties(input)
        expect(actual).toEqual(expected)
    })
    it('[2] returns a copy, leaving the original object intact', () => {
        const copyObject = utils.trimProperties(input)
        expect(input).not.toEqual(copyObject)
    })
})

describe('[Exercise 2] trimPropertiesMutation', () => {

    let input = {}
    let expected = {}

    beforeEach(()=>{
        input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
        expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    })

  it('[3] returns an object with the properties trimmed', () => {
    const mutation = utils.trimPropertiesMutation(input)
    expect(input).toEqual(mutation)
  })

  it('[4] the object returned is the exact same one we passed in', () => {
    const mutation = utils.trimPropertiesMutation(input)
    expect(input).toBe(mutation)
    expect(input).toEqual(mutation)
    //Just to be really, really sure
    expect(input).toStrictEqual(mutation)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of numbers', () => {
    const arrayOfNumbers = [10,90,40,70,88,12]
    const expected = utils.findLargestInteger(arrayOfNumbers)
    expect(expected).toEqual(90)

  })
})

describe('[Exercise 4] Counter', () => {
  
    let counter

    beforeEach(() => {
        counter = new utils.Counter(3) // each test must start with a fresh counter
    })

    it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
        //The first call of countdown should return the number 3
        let expected = 3
        //result
        expect(counter.countDown()).toBe(expected)
    })

    it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
        //Expected return (per example)
        let expected = 2
        counter.countDown()
        //Expect
        expect(counter.countDown()).toBe(expected)
    })

    it('[8] the count eventually reaches zero but does not go below zero', () => {
        //expected return ( per test )
        let expected = 0
        //Call 6 Times ( really push the limits )
        for(let i = 0 ; i < 50 ; i++){
            counter.countDown()
        }
        //expect
        expect(counter.countDown()).toBe(0)

    })
})

describe('[Exercise 5] Seasons', () => {
    let seasons

    beforeEach(() => {
        seasons = new utils.Seasons() // each test must start with fresh seasons
    })

    it('[9] the FIRST call of seasons.next returns "summer"', () => {
        expect(seasons.next()).toMatch('summer')
    })

    it('[10] the SECOND call of seasons.next returns "fall"', () => {
        for(let i = 0 ; i < 1 ; i++){
        seasons.next()
        }
        expect(seasons.next()).toMatch('fall')
        })

    it('[11] the THIRD call of seasons.next returns "winter"', () => {
        for(let i = 0 ; i < 2 ; i++){
        seasons.next()
        }
        expect(seasons.next()).toMatch('winter')
    })

    it('[12] the FOURTH call of seasons.next returns "spring"', () => {
        for(let i = 0 ; i < 3 ; i++){
        seasons.next()
        }
        expect(seasons.next()).toMatch('spring')
    })

    it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
        for(let i = 0 ; i < 4 ; i++){
        seasons.next()
        }
        expect(seasons.next()).toMatch('summer')
    })

    it('[14] the 40th call of seasons.next returns "spring"', () => {
        for(let i = 0 ; i < 39 ; i++){
        seasons.next()
        }
        expect(seasons.next()).toMatch('spring')
    })

})

describe('[Exercise 6] Car', () => {
    let focus
    beforeEach(() => {
        focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
    })
    it('[15] driving the car returns the updated odometer', () => {
        focus.drive(100)
        expect(focus.odometer).toBe(100)
    })
    it('[16] driving the car uses gas', () => {
        focus.drive(100)
        expect(focus.tank).toBeLessThan(30)
    })
    it('[17] refueling allows to keep driving', () => {
        focus.drive(600)
        expect(focus.tank).toEqual(0)
        focus.refuel(10)
        expect(focus.tank).toEqual(10)
    })
    it('[18] adding fuel to a full tank has no effect', () => {
        focus.refuel(10)
        expect(focus.tank).toEqual(20)
    })
})

describe('[Exercise 7] isEvenNumberAsync', () => {

    it('[19] resolves true if passed an even number', async() => {
        const determination = await utils.isEvenNumberAsync(40)
        expect(determination).toBe(true)
    })

    it('[20] resolves false if passed an odd number', async() => {
        const determination = await utils.isEvenNumberAsync(39)
        expect(determination).toBe(false)
    })

    it('[21] rejects an error with the message "number must be a number" if passed a non-number type', async() => {
        const determination = await utils.isEvenNumberAsync('joke')
        expect(determination).toBe("number must be a number")
    })

    it('[22] rejects an error with the message "number must be a number" if passed NaN', async() => {
        const determination = await utils.isEvenNumberAsync(true)
        expect(determination).toBe("number must be a number")
    })
})
