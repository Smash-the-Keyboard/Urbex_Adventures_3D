var noiseLvlSprites : Sprite[];

var displayedSprite = 0;

function Update()
{
    switch(displayedSprite)
    {
        case 0:
            GetComponent.<UnityEngine.UI.Image>().sprite = noiseLvlSprites[0];
            break;
        case 1:
            GetComponent.<UnityEngine.UI.Image>().sprite = noiseLvlSprites[1];
            break;
        case 2:
            GetComponent.<UnityEngine.UI.Image>().sprite = noiseLvlSprites[2];
            break;
        case 3:
            GetComponent.<UnityEngine.UI.Image>().sprite = noiseLvlSprites[3];
            break;
        case 4:
            GetComponent.<UnityEngine.UI.Image>().sprite = noiseLvlSprites[4];
            break;
        case 5:
            GetComponent.<UnityEngine.UI.Image>().sprite = noiseLvlSprites[5];
            break;
        case 6:
            GetComponent.<UnityEngine.UI.Image>().sprite = noiseLvlSprites[6];
            break;
        case 7:
            GetComponent.<UnityEngine.UI.Image>().sprite = noiseLvlSprites[7];
            break;
        case 8:
            GetComponent.<UnityEngine.UI.Image>().sprite = noiseLvlSprites[8];
            break;
        case 9:
            GetComponent.<UnityEngine.UI.Image>().sprite = noiseLvlSprites[9];
            break;
        case 10:
            GetComponent.<UnityEngine.UI.Image>().sprite = noiseLvlSprites[10];
            break;
    }
}