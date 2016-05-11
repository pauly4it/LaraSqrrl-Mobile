# LaraSqrrl Mobile App

An example mobile app that goes along with [LaraSqrrl](https://github.com/pauly4it/LaraSqrrl), made for [LaravelSF](http://LaravelSF.com).

## Getting Set up

Install ionic and cordova (you will need npm installed):

```
npm install -g ionic cordova
```

You'll also need to have the Android SDK installed. You can get the SDK and Android Studio (the Android IDE) from the [Android SDK website](http://developer.android.com/sdk/index.html).

Note: If you want to build for iOS, you will need to use a Mac and have Xcode installed.

Next you'll need to install the cordova plugins used by the app:

```
cordova plugin add cordova-plugin-device cordova-plugin-console cordova-plugin-whitelist cordova-plugin-splashscreen cordova-plugin-statusbar ionic-plugin-keyboard
```

Lastly, add the Android and iOS platforms:

```
ionic platform add ios
ionic platform add android
```

This adds the Android and iOS platforms to the `./app/platforms` folder.

## Development

### Adding new Cordova plugins

If you'd like to add a new Cordova plugin, in the `/app` folder, run:

```
cordova plugin add pluginname
```

For example: `cordova plugin add cordova-plugin-splashscreen`.

Some common plugins are:
```
cordova-plugin-dialogs
cordova-plugin-splashscreen
cordova-plugin-statusbar
cordova-plugin-device
```


## Running in the Browser

From the `app` folder, you can run the app in the browser using the command:

```
ionic serve
```

## Building for Android and iOS

From the `app` folder, build for Android or iOS by running:

```
ionic build ios
ionic build android
```

Alternatively, you can use cordova to do this:

```
cordova build ios
cordova build android
```

## Prepare Resources

To have ionic create the app icon and splash screen resources for different screen sizes/resolutions, run:

```
ionic resources
```

## Running on attached Android device:

Ensure you have ADB (Android Debug Bridge) installed and in your $PATH. ADB is included with the Android SDK. Your attached Android device will need to have Developer mode and USB debugging enabled. Instructions for enabling this on your device can be fond [here](https://www.recovery-android.com/enable-usb-debugging-on-android.html).

If you want to run on an attached device, first check that adb detects the device:
```
adb devices
```

Then run:
```
ionic run android
```

This builds and then installs the app on the attached Android device.

## Running in iOS Simulator

If you're on a Mac and have Xcode installed, you can run the following to start your app in an iOS simulator:

```
ionic build ios
ionic emulate ios
```

Alternatively, after you build for iOS, you can open the project in Xcode and use Xcode to simulate the app or run on an attached iOS device. The Xcode project is located at `./app/platforms/ios/LaraSqrrl.xcodeproj`.

## Additional Reading

* [Ionic CLI](https://github.com/driftyco/ionic-cli)
* [Getting Started on Ionic](http://ionicframework.com/getting-started)
* [Ionic Developer Tips](http://ionicframework.com/docs/v2/resources/developer-tips/)
