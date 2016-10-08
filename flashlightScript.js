var on = false;
private var canSwitch = true;
var noiseLevelObject : GameObject;
var noiseLevelSwitch = 1;
var VANLLight = 3;
var VANLChanged = false;
var envController : GameObject;

//VANL stands for "visibility and noise level"

function Start()
{
    GetComponent.<Light>().intensity = 5;
    switch(envController.GetComponent(levelEnvironmentProfileScript).timeOfDay)
    {
        case "Night":
            VANLLight = VANLLight + 2;
            noiseLevelSwitch = noiseLevelSwitch + 1;
            break;
        case "Dawn":
            VANLLight = VANLLight + 1;
            break;
        case "Dusk":
            VANLLight = VANLLight + 1;
            break;
    }
}

function wait()
{
    canSwitch = !canSwitch;
    noiseLevelObject.gameObject.GetComponent(noiseBarScript).displayedSprite = noiseLevelObject.gameObject.GetComponent(noiseBarScript).displayedSprite + noiseLevelSwitch;
    yield WaitForSeconds(0.5);
    noiseLevelObject.gameObject.GetComponent(noiseBarScript).displayedSprite = noiseLevelObject.gameObject.GetComponent(noiseBarScript).displayedSprite - noiseLevelSwitch;
	canSwitch = !canSwitch;
}

function Update () 
{
	if (Input.GetKey(KeyCode.F) && canSwitch)
	{
		if(on)
		{
			GetComponent.<Light>().intensity = 0;
			GetComponent.<AudioSource>().Play();
			on = false;
			wait();
		}
		else
		{
			GetComponent.<Light>().intensity = 5;
			GetComponent.<AudioSource>().Play();
			on = true;
			wait();
		}
	}

	if(on && VANLChanged == false)
	{
	    noiseLevelObject.gameObject.GetComponent(noiseBarScript).displayedSprite = noiseLevelObject.gameObject.GetComponent(noiseBarScript).displayedSprite + VANLLight;
	    VANLChanged = true;
	}
	else if (on == false && VANLChanged)
	{
	    noiseLevelObject.gameObject.GetComponent(noiseBarScript).displayedSprite = noiseLevelObject.gameObject.GetComponent(noiseBarScript).displayedSprite - VANLLight;
	    VANLChanged = false;
	}
}