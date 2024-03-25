var arrangeWords = function(text) {
    
     let spltText = text.split("");
     console.log(spltText);

    for(let i = 0; i< spltText.length; i++){
        if(spltText[0] == spltText[0].toUpperCase() && spltText[1] == spltText[1].toLowerCase)
            console.log(spltText[i]);
    }

    //  text.split(" ").sort().reverse().join(" ");
    
};

let text = "Leetcode is cool";

console.log(arrangeWords(text));