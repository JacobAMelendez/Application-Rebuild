window.addEventListener('load', async (e) => {
  //   console.log('page loaded');
  try {
    const res = await fetch('/msg');
    const msg = await res.json();
    console.log('msg',msg)
  } catch (err) {
    return console.log(err)
  }
});
// onLoad to create a get rquest to the backend to recive all messages
// take the response and load it on to the front end

//Create our class here
//define our methods
//method1: load() => {
//make a fetch GET request to the backend
//const response = await fetch('http://localhost:3434/msg {
    //method: "GET",
    //headers: {"Content-Type": "application/json"},
    //body: JSON.stringify(data),
// })
// .then((data))
// .then((resData) => {
    
// })
//then assign the message from the data to a new list item
//}
