

/*Image Section*/

function Image(){
    document.getElementById("data_img").style.display="block";
    document.getElementById("data_place").style.display="none";
    document.getElementById("data_video").style.display="none";   
}

function OpenLocal(){
    document.getElementById("LocalParams").style.display="block";
}

function OpenAdvance(){
    document.getElementById("Profile_Pics").style.display="block";
}

function CloseAdvance(){
    document.getElementById("Profile_Pics").style.display="none";
}

function CloseLocal(){
    document.getElementById("LocalParams").style.display="none";
}

//End Image Section

function Map(){
    document.getElementById("data_place").style.display="block";
    document.getElementById("data_img").style.display="none";
    document.getElementById("data_video").style.display="none";
}

function Video(){
    document.getElementById("data_video").style.display="block";
    document.getElementById("data_img").style.display="none";
    document.getElementById("data_place").style.display="none";
}

function None(){
    document.getElementById("imageL").innerHTML="";
    document.getElementById("imageN").innerHTML="";
    document.getElementById("data_img").style.display="none";
    document.getElementById("data_place").style.display="none";
    document.getElementById("data_video").style.display="none";
}
