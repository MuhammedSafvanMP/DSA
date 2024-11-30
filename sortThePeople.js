var sortPeople = function(names, heights) {
   let adding = names.map((name, index) => ({
       name, heights: heights[index]
   }))
   
   adding.sort((a, b) => b.heights - a.heights);
   
   return adding.map(person => person.name);
};

let names = ["Mary","John","Emma"], heights = [180,165,170];

console.log(sortPeople(names, heights))
