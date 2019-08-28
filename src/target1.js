let app=new PIXI.Application({
	 width:window.innerWidth,
	 height:window.innerHeight
	});

document.body.appendChild(app.view);

 
const containerQ1 = new PIXI.Container();
const containerQ2 = new PIXI.Container();
 
 
 
app.stage.addChild(containerQ1); //first stack
app.stage.addChild(containerQ2); // second stack 
 
cards=[]
for(let i=0;i<144;i++)
{

	let sp_player= new PIXI.Sprite.from('./img/leftstop.png');
	sp_player.anchor.set(0.5);

	sp_player.x=app.renderer.width*0.1+i*0.5 ;
	sp_player.y=app.renderer.height/2;
	 
 	 
	 cards.push(sp_player);

	 containerQ1.addChild(sp_player);
 
 

 }

let timer=0;
let gap=60;

var fps = new PIXI.Text('FPS : ' );
fps.x = 50;
fps.y = 50;
fps.style={fill: 0xffff00};

containerQ2.addChild(fps);

app.ticker.add((delta) => {

	fps.text='FPS: '+parseInt(app.ticker.FPS); // show FPS
	//console.log(app.ticker.FPS);
	timer+=1;
	
 	for(let i =0;i<cards.length; i++)
 	{
 		

 		if(timer>gap*i)
 		{
 			const card=cards[cards.length-1-i];  // find the top card from container1
 		  	containerQ1.removeChild (card); 
 		  	containerQ1.addChild(card);  //reverse cards
 			if(timer<gap*i+120)
			{
				card.x+=4;
			}
 
 		}
 	
 	}

        
});

 