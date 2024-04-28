/*
QUESTION: 1

function maxProduct(nums)
{
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];

    for (let i = 1 ; i < nums.length; i++)
     {const tempMax = Math.max (num[i] , maxProduct * nums[i], minProduct * nums[i]); const tempMin} = Math.min(nums[i], maxProduct*nums[i] , minProduct*nums[i]);

    maxProduct = tempMax;
    minProduct = tempMin;
    result = Math.max (result, maxProduct);
}

return rsult;
*/

/*
QUESTION: 4
var books = [
    {title:"Goldilocks and the 3 bears",
author: "abc",
readingStatus: true 
},
{ 
    title: "the jungle book",
    author:"xhj",
    readingStatus:false 

}

]
displayReadingStatus(books) 
{books.forEach(book => {console.log(title: ${book.title}, author: ${book.author},Reading: $ {book.readingStatus ?'read': 'not read' });
});
}

*/

/* QUESTION 3

function rverseWords(input){return input.split('').map(word => word.split('').reverse().join('')).join('');}
var inputString = 'welcome to the class';
var reversedString = rverseWords(inputString);
console.log(reversedString);

*/ 

/* QUESTION 5 */

function convertToCoins(amount){
    const coins = [25, 10, 5];
    const result = {};

    coins.forEach(coin=>{result[coin]=
    Math.floor(amount/coin);
amount %=coin;});
return result;
}

var amount= 46;
var coins= convertToCoins(amount);
console.log(coins);
