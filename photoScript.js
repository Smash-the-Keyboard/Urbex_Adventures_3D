#pragma strict

var raycastDist : float = 4;
var tagCheck : String = "Locationofinterest_Photograph";
var checkAllTags : boolean = false;
var cameravar : GameObject;
var canPhotograph = true;
var locationController : GameObject;
var locations = 0;
var totalLocations = 1;
var levelComplete = false;
var levelCompleteText : GameObject;

//pause for about 3 seconds during which the player may not photograph anything.

function Wait()
{
	canPhotograph = false;
	yield WaitForSeconds(3);
	canPhotograph = true;
}

//play the photograph sound

function Photograph()
{
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds(1.5);
	GetComponent.<AudioSource>().Stop();
}

function Update () {

	Debug.DrawRay(transform.position, Vector3.forward, Color.red, 20, true);
	var foundHit : boolean = false;
	var hit : RaycastHit;

	totalLocations = locationController.GetComponent(levelEnvironmentProfileScript).numberOfLocations;

    /* if the left mouse button is being pressed, and the camera is raised and ready, check if the player is looking at
    a location. If they are, photograph the location, untag the location, Wait(), and add 1 to the "locations" counter */

	if (Input.GetKey(KeyCode.Mouse0) && cameravar.gameObject.GetComponent(cameraScript).cameraReady == true && canPhotograph)
	{
		if (Physics.Raycast(transform.position, Vector3.forward, hit , raycastDist) && hit.transform.tag == tagCheck)
		{
			Photograph();
			hit.transform.tag = "Untagged";
			Wait();
			locations = locations + 1;
		}
	}

    /* if all the locations have been photographed and the level has not already been completed, enable the "levelCompleteText" and note that the level is complete. */

	if (locations == totalLocations && levelComplete == false)
	{
	    levelCompleteText.SetActive(true);
		levelComplete = true;
	}
}