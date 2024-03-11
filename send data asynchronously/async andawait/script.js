
var formdataurl="https://cpe-web-assignments.ucdavis.edu/formprocessing/processor.php";

const contactform=document.getElementById('myform');
contactform.addEventListener('submit',function(event){
    event.preventDefault();
    senddata();
});

/* function validateform(event){
    event.preventDefault();

    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const url=document.getElementById('url').value;
    const comments=document.getElementById('comments').value;

} */

async function senddata(){
    const data=new FormData(contactform);
    const fetchpromice=await fetch(formdataurl,{method:'POST',body:data});
    const content= await fetchpromice.text();
    document.getElementById('formdata').innerHTML=content;
    const fields= document.querySelectorAll('.data');
    fields.forEach(eachfield=>{ eachfield.value='';});
}