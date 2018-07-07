$(document).ready(function(){
    var anterior;   
    $(".userRow").click(function(e){
        
        if($(e.target).hasClass("resaltado")){
            $(e.target).removeClass("resaltado");
            $(e.target).text('');
            $(e.target).attr("contentEditable", "false");
        }else{
            $(e.target).addClass("resaltado");    
            
        }

        if (typeof  anterior !== 'undefined') {
            if(anterior.text()==='' && anterior.hasClass('resaltado') && !anterior.is($(e.target)) ){
                anterior.removeClass("resaltado");  
            }
            
        }
        $(e.target).attr("contentEditable", "true");
        anterior = $(e.target);
    });
});