# ParkHub CSS Framework

## Installing
Make sure you install all the dependencies by running:

`npm install`

Then all you need to do to build the framework is run:

`npm start`  

This will call the webpack command with the -p options to minify the output.

## How to hook it up
First you need to install the package in your project by running

`npm install parkhub-css-framework --save-dev`

Then in your front-end application you will need to import the compiled css from the package distro into your main scss file.  If you just want to import the css you can also in the head tag of the page.

`@import '~parkhub-css-framework/dist/styles.css';`

After that in order to use the javascript that goes along with the framework you will need to import the package in your project.

`import 'parkhub-css-framework';`

## Editing the settings
All styles for the global look and feel are located in the `_settings.scss` file.  If you are adding new functionality or styling to extend the framework please create a corresponding scss file and import it into the `styles.scss` file.

### Viewing changes
There is an `index.html` page you can open up in the browser to test your updates to the framework.  Just make sure you have ran the start command and refreshed your page after it compiles.
