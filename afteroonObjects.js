const loaf = ({
    flour: 300,
    water: 210,
    hydration: function(flour = this.flour, water = this.water){
        return (water/flour)*100;
    }
})

console.log(`${loaf.flour} \n${loaf.water} \n${loaf.hydration()}`);
