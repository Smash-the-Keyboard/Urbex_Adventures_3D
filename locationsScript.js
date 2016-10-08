var photoScriptObject : GameObject;
var locationsNumberScript : GameObject;
var lvlEnvProfileScript : GameObject;
var locations : Number;
var totallocations : Number;

//photoScriptObject is the script for the camera
//locationsNumberScript is this script
//lvlEnvProfileScript is the Level Environment Profile

locationsNumberScript.gameObject.GetComponent(UI.Text).color = new Color(50.0f/255.0f,50.0f/255.0f,50.0f/255.0f);

function Update()
{
    totallocations = lvlEnvProfileScript.GetComponent(levelEnvironmentProfileScript).numberOfLocations;
    locations = photoScriptObject.gameObject.GetComponent(photoScript).locations;
    locationsNumberScript.gameObject.GetComponent(UI.Text).text = locations + " of " + totallocations;

    if (locations == totallocations)
    {
        locationsNumberScript.gameObject.GetComponent(UI.Text).color = new Color(65.0f/255.0f,161.0f/255.0f,78.0f/255.0f);
    }
    else
    {
        locationsNumberScript.gameObject.GetComponent(UI.Text).color = new Color(141.0f/255.0f,33.0f/255.0f,33.0f/255.0f);
    }
}