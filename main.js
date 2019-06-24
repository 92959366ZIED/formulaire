function  a(){
    var nom = document.forms.myform.elements.nom.value;
    var Prenom = document.getElementById('Prenom').value;
    var Address = document.getElementById('Address').value;
    var mail = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var Comments = document.getElementById('Comments').value;
  
        if(nom === "")
        {
            alert("le nom est vide");
           
        }
        else if (nom.length < 3)
        {
            alert("min de nom 3 est caractère");
        } 
        else if (Prenom === "")
        {
            alert("le Prenom est vide"); 
        }
        else if (Prenom.length < 3)
        {  
            alert("min de Prenom 3 est caractère");
        }
        else if (Address === "")
        {
            alert("le Address est vide"); 
        }
        else if (Address.length < 8)
        {
            alert("min de Address 8 est caractère");
       
        }
        else if (mail === "")
        {
            alert("le mail est vide");
        }
        else if (mail.length < 3)
        {
            alert("min de mail 3 est caractère"); 
        }
        else if (!(mail.includes("@")))
        {
            alert("obligatoire de @"); 
        }
        else if (password === "")
        {
            alert("le password est vide"); 
        }
        else if (password.length < 8)
        {
            alert("min de password 8 est caractère"); 
        }
        else if (Comments === "")
        {
            alert("le Comments est vide"); 
        } 
        else if (Comments.length < 8)
        { 
            alert("min de Comments 8 est caractère"); 
        }
        else
        {
            alert('validée')
        }
   
}
// function ()

// if (validation === true) {
//     document.getElementById('nom').value = "";
//     document.getElementById('Prenom').value = "";
//     document.getElementById('Address').value = "";
//     document.getElementById('email').value = "";
//     document.getElementById('password').value = "";
//     document.getElementById('Comments').value = "";
//     alert("validation") 


// }
