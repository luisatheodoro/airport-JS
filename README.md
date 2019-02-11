# Traffic controller

With this app you can instruct flights to land and to take off.

## Running tests
In the terminal write `open SpecRunner.html`

## Using the App

```
With the SpecRunner.html file opened in the browser, click the page with the right mouse button and select inspect
then select console from the options, with console opened you can try landing and taking off planes.

to create an airport:
var airportName = new Airport()

to create a plane:
var planeName = new Plane(airportName)

to instruct a plane who wants to land:
aiportName.canLand(planeName)

to instruct a plane who wants to take off:
aiportName.canTakeOff(planeName)

to change airport capacity:
aiportName.capacity = capacityNumber

to check airport hangar:
aiportName.hangar

to land a plane:
planeName.land()

to take off plane:
planeName.takeOff()

to check if plane is landed:
planeName.landed


*P.S Weather condition is randomly generated. It will throw and error if you try to land or take off when the weather happens to be Stormy.

```

## Landing User Stories
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport
```

##### Running this user story on browser console:
var cityAirport = new Airport()\
var airFrance784 = new Plane('Air France 784', cityAirport)\
airFrance784.land()
airFrance784.landed
*Should return true if plane successfully landed
----

```
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```

##### Running this user story on browser console:
var cityAirport = new Airport()\
var airFrance785 = new Plane('Air France 785',cityAirport)\
airFrance785.land()
*Weather is randomly chosen, if it returns 'Stormy'\
*it should throw an error `Uncaught Error: Air France 785 cannot land due to bad weather`
airFrance785.landed
*Should return false if weather was stormy
----

```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```
##### Running this user story on browser console:
var cityAirport = new Airport();\
cityAirport.capacity = 1;\
var airFrance786 = new Plane('Air France 786', cityAirport)\
var ryanair780 = new Plane('Ryanair 780', cityAirport)\
airFrance786.land();\
ryanair780.land();

*First change airport capacity to 1 so you don't need to create too many planes\
*When trying to land more than one plane is should throw an error `Uncaught Error: Ryanair 780 cannot land due to airport full hangar`

----

```
As an air traffic controller
To ensure right information
I want to prevent logging a plane that is already in the airport
```

##### Running this user story on browser console:
var cityAirport = new Airport();\
var airFrance787 = new Plane('Air France 787', cityAirport)\
airFrance787.land();\
airFrance787.land();\
*Should throw an error `Uncaught Error: Cannot land, because plane is already landed`

## Take Off User Stories

```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
```

##### Running this user story on browser console:
var cityAirport = new Airport();\
var airFrance788 = new Plane('Air France 788',cityAirport)\
airFrance788.land();\
airFrance788.takeOff();\
airFrance788.landed;\
*It should return false if plane has successfully taken off\
cityAirport.hangar\
*Air France 788 should not be in the hangar
----

```
As an air traffic controller
To ensure safety
I want to prevent taking off when weather is stormy
```

##### Running this user story on browser console:
var cityAirport = new Airport();\
var airFrance789 = new Plane('Air France 789', cityAirport)\
airFrance789.land();\
airFrance789.takeOff();

*Weather is randomly chosen, if it returns 'Stormy' when taking off
*Should throw an error `Uncaught Error: Airfrance 789 cannot take off due to bad weather`

----

```
As an air traffic controller
To ensure right information
I want to prevent logging a plane take off that is not in the airport
```

##### Running this user story on browser console:
var gatwickAirport = new Airport();\
var airFrance790 = new Plane('Air France 790',gatwickAirport)\
airFrance790.takeOff();

*Should throw an error `Uncaught Error: Cannot take off, because plane has already taken off or is not in this airport`
