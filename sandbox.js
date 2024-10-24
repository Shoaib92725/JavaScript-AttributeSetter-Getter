//Adding And Removing classes by using classList.add('') & classList.remove('')
// const  content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('fruit');
// content.classList.remove('fruit');
// content.classList.add('vegetable');

const  content = document.querySelectorAll('p');
content.forEach(element => {
    if(element.textContent.includes('fruit')){
        element.classList.add('fruit');
    }
    else if(element.textContent.includes('vegetable')){
        element.classList.add('vegetable');
    }
});
