function validateForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name.length == "")
    {
      alert("nama tidak boleh kosong");
      return false;
    }
    else if(name.length < 3) 
    {
      alert("Nama Harus lebih dari 3 karakter");
      return false;
    } 

    // Email
    if(email == "")
    {
      alert("email harus diisi");
      return false;
    }
    else if(email.indexOf("@") == -1 || email.length < 6 || !email.split("@")[1].includes(".com")) 
    {
      alert("email harus mengandung '@' dan 'com'");
      return false;
    } 

    // Message
    if(message == "")
    {
      alert("pesan harus diisi");
      return false;
    }
    else if (message.split(' ').length < 3)
    {
      alert("pesan minimal terdiri dari 3 kata");
      return false;
    }
  };