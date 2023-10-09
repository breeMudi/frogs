This is a my first attempt at publishing a spline driven web interface

In this simple design, lazy loading was implemented to observe changes in page loading speed

the loading test is carried out using the website gtmetrix.com to examine the github pages version of this webpage.

This was done doing spline viewer

using gtmetrix the app performed poorly on the main main performance indices

Steps are needed to increase the state of the user experience on the web app;

Step 1:

- save spline file in gltf format
- Load into a threejs scene in vanila javascript
- See if the metadata of the various polygons (e.g. frog eye pupils) can be called and manupulated using threejs and DOM commands
- The gltf file exported from spline does not contain a scene file attached to it. How do we create one?
- Ensure camera for the three js scene is at the middle
- The gltf file has finally loaded, the firefly lights are in focus, the model is at the middle of the screen but without any form of color, texture or animation.

Its worth noting that Spline free version does not support the download of textures and color and user interactions

Moreover, Loading the scene as a gltf file in place of spline-viewer, drastically increased the performance of the page from 53% to 100%

UP NEXT:
Now that the gltf file is loaded. the next step is to research on how to access the various components and groups with three js, as was created and named on spline. This is so that we can use some dom manipulation techniques to animate a few objects (e.g. The eyes of the frog, the motion of the fireflies)
