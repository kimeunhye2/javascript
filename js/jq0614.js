// $.ajax(url,option);
// $.ajax('/data.xml',{
//     success:function(data){
//         $('body').append(data);
//         console.log(data);
//     }
// });
$.ajax('/data.txt',{
    success:function(data){
        $('body').append(data);
    }
});
// $.ajax('/data.json',{
//     success:function(data){
//         $('body').append(data);
//     }
// });

$.ajax({
    url:'/parameter',
    type:"GET",
    data:{
        name:"admin",
        region:"seoul"
    },
    success:function(data){
        $('body').append(data);
        console.log(data);
    }
});
// load
$('#one').load('/data.html')
$('#two').load('/parameter?name=이순신&region=seoul')
$('#sam').load('/data.xml')
$('#sa').load('/data.json') 
