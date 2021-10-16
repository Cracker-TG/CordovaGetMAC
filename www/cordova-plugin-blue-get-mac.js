var exec = require("cordova/exec");

exports.getMacAddress = function (arg0, success, error) {
  exec(success, error, "BlueGetMac", "getMacAddress", [arg0]);
};
