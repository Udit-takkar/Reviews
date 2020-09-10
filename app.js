var reviewData=[
    {
        "Photo":"Photos/sara.jpg",
        "name": "Sara Jones" ,
        "profession":"UI/Ux Designer",
        "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.aculis elit. Vestibulum vel lectus vestibulum, finibus augue ac, bibendum risus. Vestibulum finibus augue id enim blandit fringilla",

},
{
    "Photo":"Photos/Swanand.jpg",
    "name": "Swanand aggarwal" ,
    "profession":"Web Developer",
    "review":"Vestibulum vel lectus vestibulum, finibus augue ac, bibendum risus. Vestibulum finibus augue id enim blandit fringillaLorem ipsum dolor sit amet, consectetur adipiscing elit.aculis elit. ",

},
{
    "Photo":"Photos/Salim.jpg",
    "name": "Salim Ahmed" ,
    "profession":"Graphic Designer",
    "review":"Vestibulum vel lectus vestibulum, finibus augue ac, bibendum risus. Vestibulum finibus augue id enim blandit fringilla Lorem ipsum dolor sit amet, consectetur adipiscing elit.aculis elit.",

},
{
    "Photo":"Photos/John.jpg",
    "name": "John Doe" ,
    "profession":"App Developer",
    "review":"consectetur adipiscing elit.aculis elit Lorem ipsum dolor sit amet,Vestibulum vel lectus vestibulum, finibus augue ac, bibendum risus. Vestibulum finibus augue id enim blandit fringilla",

},

];

var i=0;


 var fullName=document.getElementById("fullName");
 var Profession=document.getElementById("profession");
 var Review=document.getElementById("review");

 var previousReview=document.querySelector(".previous");
 var nextReview=document.querySelector(".next");
 var surpriseReview=document.querySelector(".surprise");


nextReview.addEventListener('click',function(){
    if(i>=0 && i<3)
    {
        i++;
        document.getElementById("photo").src=reviewData[i].Photo;
        fullName.textContent=reviewData[i].name;
        Profession.textContent=reviewData[i].profession;
        Review.textContent=reviewData[i].review;
    }
})
previousReview.addEventListener('click',function(){
    
    if(i>0){
        i--;
        document.getElementById("photo").src=reviewData[i].Photo;
        fullName.textContent=reviewData[i].name;
        Profession.textContent=reviewData[i].profession;
        Review.textContent=reviewData[i].review;
    }
})
surpriseReview.addEventListener('click',function(){
    
    
        i=getRandomNumber();
        console.log(i);
        document.getElementById("photo").src=reviewData[i].Photo;
        fullName.textContent=reviewData[i].name;
        Profession.textContent=reviewData[i].profession;
        Review.textContent=reviewData[i].review;
    
})

function getRandomNumber(){
    return Math.floor(Math.random()*4);
}