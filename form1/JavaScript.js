$(document).ready(function(){
    $(".tabLinks").click(function(){
        $(".tabContent").hide();
        $(".tabLinks").removeClass("activeBtn");
    })

    $("#tab1").click(function(){
        $("#tab1").addClass("activeBtn");
    })
    $("#tab2").click(function(){
        $("#tab2").addClass("activeBtn");
        
    })
    $("#tab3").click(function(){
        $("#tab3").addClass("activeBtn");
    })
    $("#tab4").click(function(){
        $("#tab4").addClass("activeBtn");
    })
    $("#tab1").click(function(){
        $("#personality").css('display','block');
    })
    $("#tab2").click(function(){
        $("#education").css('display','block');
    })
    $("#tab3").click(function(){
        $("#experience").css('display','block');
    })
    $("#tab4").click(function(){
        $("#skills").css('display','block');
    })
    
    $("#checkbox").click(function(){
        $("#experience .input").toggle();
        $(".reason").toggle();
    })

})