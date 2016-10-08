var locationScript : GameObject;
var locations = 0;
var totalLocations = 2;
var locationsString = locationScript.gameObject.GetComponent(photoScript).locations.ToString();
var totalLocationsString = locationScript.gameObject.GetComponent(photoScript).totalLocations.ToString();
var locationsPhotographed : String;

function Update()
{
	var locationsString = locationScript.gameObject.GetComponent(photoScript).locations.ToString();
	var totalLocationsString = locationScript.gameObject.GetComponent(photoScript).totalLocations.ToString();
	locationsPhotographed = "Locations: " + locationsString + "/" + totalLocationsString;
	this.transform.GetComponent.<UnityEngine.UI.Text>().text = locationsPhotographed;
}