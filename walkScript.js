#pragma strict

var distToGround : float;
var isMoving = false;
var woodWalkSource : AudioSource;
var glassWalkSource : AudioSource;
var tagCheckWood : String = "Wood";
var tagCheckGlass : String = "Glass";
var checkAllTags : boolean = false;
var groundMaterial : String;
var raycastDist = 4;
var makingNoise = false;
var noiseLevelWood = 1;
var noiseLevelGlass = 3;
var noiseLevelObject : GameObject;
var noiseLevelChanged = false;
var noiseLevelAdded = 0;
var isRunning = false;
var Player : GameObject;
var lvlEnvProfile : GameObject;
var sprintEnabled = false;


function Start () 
{
    //get the distance to ground
    distToGround = GetComponent.<Collider>().bounds.extents.y;
    sprintEnabled = lvlEnvProfile.gameObject.GetComponent(levelEnvironmentProfileScript).sprintEnabled;
}

function IsGrounded(): boolean {
    return Physics.Raycast(transform.position, -Vector3.up, distToGround + 0.1);
}

function Update () 
{
    var foundHit : boolean = false;
    var hit : RaycastHit;

    if (Input.GetKey(KeyCode.LeftShift))
    {
        isRunning = true;
    }
    else
    {
        isRunning = false;
    }

    if (isRunning && sprintEnabled)
    {
        Player.gameObject.GetComponent(CharacterMotor).movement.maxForwardSpeed = 6;
        Player.gameObject.GetComponent(CharacterMotor).movement.maxSidewaysSpeed = 6;
        Player.gameObject.GetComponent(CharacterMotor).movement.maxBackwardsSpeed = 6;
        woodWalkSource.pitch = 1.5;
        glassWalkSource.pitch = 1.5;
    }
    else
    {
        Player.gameObject.GetComponent(CharacterMotor).movement.maxForwardSpeed = 3;
        Player.gameObject.GetComponent(CharacterMotor).movement.maxSidewaysSpeed = 3;
        Player.gameObject.GetComponent(CharacterMotor).movement.maxBackwardsSpeed = 3;
        woodWalkSource.pitch = 1;
        glassWalkSource.pitch = 1;
    }

    if (Input.GetKey(KeyCode.W) || Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.S) || Input.GetKey(KeyCode.D))
    {
        isMoving = true;
    }

    else 
    {
        isMoving = false;
    }

    if (Physics.Raycast(transform.position, Vector3.down, hit, raycastDist) && hit.transform.tag == tagCheckWood)
    {
        groundMaterial = "Wood";
    }

    else if (Physics.Raycast(transform.position, Vector3.down, hit, raycastDist) && hit.transform.tag == tagCheckGlass)
    {
        groundMaterial = "Glass";
    }

    if (isMoving && IsGrounded() && groundMaterial == "Wood")
	{
        woodWalkSource.UnPause();
        glassWalkSource.Pause();
        makingNoise = true;
     }
    else if (isMoving && IsGrounded() && groundMaterial == "Glass")
    {
        glassWalkSource.UnPause();
        woodWalkSource.Pause();
        makingNoise = true;
    }
	else if (isMoving == false || IsGrounded() == false)
	{
	    woodWalkSource.Pause();
	    glassWalkSource.Pause();
	    makingNoise = false;
	}

    if (makingNoise && groundMaterial == "Wood" && noiseLevelChanged == false)
    {
        noiseLevelObject.gameObject.GetComponent(noiseBarScript).displayedSprite = noiseLevelObject.gameObject.GetComponent(noiseBarScript).displayedSprite + noiseLevelWood;
        noiseLevelAdded = noiseLevelWood;
        noiseLevelChanged = true;
    }
    else if (makingNoise && groundMaterial == "Glass" && noiseLevelChanged == false)
    {
        noiseLevelObject.gameObject.GetComponent(noiseBarScript).displayedSprite = noiseLevelObject.gameObject.GetComponent(noiseBarScript).displayedSprite + noiseLevelGlass;
        noiseLevelAdded = noiseLevelGlass;
        noiseLevelChanged = true;
    }
    else if (makingNoise && groundMaterial == "Glass" && noiseLevelChanged)
    {
        noiseLevelObject.gameObject.GetComponent(noiseBarScript).displayedSprite = noiseLevelObject.gameObject.GetComponent(noiseBarScript).displayedSprite - noiseLevelAdded + noiseLevelGlass;
        noiseLevelAdded = noiseLevelGlass;
    }
    else if (makingNoise && groundMaterial == "Wood" && noiseLevelChanged)
    {
        noiseLevelObject.gameObject.GetComponent(noiseBarScript).displayedSprite = noiseLevelObject.gameObject.GetComponent(noiseBarScript).displayedSprite - noiseLevelAdded + noiseLevelWood;
        noiseLevelAdded = noiseLevelWood;
    }
    else if (makingNoise == false && noiseLevelChanged)
    {
        noiseLevelObject.gameObject.GetComponent(noiseBarScript).displayedSprite = noiseLevelObject.gameObject.GetComponent(noiseBarScript).displayedSprite - noiseLevelAdded;
        noiseLevelChanged = false;
    }
}