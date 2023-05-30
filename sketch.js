var viajante;
var viajanteImage;

var atiradores;
var atiradores1;
var atiradoresImage;

var escambaia;
var escambaia1;
var escambaia2;
var escambaia3;
var escambaiaImage;

var morcegos;
var morcego1;
var morecgo2;
var morcegosImage;

var estrela;
var estrela01;
var estrela02;
var estrelaImage;

var ponto;
var ponto1;
var pontosGroup;
var pontos1Group;
var pontoImage;
var moeda;
var moedasGroup;
var moedaImage;

var contador;
var contadorImage;

var estrela0;
var estrela0Image;
var estrela1;
var estrela1Image;
var estrela2;
var estrela2Image;
var estrela3;
var estrela3Image;

var fundo;
var fundoImage;
var paredeDireita;
var paredeEsquerda;

var vida=5;


function preload(){
	viajanteImage=loadImage("viajante.png");
	morcegosImage=loadAnimation("morcego1.png","morcego2.png","morcego3.png","morcego4.png");
	atiradoresImage= loadAnimation("atirador1.png","atirador2.png","atirador3.png");
	escambaiaImage=loadAnimation("escambaia1.png","escambaia2.png","escambaia3.png","escambaia4.png");
	estrelaImage=loadAnimation("estrela.png");
	pontoImage=loadAnimation("ponto.png");
	moedaImage=loadAnimation("moeda.png");
	contadorImage=loadImage("contador.png");
	estrela0Image=loadImage("estrela0.png");
	estrela1Image=loadImage("estrela1.png");
	estrela2Image=loadImage("estrela2.png");
	estrela3Image=loadImage("estrela3.png");
	fundoImage=loadImage("fundo1.png");
}

function setup() {
	createCanvas(800, 800);

	//Crie os Corpos aqui.
	pontosGroup= new Group();
	pontos1Group= new Group();

	fundo= createSprite(400,400);
	fundo.addAnimation("fundo",fundoImage);
	fundo.scale=0.78;

	viajante= createSprite(750,760)
	viajante.addAnimation("viajante",viajanteImage);
	viajante.scale=0.07;

	morcegos= createSprite(700,400);
	morcegos.addAnimation("morcegos",morcegosImage);
	morcegos.scale=0.08; 
	morcegos.velocityX=2; 

	morcegos1= createSprite(700,330);
	morcegos1.addAnimation("morcegos",morcegosImage);
	morcegos1.scale=0.08;  
	morcegos1.velocityX=-2; 

	morcegos2= createSprite(700,260);
	morcegos2.addAnimation("morcegos",morcegosImage);
	morcegos2.scale=0.08;  
	morcegos2.velocityX=2; 

	atiradores= createSprite(745,520);
	atiradores.addAnimation("atiradores", atiradoresImage);
	atiradores.scale=0.15;  
	atiradores.frameDelay=20;

	atiradores1= createSprite(745,600);
	atiradores1.addAnimation("atiradores", atiradoresImage);
	atiradores1.scale=0.15;  
	atiradores1.frameDelay=20;

	estrela=createSprite(590,470);
	estrela.addAnimation("estrela",estrelaImage);
	estrela.scale=0.08;

	estrela01=createSprite(680,215);
	estrela01.addAnimation("estrela",estrelaImage);
	estrela01.scale=0.08;

	estrela02=createSprite(460,400);
	estrela02.addAnimation("estrela",estrelaImage);
	estrela02.scale=0.08;

	escambaia= createSprite(430,400);
	escambaia.addAnimation("escambaia", escambaiaImage);
	escambaia.scale=0.2;  
	escambaia.frameDelay=20;

	escambaia1= createSprite(490,600);
	escambaia1.addAnimation("escambaia", escambaiaImage);
	escambaia1.scale=0.2;  
	escambaia1.frameDelay=20;

	escambaia2= createSprite(330,500);
	escambaia2.addAnimation("escambaia", escambaiaImage);
	escambaia2.scale=0.2;  
	escambaia2.frameDelay=20;

	escambaia3= createSprite(320,300);
	escambaia3.addAnimation("escambaia", escambaiaImage);
	escambaia3.scale=0.2;  
	escambaia3.frameDelay=20;

	moeda=createSprite(700,400);
	moeda.addAnimation("moeda",moedaImage);
	moeda.scale=0.1;

	contador=createSprite(100,50);
	contador.addAnimation("contador",contadorImage);
	contador.scale=0.15;

	estrela0=createSprite(400,50);
	estrela0.addAnimation("estrela0",estrela0Image);
	estrela0.scale=0.2;

	paredeDireita=createSprite(600,325,2,200);

	paredeEsquerda= createSprite(775,325,2,200);

}


function draw() {
  background(0);
  
  drawSprites();

  textSize(30);
  fill("yellow");
  text("0",130,65);
  text("vidas:"+vida,140,65)

  if(keyDown("LEFT_ARROW")){
	viajante.x-=5
  }
  if(keyDown("RIGHT_ARROW")){
	viajante.x+=5
  }
  if(keyDown("UP_ARROW")){
	viajante.y-=5
  }
  if(keyDown("DOWN_ARROW")){
	viajante.y+=5
  }

  if(viajante.isTouching(morcegos)||viajante.isTouching(morcegos1)||viajante.isTouching(morcegos2)||viajante.isTouching(escambaia)||viajante.isTouching(escambaia1)||viajante.isTouching(escambaia2)||viajante.isTouching(escambaia3)){
	vida-=1;
	viajante.x=750;
	viajante.y=760;
  }

  if(morcegos.isTouching(paredeEsquerda)){
	morcegos.velocityX=-2;
  }
  if (morcegos.isTouching(paredeDireita)){
	morcegos.velocityX=2;
  }
  if(morcegos1.isTouching(paredeDireita)){
	morcegos1.velocityX=2;
  }
  if (morcegos1.isTouching(paredeEsquerda)){
	morcegos1.velocityX=-2;
  }
  if(morcegos2.isTouching(paredeEsquerda)){
	morcegos2.velocityX=-2;
	}
  if (morcegos2.isTouching(paredeDireita)){
	morcegos2.velocityX=2;
	}

	atirar();
	atirar1();
}

function atirar(){
	
	if(frameCount%45===0){
		ponto=createSprite(745,520);
		ponto.addAnimation("ponto",pontoImage);
		ponto.scale=0.1;
		ponto.velocityX=-6;
		ponto.setCollider("rectangle",0,0,40,40);
		ponto.lifetime=30;
		pontosGroup.add(ponto);

	}
}

function atirar1(){
	
	if(frameCount%45===0){
		ponto1=createSprite(745,600);
		ponto1.addAnimation("ponto",pontoImage);
		ponto1.scale=0.1;
		ponto1.velocityX=-6;
		ponto1.setCollider("rectangle",0,0,40,40);
		ponto1.lifetime=30;
		pontos1Group.add(ponto1);

	}
}