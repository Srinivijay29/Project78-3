var images=["https://webstockreview.net/images/father-clipart-10.jpg","https://cdn5.vectorstock.com/i/1000x1000/45/09/cute-cartoon-of-a-young-mother-vector-4414509.jpg", "https://image.shutterstock.com/image-vector/little-boy-son-character-260nw-1101689993.jpg"];
var names=["T.G.Vjayaraghavan","R.Geetha","V.Sriniranjan"];
var i=0;
function next(){
    i++;
    var number_of_family_members=3;
    if(i>number_of_family_members){
        i=0;

    }
var updatedimage=images[i];
var updatedname=names[i];
document.getElementById("family").src=updatedimage;
document.getElementById("family_member_name").innerHTML=updatedname;
}

