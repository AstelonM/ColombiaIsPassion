window.addEventListener("load", MainHarta);

var containerStare=true;
var ancoreM=[];
var coordM=[];
var harta;
var marcaj=null;
var info=null;
var iframeHarta=null;

function MainHarta()
{
	coordonate();
	creareHarta();
	creareIframeHarta();
	var ancoreI=document.getElementsByClassName("creareI");
	var nrAncoreI=ancoreI.length;
	for(var i=0;i<nrAncoreI;i++)
		ancoreI[i].addEventListener("click",creareIframe);
	ancoreMPrim=document.getElementsByClassName("creareM");
	var nrAncoreM=ancoreMPrim.length;
	for(var i=0;i<nrAncoreM;i++)
	{
		ancoreM.push(ancoreMPrim[i]);
		ancoreM[i].addEventListener("click",creareMarcaj);
	}	
}

function creareIframe(e)
{
	if(containerStare==true)
	{
		var container=document.createElement("div");
		container.style.position="absolute";
		var w=Math.min(800,window.innerWidth);
		var h=Math.min(400,window.innerHeight);
		container.style.width=w+"px";
		container.style.height=h+"px";
		var x=e.pageX+20;
		var y=e.pageY-h;
		container.style.left=x+"px";
		container.style.top=y+"px";
		container.style.zIndex=2;
		container.id="iframeContainer";
		document.body.appendChild(container);
		var iframe=document.createElement("iframe");
		iframe.id="fr";
		iframe.name="Frame";
		iframe.src=e.target.href;
		iframe.addEventListener("mouseleave",distrugereIframe);
		container.appendChild(iframe);
		containerStare=false;
		e.preventDefault();
	}
}

function distrugereIframe(e)
{
	var iframe=e.target;
	var container=iframe.parentNode;
	iframe.parentNode.removeChild(iframe);
	container.parentNode.removeChild(container);
	containerStare=true;
}

function creareHarta()
{
	var divHarta=document.getElementById("divharta");
	if(divHarta!=null)
	{
		var optiuniHarta= 
		{
			center: new google.maps.LatLng(4.598056, -74.075833),
			zoom: 10,
			mapTypeId: google.maps.MapTypeId.HYBRID,
			mapTypeControlOptions:
			{
				position: google.maps.ControlPosition.TOP_CENTER
			}
		};
		harta=new google.maps.Map(divHarta, optiuniHarta);
	}
}

function creareMarcaj(e)
{
	var i=ancoreM.indexOf(e.target);
	if(marcaj!=null)
	{
		marcaj.setMap(null);
	}
	if(info!=null)
	{
		info.close();
	}
	marcaj=new google.maps.Marker({position: coordM[i]});
	marcaj.setMap(harta);
	harta.setCenter(coordM[i]);
	iframeHarta.src=e.target.href;
	var optiuniMarcaj=
	{
		content: iframeHarta
		//maxWidth: 800
	};
	info=new google.maps.InfoWindow(optiuniMarcaj);
	google.maps.event.addListener(marcaj, "click", function(){ info.open(harta,marcaj); });
	e.preventDefault();
}

function creareIframeHarta()
{
	iframeHarta=document.createElement("iframe");
	iframeHarta.style.width=800+"px";
	iframeHarta.style.height=500+"px";
}

function coordonate()
{
	coordM.push(new google.maps.LatLng(-4.219395, -69.935817)); 
	coordM.push(new google.maps.LatLng(6.248232, -75.580404));
	coordM.push(new google.maps.LatLng(7.087630, -70.757651));
	coordM.push(new google.maps.LatLng(10.963889, -74.796389));
	coordM.push(new google.maps.LatLng(4.627269, -74.106985));
	coordM.push(new google.maps.LatLng(10.4, -75.5));
	coordM.push(new google.maps.LatLng(5.533333, -73.366667));
	coordM.push(new google.maps.LatLng(5.069960, -75.518702));
	coordM.push(new google.maps.LatLng(1.615477, -75.604231));
	coordM.push(new google.maps.LatLng(5.334665, -72.396273));
	coordM.push(new google.maps.LatLng(2.444748, -76.614776));
	coordM.push(new google.maps.LatLng(10.465063, -73.252891));
	coordM.push(new google.maps.LatLng(5.692222, -76.658056));
	coordM.push(new google.maps.LatLng(8.75, -75.883333));
	coordM.push(new google.maps.LatLng(4.627269, -74.106985));
	coordM.push(new google.maps.LatLng(3.867021, -67.924994));
	coordM.push(new google.maps.LatLng(2.567732, -72.639718));
	coordM.push(new google.maps.LatLng(2.929659, -75.279882));
	coordM.push(new google.maps.LatLng(11.538428, -72.916761));
	coordM.push(new google.maps.LatLng(11.241944, -74.205278));
	coordM.push(new google.maps.LatLng(4.15, -73.633333));
	coordM.push(new google.maps.LatLng(1.207778, -77.277222));
	coordM.push(new google.maps.LatLng(7.894167, -72.503889));
	coordM.push(new google.maps.LatLng(1.15, -76.6475));
	coordM.push(new google.maps.LatLng(4.537070, -75.675824));
	coordM.push(new google.maps.LatLng(4.814278, -75.694558));
	coordM.push(new google.maps.LatLng(12.584722, -81.700556));
	coordM.push(new google.maps.LatLng(7.127265, -73.119209));
	coordM.push(new google.maps.LatLng(9.295, -75.396111));
	coordM.push(new google.maps.LatLng(4.433333, -75.233333));
	coordM.push(new google.maps.LatLng(3.420556, -76.522222));
	coordM.push(new google.maps.LatLng(1.257951, -70.234390));
	coordM.push(new google.maps.LatLng(6.188809, -67.482985));
}










