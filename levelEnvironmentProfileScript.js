import UnityEngine.SceneManagement;

var raining = false;
var timeOfDay : String;
var envType : String;
var securityLevel : int;
var guards = false;
var hobos = false;
var addicts = false;
var criminals = false;
var scrappers = false;
var haunted = false;
var sprintEnabled = true;
var numberOfLocations = 0;

var currentLevel : Number;



function Start()
{
    currentLevel = SceneManager.GetActiveScene().buildIndex;
}

function Update()
{
    switch (currentLevel)
    {
        case 0:
            raining = true;
            timeOfDay = "Afternoon";
            securityLevel = 5;
            guards = true;
            hobos = true;
            sprintEnabled = true;
            numberOfLocations = 1;
            break;
        default:
            raining = false;
            timeOfDay = "Afternoon";
            securityLevel = 1;
            guards = false;
            hobos = false;
            sprintEnabled = false;
            numberOfLocations = 1;
            break;
    }

   print(currentLevel);
}

