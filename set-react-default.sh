#!/bin/bash/
rm ./src/serviceWorker.js
echo "removed serviceWorker.js"
rm ./src/App.css
echo "removed App.css"
rm ./src/App.test.js
echo "removed App.test.js"
rm ./src/logo.svg
echo "removed logo.svg"
cp ../templates/App-template.js ./src/App.js
echo "Successfully copied App-template to App.js"
cp ../templates/index-template.js ./src/index.js
echo "Successfully coopies index-template to index.js"