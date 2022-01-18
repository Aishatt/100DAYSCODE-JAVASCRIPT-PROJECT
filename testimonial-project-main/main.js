(function(){
    const buttons = document.querySelectorAll('.btn')
 const cardimg = document.querySelector('.cardimg')
 const cardname = document.querySelector('.name');
 const cardtext = document.querySelector('.text')
 const cardage = document.querySelector('.age')
 let index = 0;

 const info = []
 //create client info for (image name and text ) //create a class callled info
 function Info(img, name, text,age) {
     this.img = img
     this.name = name
     this.text = text
     this.age=age
 }
 // create new info using constructor function and push into our empty array
 function createInfo(img,name,text,age) {
     let image = `img/customer-${img}.jpg`; //tick is used wen using a variable
     let customer = new Info(image, name, text,age);
     info.push(customer)
 }
 // constructor= array()
 createInfo(0, 'John',
     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?','23'
     )
 createInfo(1, 'Sandy',
     'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock','23'
     )
 createInfo(2, 'Amy',
     'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.','23'
     )
 createInfo(3, 'Tyrell',
     'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.','23'
     )
 createInfo(4, 'Wanda',
     'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','23'
     );
     buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            if (e.target.parentElement.classList.contains('btnleft')){
                 if(index===0){
                     index=info.length
                 }
                 index--
                 cardimg.src=info[index].img
                 cardname.textContent=info[index].name
                 cardtext.textContent=info[index].text
                 cardage.textContent=info[index].age

             };
             if(button.classList.contains('btnrgt')){
                index++
                 if(index===info.length){
                     index=0
                 }
                 
                 cardimg.src=info[index].img
                 cardname.textContent=info[index].name
                 cardtext.textContent=info[index].text
                 cardage.textContent=info[index].age
             }
         })
     })   
 })();