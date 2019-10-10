# angularTest
test repository for AngularJS



# start

npm install
npm start


# rex test
test


# package script
 "postinstall": "npm run copy-libs",
    "update-deps": "npm update",
    "postupdate-deps": "npm run copy-libs",
    "copy-libs": "cpx \"node_modules/{angular,angular-*,bootstrap/dist}/**/*\" app/lib -C",
    "prestart": "npm install",


    "jasmine-core": "^3.3.0",
    "karma": "^3.1.1",
    "karma-chrome-launcher": "^2.2.0",
    "karma-firefox-launcher": "^1.1.0",
    "karma-jasmine": "^1.1.2",
    "protractor": "^5.4.1"