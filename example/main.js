/*
 Views
*/
const appleView = document.getElementById('apple')
const bananaView = document.getElementById('banana')
const catsView = document.getElementById('cats')

const btn = document.getElementById('btn') 

/*
Initializing View Model here 
*/
const myviewmodel = new MyViewModel()

/*
Modifying/Changing values on button click so that other can observe the change in the value
*/
btn.addEventListener("click", (e) => { 
    myviewmodel.apple.setValue("Apple: " + Math.random()*100)
    myviewmodel.banana.setValue("Banana: " + Math.random() * 100)
    myviewmodel.cats.setValue("Cats: " + Math.random() * 100)
})

/*
 Observing values and updating the views, here I have used span as an example
*/
myviewmodel.apple.observe(data => {
    appleView.innerText = data
    console.log('apple->',data)
})

myviewmodel.banana.observe(data => {
    bananaView.innerText = data
    console.log('banana->', data)
})

myviewmodel.cats.observe(data => {
    catsView.innerText = data
    console.log('banana->', data)
})


 