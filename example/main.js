/*
 Views
*/
const catsView = document.getElementById('cats')
const appleView = document.getElementById('apple')
const bananaView = document.getElementById('banana')
const fakeAPIView = document.getElementById('fakeAPI')
const loadingView = document.getElementById('loading')

const btnCats = document.getElementById('btnCats')
const btnApple = document.getElementById('btnApple')
const btnBanan = document.getElementById('btnBanana')
const btnFake = document.getElementById('btnFakeAPI')

/*
Initializing View Model here 
*/
const cats = new LiveObserver() // example type 1 
const myviewmodel = new MyViewModel() // example type 2 where all the variables are encapsulated inside a parent class 
const fakeAPI = new LiveObserver() // example type 3
 
/*
Modifying/Changing values on button click so that other can observe the change in the value
*/

/*------1 ---------------------------------------*/
// example 1 modifier
btnCats.addEventListener("click", (e) => {
    cats.setValue("Cats: " + makeid(10))
})
/*------2 ---------------------------------------*/
// example 2 modifiers
btnApple.addEventListener("click", (e) => {
    myviewmodel.apple.setValue("Apple: " + Math.random() * 100) 
})

btnBanan.addEventListener("click", (e) => {
    myviewmodel.banana.setValue("Banana: " + Math.random() * 100) 
})

/*------3 ---------------------------------------*/
// example 3 modifier using fakeAPI Call
btnFake.addEventListener("click", (e) => {
    loadingView.style.display = 'block'
    fetch('https://dummyjson.com/products/2')
        .then(response => response.json())
        .then(json => setTimeout(function () {
            loadingView.style.display = 'none'
            fakeAPI.setValue(json)
        }, 3000))
})


/*
 Observing values and updating the views, here I have used span as an example
*/
/*---------------------------------------------*/
// example 1 observer
cats.observe(data => {
    catsView.innerText = data
    console.log('banana->', data)
})
/*---------------------------------------------*/
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
// example 3 observer
fakeAPI.observe(data => {
    console.log(data)
    fakeAPIView.innerHTML = `<ul><li> ${data.title} </li> <li> ${data.description} </li> <li> ${"$"+data.price} </li><ul/>`
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
