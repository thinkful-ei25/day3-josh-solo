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

function objectCreator(employeeName, employeeJobTitle, boss){
    const myObj = ({
        name: employeeName,
        jobTitle: employeeJobTitle,
        boss: boss
    })
    return myObj;
}

const obj1 = new objectCreator('john', 'janitor');
const obj2 = new objectCreator('jacob', 'musician', 'john');
const obj3 = new objectCreator('jingleheimer', 'gastro king', 'jacob');
const obj4 = new objectCreator('schmidt', 'junk bond salesman', 'jingleheimer');
const obj5 = new objectCreator('myname', 'my name too', 'schmidt');

const employees = [obj1, obj2, obj3, obj4, obj5];
console.log(employees);

for(key in employees){
    if(employees[key].boss === undefined){
        console.log(`${employees[key].jobTitle} ${employees[key].name} doesn't report to anybody`);
    } else{
        console.log(`${employees[key].jobTitle} ${employees[key].name} reports to ${employees[key].boss}`);
    }
}


function createCharacter(name, nickname, race, origin, attack = 0, defense = 0, weapon){
    const character = ({
        name: name,
        nickname: nickname,
        race: race,
        origin: origin,
        attack: attack,
        defense: defense,
        weapon: weapon,
        evaluateFight: function(opponent){
            let dealt = this.attack - opponent.defense;
            let received = opponent.attack - this.defense;
            if(dealt < 0){
                dealt = 0;
            }
            if (received < 0){
                received = 0;
            }
            console.log(`Your opponent takes ${dealt} damage and you receive ${received} damage`);
        },
        describe: function(){
            console.log(`${name} is a ${race} from ${origin}`);
        }
    })
    

    return character;

}
let phiil = createCharacter('phiil suul', 'phiil', 'elf', 'teclosidor');
let bob = createCharacter('buck', 'giant', 'earth', 5, 5);
phiil.evaluateFight(bob);
bob.evaluateFight(phiil);
phiil.describe();
let gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'Wizard Staff');
let bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring');
let frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade');
let aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril');
let legolas = createCharacter('Legolas','legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow');
let characters = [gandalf, bilbo, frodo, aragorn, legolas];
let arwen = createCharacter('Arwen Undomiel', 'Arwen', 'Half-Elf', 'Rivendell', 3, 7, 'Hadhafang');
characters.push(arwen);
const aboutAragorn = characters.find( characters => characters.nickname === 'aragorn');
aboutAragorn.describe();

const hobbits = characters.filter(character => character.race === 'Hobbit');
for(hobbit in hobbits){ 
    hobbits[hobbit].describe();
}
const damagers = characters.filter(character => character.attack > 5);
for(damager in damagers){
    damagers[damager].describe();
}