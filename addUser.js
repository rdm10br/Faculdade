var uName,pswrD;

function addUser()
{
   uName = document.getElementById('UN').value;
  pswrD =  document.getElementById('pswrd').value;
    if (uName == "" && pswrD  == "")
    {
        alert('Por favor cadastre seu nome e sua senha !');
        return false;
    }
    else
    {
        alert("Seus dados estão incompletos")
    }

}