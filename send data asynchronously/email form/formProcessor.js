
const emailformprocessor='https://cpe-web-assignments.ucdavis.edu/formprocessing/emailprocessor.php';
const contactform=document.getElementById('contactform');
contactform.addEventListener('submit',validateform);

const feedbackmessage=[
   ' <div class="error"><h3>Oops!</h3><p>The name field is required, that\'s how I know who you are. Please fix that and try again!</p></div>',

    '<div class="error"><h3>Oops!</h3><p>You forgot to give me a valid email address. Please fix that and try again!</p></div>',    

    '<div class="error"><h3>Oops!</h3><p>Somehow you forgot to type in your comment. Please type in your comment and try again!</p></div> ',
      
 '<div class="success"><h3>Thanks!</h3><p>Your thoughts have been sent, and I look forward to reading them.</p></div>',  
  
  '<div class="preloader"><div class="loading-dot"></div></div>'
]

function validateform(event){
    event.preventDefault();

    const namefield=document.getElementById('name');
    const emailfield=document.getElementById('email');
    const commentfield=document.getElementById('comment');

    const rename=/^[a-zA-Z]+ [a-zA-Z]+$/;
    const remail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let errors=0;

    if(!rename.test(namefield.value)){
        displaymessage(namefield,feedbackmessage[0]);
        errors++;
    }
    else if(!remail.test(emailfield.value)){
        displaymessage(emailfield, feedbackmessage[1]);
        errors++;
    }
    else if(commentfield.value==''){
        displaymessage(commentfield,feedbackmessage[2]);
        errors++;
    }
    else if(errors===0){
        senddata();
    }
}

    function displaymessage(field,message){
        document.getElementById('message').className='show-message';
        document.getElementById('message').innerHTML=message;
        setTimeout(function(){
            document.getElementById('message').classList.add('fadeOutElement');
            setTimeout(function(){
                if(field!='success'){
                document.getElementById('message').className='hide-message';
                document.getElementById(field.id).focus();
                }
                else{
                    document.getElementById('message').className='hide-message';
                    document.getElementById('name').value='';
                    document.getElementById('email').value='';
                    document.getElementById('comment').value='';
                }
            },2000);
        },2000);
    }

    function senddata(){
        document.getElementById('message').className='show-message';
        document.getElementById('message').innerHTML=feedbackmessage[4];
        setTimeout(async function(){
            const formdata=new FormData(contactform);
            const fetchPromise=await fetch(emailformprocessor,{method:'POST',body:formdata});
            const content=await fetchPromise.json();
            console.log(content.result);
            if(content.result=='success'){
                displaymessage('success',feedbackmessage[3]);
            }
        },2000); 
    }