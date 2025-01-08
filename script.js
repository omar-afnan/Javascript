let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function appleShelf2()
{
  for (let i = 0; i < fruit.length;  i++)
  {
    if (fruit[i] === "🍎") //fruit[i] === current fruit 
    {
      appleShelf.textContent += fruit[1]; // use to gather all the appple 
    }
    else
    {
      console.log("put it in the orange shelf ");
      }
  }
}

function orangeShelf2()
{
  for (let j = 0; j < fruit.length; j++)
  {
    if (fruit[i] === "🍊")
    {
      orangeShelf.textContent += fruit[1]; // use to gather all orange 
    }
    else
    {
      console.log("Put it in the apple shelf ");
      }
  }
}

appleShelf2();
orangeShelf2();
