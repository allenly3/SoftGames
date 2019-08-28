let app=new PIXI.Application({
	 width:window.innerWidth,
	 height:window.innerHeight,
	 backgroundColor: 0x1099bb

	});

document.body.appendChild(app.view);


const containerTitle=  new PIXI.Container();
var txt=new PIXI.Text("Target 2");
txt.x=10;				 
txt.y=10;
txt.style={fill: 0xffff00};
 

containerTitle.addChild(txt);



const container=  new PIXI.Container();
app.stage.addChild(container);
app.stage.addChild(containerTitle);

 
 

var timer=0;
app.ticker.add((delta) => {

timer+=1;
 	

 //console.log(randomPattern());

        if(timer==120)
        {
       
        	//console.log(container.children.length);
        	while(container.children.length>0)
        	{
        		 var child = container.getChildAt(0)﻿; 
        		 container.removeChild(child);
        	}
        	var pt=randomPattern();
        	//console.log(app.renderer.width/2*0.8);
         	
         	for(let i=0;i<pt.length;i++)
         	{
         		if(i==0)
         		{
         		if(pt[0]==0) // if it is img
        		{
        			const img= new PIXI.Sprite.from('./img/dollar.png');
					img.anchor.set(0.5);

				 	img.y=window.innerHeight/2;
					img.scale.set(0.1);
        			img.x=app.renderer.width/2*0.7;
        			container.addChild(img);
        		}
        		else   // if it is text
        		{
        			var txt=new PIXI.Text(randomText());
					 
					txt.y=window.innerHeight/2;
					txt.style={fill: 0xf21202};
					txt.anchor.set(0.5)
					txt.scale.set(Math.random()+0.4);
				 

        			txt.x=app.renderer.width/2*0.7;
        			container.addChild(txt);
        		}
			}

			if(i==1)
			{



        		if(pt[1]==0) // if it is img
        		{
        			const img= new PIXI.Sprite.from('./img/dollar.png');
					img.anchor.set(0.5);

				 	img.y=window.innerHeight/2;
					img.scale.set(0.1);        			
        			img.x=app.renderer.width/2 ;
        			container.addChild(img);
        		}
        		else   // if it is text
        		{
        			var txt=new PIXI.Text(randomText());
					 
					txt.y=window.innerHeight/2;
					txt.style={fill: 0xf21202};
					txt.anchor.set(0.5)  
					txt.scale.set(Math.random()+0.4);      			
        			txt.x=app.renderer.width/2 ;
        			container.addChild(txt);
        		}
        	}

        	if(i==2)
        	{



        		if(pt[2]==0) // if it is img
        		{
         			const img= new PIXI.Sprite.from('./img/dollar.png');
					img.anchor.set(0.5);

				 	img.y=window.innerHeight/2;
					img.scale.set(0.1);       			
        			img.x=app.renderer.width/2*1.3;
        			container.addChild(img);
        		}
        		else   // if it is text
        		{
        			var txt=new PIXI.Text(randomText());
					 
					txt.y=window.innerHeight/2;
					txt.style={fill: 0xf21202};
					txt.anchor.set(0.5)      
					txt.scale.set(Math.random()+0.4);  			
        			txt.x=app.renderer.width/2*1.3;
        			container.addChild(txt);
        		}
        	}

         	

         	}
       
         	timer=0;
        }


});



function randomText() {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var length           = parseInt(Math.random()*10)+2;
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


function randomPattern()
{
	let a =[];
	for(let i=0;i<3;i++)
	{
		let pattern=( parseInt(Math.random() * 10))%2;  // 0 stands for img, 1 stands for txt
		a.push(pattern);		
	}


	return a;

}