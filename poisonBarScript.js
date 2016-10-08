var PELSprites : Sprite[];

var displayedSprite = 0;

function Update()
{
    switch(displayedSprite)
    {
        case 0:
            GetComponent.<UnityEngine.UI.Image>().sprite = PELSprites[0];
            break;
        case 1:
            GetComponent.<UnityEngine.UI.Image>().sprite = PELSprites[1];
            break;
        case 2:
            GetComponent.<UnityEngine.UI.Image>().sprite = PELSprites[2];
            break;
        case 3:
            GetComponent.<UnityEngine.UI.Image>().sprite = PELSprites[3];
            break;
        case 4:
            GetComponent.<UnityEngine.UI.Image>().sprite = PELSprites[4];
            break;
        case 5:
            GetComponent.<UnityEngine.UI.Image>().sprite = PELSprites[5];
            break;
        case 6:
            GetComponent.<UnityEngine.UI.Image>().sprite = PELSprites[6];
            break;
        case 7:
            GetComponent.<UnityEngine.UI.Image>().sprite = PELSprites[7];
            break;
        case 8:
            GetComponent.<UnityEngine.UI.Image>().sprite = PELSprites[8];
            break;
        case 9:
            GetComponent.<UnityEngine.UI.Image>().sprite = PELSprites[9];
            break;
        case 10:
            GetComponent.<UnityEngine.UI.Image>().sprite = PELSprites[10];
            break;
    }
}