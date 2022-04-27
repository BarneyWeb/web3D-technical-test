# Context
Our viewer is one of our core technical components. It is embedded on our clients websites and displayed in our SaaS platform.

For this exercise, your job is to create basic ThreeJS viewer, create a vertex shader and allow for customisation though an iframe API.

In addition to your code, a README explaining your thought process and your choices would be appreciated.


# Exercise

### 1) The ThreeJS viewer
Create a ThreeJS viewer to display the model provided.
- Make sure we can run it locally as a web server on the `8080` port.
- You can `npm init` in the `./viewer/` directory and use whatever tools you like.

### 2) The vertex shader
Create a vertex shader that make the model wave like it was displayed on an hanger.

### 3) The iframe API
Provide an iframe API that allow for the object's color to be changed dynamically.

- You can run the "client website" using
  ```
  cd ./client
  npm i
  npm start
  ```
- This page is already setup to display the `http://localhost:8080` inside an iframe, and send commands when clicking on the color circles.

![](./images/iframe-api-demo.gif)


## Do you want to make the viewer even better?
Feel free to make as many improvements as you like. We love creativity and technical challenges.

If you are out of ideas, here are some thoughts:

- When embedded on our client's ecommerce websites, our viewer is used by a lot of non technical people that are mainly there to shop. They often don't know how to use 3D tools/apps. How could we make the experience simpler yet better for them?