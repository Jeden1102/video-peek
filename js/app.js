let categoryBtn = document.querySelector('.cat-btn');
let categories = document.querySelector('.categories');
let isChecked = 0;
categoryBtn.addEventListener('click',function(){
   
    if(isChecked == 0){
        categories.classList.add('h-full');
        isChecked = 1;
    }else{
        categories.classList.remove('h-full');
        isChecked = 0;
    }
})