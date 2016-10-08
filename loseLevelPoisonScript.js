var poisonLevelObject : GameObject;
var defaultCanvas : GameObject;
var poisonLoseCanvas : GameObject;
var deathMusic : GameObject;
var playerObject : GameObject;
var levelOver = false;


function Start()
{
    playerObject.GetComponent.<AudioListener>().pause = false;
}
function Update()
{
    if(poisonLevelObject.GetComponent(poisonBarScript).displayedSprite >= 11 && levelOver == false)
    {
        deathMusic.GetComponent.<AudioSource>().ignoreListenerPause = true;
        playerObject.GetComponent.<AudioListener>().pause = true;
        defaultCanvas.active = false;
        poisonLoseCanvas.active = true;
        deathMusic.GetComponent.<AudioSource>().Play();
        levelOver = true;
    }
}