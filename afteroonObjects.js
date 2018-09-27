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

function objectCreator(employeeName, employeeJobTitle){
    const myObj = ({
        name: employeeName,
        jobTitle: employeeJobTitle
    })
    return myObj;
}

const obj1 = new objectCreator('john', 'janitor');
const obj2 = new objectCreator('jacob', 'musician');
const obj3 = new objectCreator('jingleheimer', 'gastro king');
const obj4 = new objectCreator('schmidt', 'junk bond salesman');
const obj5 = new objectCreator('myname', 'my name too');

const employees = [obj1, obj2, obj3, obj4, obj5];
console.log(employees);
for(key in employees){
    console.log(`${employees[key].name} is a ${employees[key].jobTitle}`);
}
