#pragma strict

var cameraReady = false;
private var canRaise = true;
var cameraOverlay : GameObject;
var infoPanel : GameObject;

function Start () 
{
	
}

function wait()
{
	canRaise = false;
	yield WaitForSeconds(1);
	canRaise = true;
}

function Update () 
{	
	if (Input.GetKey(KeyCode.C) && canRaise)
	{
		if (cameraReady)
		{
		    GetComponent.<Transform>().Translate(Vector3.down * 1);
		    cameraOverlay.SetActive(false);
		    infoPanel.SetActive(true);
			cameraReady = false;
			wait();
		}
		else
		{
		    GetComponent.<Transform>().Translate(Vector3.up * 1);		    
		    cameraOverlay.SetActive(true);
		    infoPanel.SetActive(false);
			cameraReady = true;
			wait();
		}
	}
}