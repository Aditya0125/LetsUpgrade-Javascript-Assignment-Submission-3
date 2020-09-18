// A. Display all the objects in a table
// B. Create a search functionality for name and city
// C. Delete button to delete records
// D. Data is not permanent


// Creating array with 5 array objects
let customerinformation=[{
    name:"Arvind",
    age:"21",
    city:"Pune",
    salary:"25000",},
    
    {name:"Arnold",
    age:"41",
    city:"America",
    salary:"55000",},

    {name:"Amit",
    age:"35",
    city:"Kolhapur",
    salary:"60000",},

    {name:"Sumit",
    age:"43",
    city:"Delhi",
    salary:"35000",},

    {name:"Chatan",
    age:"42",
    city:"Pune",
    salary:"36000",},];


    // A.- Display all the objects in a table

    function display(superarry){
        let tabledata="";
        superarry.forEach(function (element,index){
            let currentrow=`<tr>
            <td>${index+1}</td>
            <td>${element.name}</td>
            <td>${element.age}</td>
            <td>${element.city}</td>
            <td>${element.salary}</td>
            <td><button onClick="delete_me(${index})">Delete</button></td>
            </tr>`;
            tabledata += currentrow;
            
        });
        document.getElementsByClassName("tdata")[0].innerHTML=tabledata;

    }
    display(customerinformation);

    // B.- Create a search functionality for name and city
    function searchByName(){
        let searchByName=document.getElementById("searchbyname").value;
        let newdata=customerinformation.filter(function (customer){
            return customer.name.toUpperCase().indexOf(searchByName.toUpperCase())!=-1;

        });
        display(newdata);
    }
    
    
    // Function to display search by city
    function searchByCity(){
        let searchbycity=document.getElementById("searchbycity").value;
        let citynewdata=customerinformation.filter(function (citynames){
            return citynames.city.toUpperCase().indexOf(searchbycity.toUpperCase())!=-1;
        });
        display(citynewdata);
        
    }
  
    
    // C.- Delete button to delete records
    function delete_me(index){
        customerinformation.splice(index,1);
        display(customerinformation);
    }