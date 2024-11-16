# Observer JS

### Kotlin inspired viewmodel like class for JavaScript.  

A Kotlin-inspired ViewModel-like class for JavaScript, designed to help you manage and observe data changes in your application. This library allows you to set values and observe changes, automatically updating views wherever necessary. The design and concept are inspired by Kotlin's ViewModel class, which makes it easier to separate UI logic from business logic while ensuring that views stay synchronized with the data.

_This project is still in progress, so use it at your own risk._

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

```

### Observe data from FAKE API Call

```
// example type 3
const fakeAPI = new LiveObserver()

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => fakeAPI.setValue(json))


fakeAPI.observe(data => {
    console.log(data) 
})

```
