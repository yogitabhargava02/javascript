prompt("Name of person one:");
prompt("Name of Person two:");

var friendship_Score = Math.random() * 100;
friendship_Score = Math.floor(friendship_Score )+1;
if(friendship_Score >80){
    alert("Your friendship Score  is " + friendship_Score + "% "+ " You are Best Friends");
}
    if(friendship_Score >30 && friendship_Score <80){
         alert("Your friendship Score  is " + friendship_Score + "% ");

    }
if(friendship_Score<=30){
     alert("Your friendship Score  is " + friendship_Score + "%"+" Your friendship is like oil and water");
}
