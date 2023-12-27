const URL ="https://restcountries.com/v3.1/all"
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
console.log(xhr)
xhr.onreadystatechange = () =>{
    console.log(xhr.readyState)
}

xhr.onload = () =>{
    console.log(JSON.parse(xhr.response))
    
}
fetch("https://restcountries.com/v3.1/all")
.then((response) => response.json())
.then ((data) => {
 data.forEach(element => {
    
 
   console.log("The name of the countries ==>",element.name.common,"The name of the region==>",element.region,"The name of the subregion==>",element.subregion,"population==>",element.population)
   
});
});

