//CURRENT STATUS: Calling the getTarget() function causes the Unity Editor to FREEZE!!!

import System.Collections.Generic;

var VANL = 0;
var VANLObject : GameObject;
var colliderList : List.<Collider> = new List.<Collider>();
var colliderArray : Collider[];
var distanceList : List.<float> = new List.<float>();
var colliderObject : Collider;
var colliderPosition : Vector3;
var playerPosition : Vector3;
var player : GameObject;
var colliderDistance : float;
var minimum : float;
var i = 0;
var i2 = 0;
var i3 = 0;
var i4 = 0;
var hoboTarget : Vector3;
var moveDistance : float;
var moving = false;
var number : Collider;
var gettingTarget = false;

function Start()
{
	player = GameObject.Find("First Person Controller");
}

function getTarget(start : Vector3, radius : float)
{
	gettingTarget = true;
	colliderArray = Physics.OverlapSphere(start, radius);
	i3 = 0;
	i = 0;
	i2 = 0;
	i4 = 0;
	colliderList.Clear();
	distanceList.Clear();
	while (i3 < colliderArray.length)
	{
		number = colliderArray[i3];
		if (number.tag == "Node")
		{
			colliderList.Add(number);
		}
		i3++;
	}
	while (i < colliderList.Count)
	{
		colliderPosition = colliderList[i].transform.position;
		colliderDistance = Vector3.Distance(playerPosition, colliderPosition);
		distanceList.Add(colliderDistance);
		i++;
	}
	minimum = distanceList[0];
	while(i2 < distanceList.Count)
	{
		if(distanceList[i2] < minimum)
		{
			minimum = distanceList[i2];
		}
		else
		{
			i2++;
		}
	}
	while(i4 < colliderList.Count)
	{
		colliderPosition = colliderList[i4].transform.position;
		colliderDistance = Vector3.Distance(playerPosition, colliderPosition);
		if (colliderDistance == minimum)
		{
			hoboTarget = colliderPosition;
			moving = true;
		}
		else
		{
		}
		i4++;
	}
	gettingTarget = false;
}

function OnCollisionEnter(collision: Collision)
{
	if (collision.gameObject.tag == "solid")
	{
		colliding = true;
	}
}

function Update()
{

	VANL = VANLObject.gameObject.GetComponent(noiseBarScript).displayedSprite;

	if (VANL >= 5)
	{
		isFollowing = true;
	}

	playerPosition = player.transform.position;
	if (isFollowing && moving == false && gettingTarget == false)
	{
		getTarget(transform.position, 1.5);
	}

	if (isFollowing && moving == true && gettingTarget == false)
	{
		if (transform.position == hoboTarget)
		{
			moving = false;
		}
		else
		{
			transform.position = Vector3.MoveTowards(transform.position, hoboTarget, moveDistance);
		}
	}
}