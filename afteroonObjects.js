const loaf = ({
    flour: 300,
    water: 210,
    hydration: function(flour = this.flour, water = this.water){
        return (water/flour)*100;
    }
})

console.log(`${loaf.flour} \n${loaf.water} \n${loaf.hydration()}`);

const itObj = ({
    foo: 'foo',
    bar: 'bar',
    fum: 100,
    quuz: [1,2,3],
    spam: 'Nigerian Prince'
})

for(thing in itObj){
    console.log(thing + ' = ' +itObj[thing]);
}

const hobbitFeed = ({
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
})

console.log(hobbitFeed.meals[3]);