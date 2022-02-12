
function ValidateFirstName(x) 
{
    if (!x.match(/^[a-zA-Z]+$/)) 
    {
      $(".first-error").html("<p>Only alpabets are allowed.</p> ");
      document.getElementById("first").style.border= "3px solid red";
    }
}
function ValidateEmail(y) 
{
    if (!y.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) 
    {
      $(".email-error").html("<p>Invalid email id.</p> ");
      document.getElementById("email").style.border= "3px solid red";
    }
   
}
function ValidateLastName(z) 
{
    if (!z.match(/^[a-zA-Z]+$/)) 
    {
      $(".last-error").html("<p>Only alpabets are allowed.</p> ");
      document.getElementById("last").style.border= "3px solid red";
    }
  
}
function ValidatePhone(p) 
{
    if (!p.match(/^[0-9+]+$/)) 
    {
      $(".phone-error").html("<p>Only numbers are allowed.</p> ");
      document.getElementById("phone").style.border= "3px solid red";
    }
   
}
function ValidateURL(u)
{
   if(!u.match(/https?:\/\/w{0,3}\w*?\.(\w*?\.)?\w{2,3}\S*|www\.(\w*?\.)?\w*?\.\w{2,3}\S*|(\w*?\.)?\w*?\.\w{2,3}[\/\?]\S*/))
   {
      $(".url-error").html("<span>Invalid URL.</span> ");
      document.getElementById("url").style.border= "3px solid red";
   }
   else 
   {
      count=count+1;
   }
}

$( ".btn" ).click(function() {
    
   var count=0;
   //validate first name
   var x=document.getElementById("first").value;
   if(x=="")
   {
      $(".first-error").html("<p>First Name is Mandatory.</p> ");
      document.getElementById("first").style.border= "3px solid red";
   }
   else 
   {
   ValidateFirstName(x);  
   count=count+1;
   }
    //validate last name
    var y=document.getElementById("last").value;
    if(y=="")
    {
       $(".last-error").html("<p>Last Name is Mandatory.</p> ");
       document.getElementById("last").style.border= "3px solid red";
    }
    else 
    {
      ValidateLastName(y);  
      count=count+1;
    }
     
    //validate email
     var z= document.getElementById("email").value;
     if (z=="")
     {
      $(".email-error").html("<p>Email id is Mandatory.</p> ");
      document.getElementById("email").style.border= "3px solid red";
     }
     else
     {
      ValidateEmail(z);
      count=count+1;
     }
   
     //validate phone number
     var p= document.getElementById("phone").value;
     if (p=="")
     {
      $(".phone-error").html("<p>Phone No is mandatory.</p> ");
      document.getElementById("phone").style.border= "3px solid red";
     }
     else
     {
      ValidatePhone(p);
      count=count+1;
     }
    
     // Validating radio 
     var q= document.getElementsByName("inlineRadioOptions");
     var formValid = false;
    var i = 0;
     while (!formValid && i < q.length) {
         if (q[i].checked) formValid = true;
         i++;        
     }
     if (!formValid)
     { 
      $(".option-error").html("<span>Must check some option!</span>");
     }
     count=count+1;
  
     // making url mandatory
     if(document.getElementById('inlineRadio1').checked == true) 
     {   
       var u= document.getElementById("url").value;
         if (u=="")
         {
          $(".url-error").html("<span>Website is mandatory.</span> ");
         document.getElementById("url").style.border= "3px solid red";
         }
         else
         {
         ValidateURL(u);
         }
      }
      if(document.getElementById('inlineRadio2').checked == true) 
     {   
         count=count+1;
      }
     if(count==6)
    {
       alert("Form Submitted Successfully!");
    }
 });

 
 
