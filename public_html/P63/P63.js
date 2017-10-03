var registryper = {};
var resgistryfa = {};
var registryjob = {};
var registrypro = {};

$("#ocult").hide();
$("#per").click(()=>{
  $("#ocult").show();
  $("#vol").click(()=>{
    registryper={
      name: $("#name").val(),
      phone: Number($("#phone").val()),
      addres: $("#addres").val(),
      email: $("#email").val()
    };
    $("#ocult").hide();
    });
});


$("#ocult1").hide();
$("#refa").click(()=>{
  $("#ocult1").show();
  $("#vole").click(()=>{
    registryfa={
    name: $("#name1").val(),
    work: $("#work").val(),
    phone: $("#tel").val(),
    addres: $("#addres1").val()
    };
    $("#ocult1").hide();
  });
});


$("#ocult2").hide();
$("#retra").click(()=>{
  $("#ocult2").show();
  $("#volv").click(()=>{
    registryjob={
      name: $("#name2").val(),
      work: $("#work1").val(),
      phone: Number($("#tele").val()),
      addres: $("#addres2").val()
    };
    $("#ocult2").hide();
  });
});

$("#ocult3").hide();
$("#profi").click(()=>{
  $("#ocult3").show();
  $("#volve").click(()=>{
    registrypro={
      profile: $("#profile").val()
    };
    $("#ocult3").hide();
  });
});

$("#print").on("click", ()=>{
  $("#ko").modal();
  var title = ("Personal Information:");
  var a = ("Name: " + registryper.name);
  var b = ("Phone: " + registryper.phone);
  var c = ("Addres: " + registryper.addres);
  var d = ("E-mail: " + registryper.email);

  var title1 = ("family Reference:");
  var e = ("Name: " + registryfa.name);
  var f = ("Work: " + registryfa.work);
  var g = ("Phone: " + registryfa.phone);
  var h = ("Addres: " + registryfa.addres);

  var title2= ("Reference Job:");
  var i = ("Name: " + registryjob.name);
  var j = ("Work: " + registryjob.work);
  var k = ("Phone: " + registryjob.phone);
  var l = ("Addres: " + registryjob.addres);

  var title3= ("Professional Profile:");
  var m = ("Profile:" + registrypro.profile);
  $("#rest").html(title+"<br>"+a+"<br>"+b+"<br>"+c+"<br>"+d+"<br>"+"<br>"+title1+"<br>"+e+"<br>"+f+"<br>"+g+"<br>"+h+"<br>"+"<br>"+title2+"<br>"+i+"<br>"+j+"<br>"+k+"<br>"+l+"<br>"+"<br>"+title3+"<br>"+m);
});