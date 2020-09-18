// A. A form to add new bus
// B. Display data in table format
// C. Search by source and destination
// D. Data should be stored permanently in localstorage


// Creating blank array object
// let businformation=[];

window.onload=function(){
    let businformation = [];
    if(localStorage.getItem("businformation") == null){
       localStorage.setItem("businformation",JSON.stringify(businformation));
    }
    console.log(localStorage.getItem("businformation"));
};



    
// Insert data in table
function display(superarray=undefined){
    let tabledata="";
    let businfo2;
    // let superarray.getItem("superheros");
    if (superarray == undefined) {
        businfo2 = JSON.parse(localStorage.getItem("businformation"));
      } else {
        businfo2 = superarray;
      }
            

      businfo2.forEach(function (businfo,index){
        let currentrow=`<tr><td>${index+1}</td>
        <td>${businfo.name}</td>
        <td>${businfo.source}</td>
        <td>${businfo.destination}</td>
        <td>${businfo.number}</td>
        <td>${businfo.passengerCapacity}</td>
        </tr>`

        tabledata +=currentrow;
       
    });

    document.getElementsByClassName("tdata")[0].innerHTML=tabledata;
}
display();

function addnewbus(event){
    event.preventDefault();


    let addbus={};
    let name=document.getElementById('name').value;
    let source=document.getElementById('source').value;
    let destination=document.getElementById('destination').value;
    let number=document.getElementById('number').value;
    let passengersCapacity=document.getElementById('passengerCapacity').value;

    addbus.name=name;
    addbus.source=source;
    addbus.destination=destination;
    addbus.number=number;
    addbus.passengerCapacity=passengersCapacity;


    let businformation = JSON.parse(localStorage.getItem("businformation"));

    businformation.push(addbus);

    localStorage.setItem("businformation", JSON.stringify(businformation));

    

    display(businformation);

    document.getElementById('name').value="";
    document.getElementById('source').value="";
    document.getElementById('destination').value="";
    document.getElementById('number').value="";
    document.getElementById('passengerCapacity').value="";
}



 // B.- Create a search functionality for name and city
 function searchBySource(){
    let searchBySource=document.getElementById("searchbysource").value;
    
    let businformation = JSON.parse(localStorage.getItem("businformation"));
    
    let newdata=businformation.filter(function (source){
        return source.source.toUpperCase().indexOf(searchBySource.toUpperCase())!=-1;

    });
    display(newdata);
}


// Function to display search by city
function searchByDestination(){
    let searchByDestination=document.getElementById("searchbydestination").value;

    let businformation = JSON.parse(localStorage.getItem("businformation"));
    
    let newdata=businformation.filter(function (e){
        return e.destination.toUpperCase().indexOf(searchByDestination.toUpperCase())!=-1;

    });
    display(newdata);
    
}



//  add bus functionality

// function addbus(event){
//     event.preventDefault();
//     let addnewbus={};

//     let name=document.getElementById('name').value;
//     let source=document.getElementById('source').value;
//     let destination=document.getElementById('destination').value;
//     let number=document.getElementById('number').value;
//     let passengerCapacity=document.getElementById('passengerCapacity').value;

//     addnewbus.name=name;
//     addnewbus.source=source;
//     addnewbus.destination=destination;
//     addnewbus.number=number;
//     addnewbus.passengerCapacity=passengerCapacity;
    
//     // let buses=JSON.parse(localStorage.getItem("businformations"));

//     businformation.push(addnewbus);

//     // localStorage.setItem("businformations",JSON.stringify(businformation));

//     // let stringsuperheros=JSON.stringify(superheros);
//     // localStorage.setItem("superheros",stringsuperheros);
    
//     display(businformation);
//     document.getElementById('name').value="";
//     document.getElementById('source').value="";
//     document.getElementById('destination').value="";
//     document.getElementById('number').value="";
//     document.getElementById('passengerCapacity').value="";

// }
   // A.- Display all the objects in a table
    // function display(superarry){
    //     console.log(superarry);
    //     // let tabledata="";
    //     // superarry.forEach(function (element,index){
    //     //     let currentrow=`<tr>
    //     //     <td>${index+1}</td>
    //     //     <td>${element.name}</td>
    //     //     <td>${element.source}</td>
    //     //     <td>${element.destination}</td>
    //     //     <td>${element.number}</td>
    //     //     <td>${element.passengerCapacity}</td>
    //     //     <td><button onClick="delete_me(${index})">Delete</button></td>
    //     //     </tr>`;
    //     //     tabledata += currentrow;
            
    //     // });
    //     // document.getElementsByClassName("tdata")[0].innerHTML=tabledata;

    // }
    // display(businformations);

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