# Observer JS

### Kotlin inspired viewmodel like class for JavaScript.  

This library allows you to observe data changes and update views. The design and application is inspired by the Kotlin way of implementing the ViewModel class where you set a value and observe changes at one or more places to update the view. 

_I am still working on it so use this on your own risk._

## Usage

### Observe a Value Changes

```
// example type 1 
const cats = new LiveObserver() 


// modify or change values on click

btnCats.addEventListener("click", (e) => {
    myviewmodel.cats.setValue("Cats: " + Math.random() * 100) 
})

// observers 
cats.observe(data => { 
    console.log('cats->', data)
})

```

### Encapsulate all the values into a single class 

```
// example type 2

class MyViewModel {
    cats = new LiveObserver()
    dogs = new LiveObserver() 
} 

const myviewmodel = new MyViewModel()

// modify or change values on click
btnCats.addEventListener("click", (e) => {
    myviewmodel.cats.setValue("Cats: " + Math.random() * 100) 
})

btnDogs.addEventListener("click", (e) => {
    myviewmodel.dogs.setValue("Dogs: " + Math.random() * 100) 
})


// observers 
myviewmodel.cats.observe(data => { 
    console.log('cats->',data)
})

myviewmodel.dogs.observe(data => { 
    console.log('dogs->', data)
})
