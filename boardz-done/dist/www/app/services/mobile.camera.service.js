System.register(['rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1;
    var MobileCameraService;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            MobileCameraService = (function () {
                function MobileCameraService() {
                }
                MobileCameraService.prototype.getPhoto = function () {
                    return Observable_1.Observable.create(function (observer) {
                        var removeDomListener = function () {
                            document.removeEventListener('deviceready', onCordovaDeviceReady);
                        };
                        var onCordovaDeviceReady = function () {
                            var camera = window.navigator.camera;
                            var options = {
                                quality: 50,
                                destinationType: camera.DestinationType.DATA_URL,
                                sourceType: camera.PictureSourceType.CAMERA,
                                encodingType: camera.EncodingType.PNG,
                                saveToPhotoAlbum: false,
                                correctOrientation: true
                            };
                            camera.getPicture(function (imageData) {
                                observer.next('data:image/png;base64,' + imageData);
                                removeDomListener();
                                observer.complete();
                            }, function (error) {
                                observer.error(error);
                                removeDomListener();
                                observer.complete();
                            }, options);
                        };
                        document.addEventListener('deviceready', onCordovaDeviceReady);
                    });
                };
                return MobileCameraService;
            }());
            exports_1("MobileCameraService", MobileCameraService);
        }
    }
});

//# sourceMappingURL=mobile.camera.service.js.map
