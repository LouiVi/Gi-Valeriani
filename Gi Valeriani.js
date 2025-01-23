cfg.Light;

app.LoadPlugin( "Utils" );
app.LoadPlugin( "Support" );
var animation = new Array();
//Called when application is started.
function OnStart()
{
	utils = app.CreateUtils(null);
	sup = app.CreateSupport();
  anim = sup.AnimationManager();
  
		//app.SetClipboardText( utils.GetMethods() );
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );
	lay.SetBackGradientRadial( 0.5, 0.5, 10, utils.RandomHexColor(true),utils.RandomHexColor(true),utils.RandomHexColor(true) );
p = utils.RandomIntegerRange(1, 14);
	//Create a text label and add it to layout.
	img = app.CreateImage("Img/" + p + ".png",1, -1,"Fix,Resize,Button,ScaleCenter", 320,240);//Resize");
	lay.AddChild( img )
	
	//Add layout to app.	
	app.AddLayout( lay )
	setInterval(SwapPic, 2750);
}

function SwapPic()
{
lay.SetBackGradientRadial( 0.5, 0.5, 10, utils.RandomHexColor(true),utils.RandomHexColor(true),utils.RandomHexColor(true) );
	p = utils.RandomIntegerRange(1, 14);
	//if(p==10) p = "Adriana Cataño";
	//img.Animate(  )
	animation = anim.keys;//"" +anim.keys.split(",");
	//[0, anim.keys + "".split(",").length];
	//alert(an);
	an = animation[utils.RandomIntegerRange(0, animation.length)];
	an2 = animation[utils.RandomIntegerRange(0, animation.length)];
	//app.ShowPopup( an )
	sup.PlayAnim( lay, an2, 445);
	sup.PlayAnim( img, an, 2645);
	img.SetImage( "Img/" + p + ".png", img.GetWidth(), img.GetHeight(), "Fix,Resize,Button,ScaleCenter");
	img.SetName( "Img/" + p + ".png" );
	//HidePic();
}

function HidePic()
{
app.ShowPopup( "HidePic" );
	w1 =	img.GetAbsWidth();
	//w2 =	img.GetWidth();
	h1 =	img.GetAbsHeight();
	for(x=w1;x>0;x--){
		for(y=h1;y>0;y--){
			img.SetImage( img.GetName(), x, y );
		}
	}
	img.Animate( an2, null, 250 );
	//h2 =	img.GetHeight();
	//app.ShowPopup( "w1: " + w1 + ", w2: " + w2 + ", h1: " + h1 + ", h2: " + h2 )
}