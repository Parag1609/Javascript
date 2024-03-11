var formdataurl="https://cpe-web-assignments.ucdavis.edu/formprocessing/processor.php";
$('#formdata').load(formdataurl);

$('#myform').validate();

$('#myform').submit(function(evt){
    evt.preventDefault();

    if($('#myform').valid()==true){
        var datastring=$(this).serialize();
        //console.log(datastring);
        $.ajax({
            type:'POST',
            url: formdataurl,
            data:datastring,
            success:function(data){
                $('#formdata').html(data);
                $('#myform').clearform();
            }
        });
    }
});

$.fn.clearform= function(){
    return this.each(function(){

        var type=this.type;
        var tag=this.tagName.toLowerCase();

        if(tag=='form'){
            return $(':input',this).clearform();
        }
        if(type=='text'||type=='password'||type=='email'||type=='url'||tag=='textarea'){
            this.value='';
        }
        else if(type=='checkbox'||type=='radio'){
            this.checked=false;
        }
        else if(tag=='select'){
            this.selectedIndex=-1;
        }
    });
}