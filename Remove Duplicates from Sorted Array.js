let  head = [1,1,2];

var deleteDuplicates = function(head) {
     return head.filter((value,index,array) => array.indexOf(value) === index);
};

console.log(deleteDuplicates(head));