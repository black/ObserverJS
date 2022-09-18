/*
 Views
*/
const catsView = document.getElementById('cats')
const appleView = document.getElementById('apple')
const bananaView = document.getElementById('banana')

const btnCats = document.getElementById('btnCats')
const btnApple = document.getElementById('btnApple')
const btnBanan = document.getElementById('btnBanana')

/*
Initializing View Model here 
*/
const cats = new LiveObserver() // example type 1 
const myviewmodel = new MyViewModel() // example type 2 where all the variables are encapsulated inside a parent class 
 
/*
Modifying/Changing values on button click so that other can observe the change in the value
*/
btnCats.addEventListener("click", (e) => {
    cats.setValue("Cats: " + makeid(10))
})

btnApple.addEventListener("click", (e) => {
    myviewmodel.apple.setValue("Apple: " + Math.random() * 100) 
})

btnBanan.addEventListener("click", (e) => {
    myviewmodel.banana.setValue("Banana: " + Math.random() * 100) 
})

/*
 Observing values and updating the views, here I have used span as an example
*/

// example 1 observer
cats.observe(data => {
    catsView.innerText = data
    console.log('banana->', data)
})

// example 2 observers
myviewmodel.apple.observe(data => {
    appleView.innerText = data
    console.log('apple->',data)
})

myviewmodel.banana.observe(data => {
    bananaView.innerText = data
    console.log('banana->', data)
})




/*---------------------------------------------*/
 function makeid(length) {
     var result = '';
     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     var charactersLength = characters.length;
     for (var i = 0; i < length; i++) {
         result += characters.charAt(Math.floor(Math.random() *
             charactersLength));
     }
     return result;
 }
