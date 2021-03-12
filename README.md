# CG Lab Project

Submission template for the CG lab project at the Johannes Kepler University Linz.

### Explanation

This `README.md` needs to be pushed to Github for each of the 3 delivery dates.
For every submission change/extend the corresponding sections by replacing the *TODO* markers.
*In order to meet the deadlines make sure you push everything to your Github repository.*
For more details see the Moodle page.

## Concept submission due on 26.03.2021

### Movie Name

TODO

### Group Members

| Student ID    | First Name  | Last Name      |
| --------------|-------------|----------------|
| TODO          | TODO        | TODO           |
| TODO          | TODO        | TODO           |

### Concept

TODO

(Explain the basic story of your movie, i.e., planned scenes, what happens, which objects are used, etc.)

### Special Effects

Selected special effects must add up to exactly 30 points:

| Selected   | ID | Name                                  | Points |
|------------|----|---------------------------------------|--------|
| yes/no     | S1 | Multi texturing                       | 10     |  
| yes/no     | S2 | Level of detail                       | 10     |
| yes/no     | S3 | Billboarding                          | 10     |
| yes/no     | S4 | Terrain from heightmap                | 20     |
| yes/no     | S5 | Postprocessing shader                 | 20     |
| yes/no     | S6 | Animated water surface                | 20     |
| yes/no     | S7 | Minimap                               | 20     |
| yes/no     | S8 | Particle system (rain, smoke, fire)   | 20     |
| yes/no     | S9 | Motion blur                           | 30     |
| yes/no     | SO | Own suggestion (preapproved by email) | TODO   |

## Intermediate submission due on 23.04.2021

Prepare a first version of your movie that:
 * is 30 seconds long,
 * contains animated objects,
 * has an animated camera movement, and
 * runs on the PCs in the CG lab room. 

Push your code on the day of the submission deadline. 
The repository needs to contain:
  * code/ Intermediate code + resources + libs
  * video/ A screen recording of the intermediate result

Nothing to change here in `README` file.

**Note:** You don’t need to use any lighting, materials, or textures yet. This will be discussed in later labs and can be added to the project afterwards!

## Final submission due on 22.06.2021

The repository needs to contain:
  * code/ Documented code + resources + libs
  * video/ A screen recording of the movie
  * README.md


### Workload

| Student ID     | Workload (in %) |
| ---------------|-----------------|
| TODO           | TODO            |
| TODO           | TODO            |

Workload has to sum up to 100%.

### Effects

Mention in the comments column of the table where you have implemented the code and where it is visible (e.g., spotlight is the lamp post shining on the street).

| Implemented    | ID | Name                                                                                                   | Max. Points | Issues/Comments |
|----------------|----|--------------------------------------------------------------------------------------------------------|-------------|-----------------|
| yes/no/partial | 1a | Add at least one manually composed object that consists of multiple scene graph nodes.                 | 6           |                 |
| yes/no/partial | 1b | Animate separate parts of the composed object and also move the composed object itself in the scene.   | 4           |                 |
| yes/no/partial | 1c | Use at least two clearly different materials for the composed object.                                  | 3           |                 |
| yes/no/partial | 2a | Create one scene graph node that renders a complex 3D shape. Fully specify properties for this object. | 7           |                 |
| yes/no/partial | 2b | Apply a texture to your self-created complex object by setting proper texture coordinates.             | 3           |                 |
| yes/no/partial | 3a | Use multiple light sources.                                                                            | 5           |                 |
| yes/no/partial | 3b | One light source should be moving in the scene.                                                        | 3           |                 |
| yes/no/partial | 3c | Implement at least one spot-light.                                                                     | 7           |                 |
| yes/no/partial | 3d | Apply Phong shading to all objects in the scene.                                                       | 3           |                 |
| yes/no/partial | 4a | Use the WASD-keys to manually control the camera along the viewing direction                           | 6           |                 |
| yes/no/partial | 4b | Use the mouse to control the heading and pitch of the camera relative to the ground.                   | 3           |                 |
| yes/no/partial | 5a | Animations start automatically.                                                                        | 2           |                 |
| yes/no/partial | 5b | Animations are framerate-independent.                                                                  | 3           |                 |
| yes/no/partial | 5c | The camera is animated without user intervention.                                                      | 5           |                 |
| yes/no/partial | Sx | TODO Special Effect Name                                                                               | TODO        |                 |
| yes/no/partial | Sy | TODO Special Effect Name                                                                               | TODO        |                 |
| yes/no/partial | SE | Special effects are nicely integrated and well documented                                              | 10          |                 |

### Special Effect Description

TODO

Describe how the effects work in principle and how you implemented them. If your effect does not work but you tried to implement it, make sure that you explain this. Even if your code is broken do not delete it (e.g., keep it as a comment). If you describe the effect (how it works, and how to implement it in theory), then you will also get some points. If you remove the code and do not explain it in the README this will lead to 0 points for the effect and the integration SE.
