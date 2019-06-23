function  a(){
    var nom = document.getElementById('nom').value;
    var Prenom = document.getElementById('Prenom').value;
    var Address = document.getElementById('address').value;
    var mail = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var Comments = document.getElementById('Comments').value;
    let validation= true
    if( nom === "")
        {
            alert("le nom est vide");
            ok = false
        }
        else
        
        if (nom.length < 3)
        {
            alert("min de nom 3 est caractère"); validation = false
        } 
    

    if (Prenom === "")
    {
        alert("le Prenom est vide"); validation = false;
    }
        else
        if (Prenom.length < 3)
        {  
            alert("min de Prenom 3 est caractère"); validation = false
        }
        

    if (Address === "")
    {
        alert("le Address est vide"); validation = false
    }
        else
        if (Address.length < 8)
        {
            alert("min de Address 8 est caractère"); validation = false;
       
        }

    if (mail === "")
    {
        alert("le mail est vide"); ok = false
    }
        else
        {
        if (mail.length < 3)
        {
            alert("min de mail 3 est caractère"); validation = false
        }
            else
            if (!(mail.includes("@")))
            {
                alert("obligatoire de @"); validation = false;
            }
        }

    if (password === "")
    {
        alert("le password est vide"); validation = false;
    }
        else
        {
            if (password.length < 8)
            {
                alert("min de password 8 est caractère"); validation = false
            }
           
        }
        

    if (Comments === "")
    {
        alert("le Comments est vide"); validation = false;
    } 
        else
        {
            if (Comments.length < 8)
            { 
                alert("min de Comments 8 est caractère"); validation = false
            }
        

        }
   
}
function ()

if (validation === true) {
    document.getElementById('nom').value = "";
    document.getElementById('Prenom').value = "";
    document.getElementById('Address').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('Comments').value = "";
    alert("validation") 


}
