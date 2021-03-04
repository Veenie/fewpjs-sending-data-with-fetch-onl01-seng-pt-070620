<<<<<<< HEAD

function submitData(name, email) {
  
return fetch("http://localhost:3000/users", {
=======
// Add your code here
let formData(name, email) = {
  name: "name",
  email: "email"
};

//what we want enterted into form
 
let configObj = {
>>>>>>> b3da072e8ba6cff7fba86f680e63326a36357228
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
<<<<<<< HEAD
  body: JSON.stringify({name, email})
})
=======
  body: JSON.stringify(formData)
};

//our object for second argument in fetch
//handles httpverb (post) and turning the data from text to string

function submitData(formdata) {
  
fetch("http://localhost:3000/users", configObj)
>>>>>>> b3da072e8ba6cff7fba86f680e63326a36357228
.then(function(response) {
    return response.json();
  })
  .then(function(object) {
<<<<<<< HEAD
    document.body.innerHTML = object.id
  })
   .catch(function(error) {
    document.body.innerHTML = error.message;
=======
    console.log(object);
  })
   .catch(function(error) {
    alert("Unauthorized Access");
    console.log(error.message);
>>>>>>> b3da072e8ba6cff7fba86f680e63326a36357228
  })}