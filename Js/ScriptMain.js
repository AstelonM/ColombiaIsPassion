window.addEventListener("load", MainProiect);

var luni=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var ziSapt=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function MainProiect()
{
	timp();
	var sageti=document.getElementsByClassName("sageata");
	var nrsageti=sageti.length;
	for(var i=0;i<nrsageti;i++)
		sageti[i].onclick=toggleDisplay;
}

function timp()
{
	var data=document.getElementById("data");
	var datar=new Date();
	var zi1=ziSapt[datar.getDay()];
	var zi2=datar.getDate();
	var luna=luni[datar.getMonth()];
	var an=datar.getFullYear();
	var h=datar.getHours();
	var m=datar.getMinutes();
	if(m<10)
		m="0"+m;
	var s=datar.getSeconds();
	if(s<10)
		s="0"+s;
	data.innerHTML=zi1+" "+zi2+"-"+luna+"-"+an+" "+h+":"+m+":"+s;
	setTimeout(timp,1000);
}

function toggleDisplay(e)
{
	var img=e.target;
	var urm=e.target.parentElement.nextElementSibling;
	if(img.src.includes("ArrUp.png"))
	{
		urm.style.display="none";
		img.src="Imagini/ArrDown.png";
	}	
	else
	{
		if(urm.className=="gallerycontainer")
			urm.style.display="flex";
		else
			urm.style.display="block";
		img.src="Imagini/ArrUp.png";
	}	
}