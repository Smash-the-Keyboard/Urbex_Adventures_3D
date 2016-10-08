var PELObject : GameObject;
var coughSoundObject : GameObject;
var number = 0;
var poisonLevel = 1;
var PELChanged = false;
var respirator : GameObject;
var coughSounds: AudioClip[];

function PlayRandom()
{
    if(coughSoundObject.GetComponent.<AudioSource>().isPlaying) return;
    coughSoundObject.GetComponent.<AudioSource>().Play();
}

function Start()
{
    InvokeRepeating("Counter", 0, 0.5);
}

function Counter()
{
    number = number + 1;
    PELChanged = false;
}

function OnTriggerStay (other : Collider)
    {
        if (number % 2 == 0 && PELChanged == false && respirator.GetComponent(respScript).maskOn == false)
        {
            PELObject.GetComponent(poisonBarScript).displayedSprite = PELObject.GetComponent(poisonBarScript).displayedSprite + poisonLevel;
            coughSoundObject.GetComponent.<AudioSource>().clip = coughSounds[Random.Range(0,3)];
            PlayRandom();
            PELChanged = true;
        }
    }