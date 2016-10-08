import UnityEngine.SceneManagement;

var clickAudio : GameObject;
var demoLevel : String;
var playerObject : GameObject;

function Start()
{
    playerObject.GetComponent.<AudioListener>().pause = false;
}

function A()
{
    clickAudio.GetComponent.<AudioSource>().Play();
    SceneManager.LoadScene (demoLevel);
}