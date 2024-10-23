const a = document.querySelector(".one");
console.log(a.innerText);
//changing the text inside the .one class
a.innerText = "Hi, I am level 2 heading";
//printing the changed result
console.log("Changed text : " + a.innerText);

//selecting all the h3 tags for replacing with userDefinedValues
const b = document.querySelectorAll("h3");
b.forEach((x) => {
  console.log(x.innerHTML);//to find what is inside the tag
  x.innerText = "Hi, I am level 3 heading";
  console.log(x.innerText);
});


//changing the innerHTML using document.querySelector()
const content = document.querySelector('.content');
console.log('Before changing',content.innerHTML);//before changing
content.innerHTML ='<span>  Hi,i am span tag </span>';
console.log('After changing',content.innerHTML);//after changing

//Adding more tags using document.querySelector()
//changing the innerHTML using document.querySelector()
const content1 = document.querySelector('.content');
const countries = ['India','China','Nepal'];
countries.forEach(country=>{
    content1.innerHTML += `<p>${country}</p>`;
});