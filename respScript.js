#pragma strict

var maskOn = false;
var canMask = true;
var breathSource : AudioSource;
var maskOnSource : AudioSource;
var maskOffSource : AudioSource;
var VANLObject : GameObject;
var VANLResp = 1;
var VANLChanged = false;
var envController : GameObject;

//VANL stands for "Visual and Noise Level"

function Start () {
    if (envController.GetComponent(levelEnvironmentProfileScript).raining)
    {
        VANLResp = VANLResp - 1;
    }
    if (envController.GetComponent(levelEnvironmentProfileScript).timeOfDay == "Night")
    {
        VANLResp = VANLResp + 1;
    }
}

function Wait(){
    canMask = false;
    yield WaitForSeconds(3);
    canMask = true;
}

function MaskOn(){
    maskOnSource.Play();
    yield WaitForSeconds(1);
    breathSource.Play();
}

function MaskOff(){
    maskOffSource.Play();
    breathSource.Stop();
}

function Update () {
    if (Input.GetKey(KeyCode.R) && canMask && maskOn == false){
        maskOn = true;
        MaskOn();
        Wait();
    }

    else if ((Input.GetKey(KeyCode.R) && canMask && maskOn)){
        maskOn = false;
        MaskOff();
        Wait();
    }

    if (maskOn && VANLChanged == false)
    {
        VANLObject.gameObject.GetComponent(noiseBarScript).displayedSprite = VANLObject.gameObject.GetComponent(noiseBarScript).displayedSprite + VANLResp;
        VANLChanged = true;
    }
    else if (maskOn == false && VANLChanged)
    {
        VANLObject.gameObject.GetComponent(noiseBarScript).displayedSprite = VANLObject.gameObject.GetComponent(noiseBarScript).displayedSprite - VANLResp;
        VANLChanged = false;
    }
}