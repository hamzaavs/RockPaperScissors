function play() {
	
    const roles = ["Rock", "Paper", "Scissors"];
    const random =  Math.floor(Math.random() * 3);
    
    const result = roles[random];
    
    document.getElementById("result").innerText = result;
  
    var login= document.getElementById("login").value;

     if(login=="Rock" && result=="Paper") {

        document.getElementById("false1").innerHTML="kaybettiniz :(";

    }
    else if (login=="Paper" && result=="Scissors") {

        document.getElementById("false2").innerHTML="kaybettiniz :(";

    }
	  else if (login=="Scissors" && result=="Rock") {

        document.getElementById("false3").innerHTML="kaybettiniz :(";

    }
    else if (login=="Paper" && result=="Rock") {

        document.getElementById("true1").innerHTML="kazandınız ";

    }
    else if (login=="Rock" && result=="Scissors") {

        document.getElementById("true2").innerHTML="kazandınız ";

    }
    else if (login=="Scissors" && result=="Paper") {

        document.getElementById("true3").innerHTML="kazandınız ";
        
    }
    else if(result==login){

        document.getElementById("draw").innerHTML="tekrar deneyiniz.Sonuç berabere";

    }
   
}