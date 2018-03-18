
## Waveform Visualizer Task

Thank you for giving me the opportunity to work on this amazing and very interesting task!
It was challenging and fun!

In order to get every dependency, please run `npm install`, then start the app.

You can see a working [demo here](http://waveform-visualizer.designscaster.com/) 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### Simple test case 1

#### Title: User should be able to interract with the waveform and add a messsage

#### Description: When hovering the waveform the user should be able to see the indicator and add a messsage

Precondition: the user must click on a position inside the waveform in order to see the popup input, then write a messsage and press enter on the keyboard
Assumption: the client has loaded the waveform data and the user has entered text inside the input field

#### Test Steps:

Open the app
Wait for waveform to load
Hover on waveform
Write a message and press enter

#### Expected Result: message is rendered below the wavetable

### Simple test case 2

#### Title: User should be able to delete a message

#### Description: When clicking on the delete icon on the right side of the message, the message gets deleted

Precondition: the user must click on a delete icon
Assumption: the user has clicked on a delete icon on the right side of the message

#### Test Steps:

Open the app and add a message
Click on the delete icon on the right side of the message

#### Expected Result: The message the user clicked on, gets deleted

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.