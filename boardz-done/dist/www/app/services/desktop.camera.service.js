System.register(['rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1;
    var DesktopCameraService;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            DesktopCameraService = (function () {
                function DesktopCameraService() {
                }
                DesktopCameraService.prototype.getMediaDevices = function () {
                    var mediaDevices = ((window.navigator.mozGetUserMedia || window.navigator.webkitGetUserMedia) ? {
                        getUserMedia: function (options) {
                            return new Promise(function (resolve, reject) {
                                (window.navigator.mozGetUserMedia ||
                                    window.navigator.webkitGetUserMedia).call(window.navigator, options, resolve, reject);
                            });
                        }
                    } : null) || window.navigator.mediaDevices;
                    return mediaDevices;
                };
                DesktopCameraService.prototype.getPhoto = function () {
                    return Observable_1.Observable.fromPromise(this.getMediaDevices().getUserMedia({ video: true, audio: false })
                        .then(function (stream) {
                        return new Promise(function (resolve, reject) {
                            try {
                                var vendorURL = window.URL || window.webkitURL;
                                var doc = document;
                                var videoElement = doc.createElement('video');
                                videoElement.src = vendorURL.createObjectURL(stream);
                                videoElement.play();
                                videoElement.addEventListener('canplay', function () {
                                    var canvasElement = doc.createElement('canvas');
                                    canvasElement.setAttribute('width', videoElement.videoWidth.toString());
                                    canvasElement.setAttribute('height', videoElement.videoHeight.toString());
                                    // Wait a bit before taking a screenshot so the camera has time to adjust lights
                                    setTimeout(function () {
                                        var context = canvasElement.getContext('2d');
                                        context.drawImage(videoElement, 0, 0, videoElement.videoWidth, videoElement.videoHeight);
                                        var url = canvasElement.toDataURL('image/png');
                                        videoElement.pause();
                                        if (stream.stop) {
                                            stream.stop();
                                        }
                                        if (stream.getAudioTracks) {
                                            stream.getAudioTracks().forEach(function (track) {
                                                track.stop();
                                            });
                                        }
                                        if (stream.getVideoTracks) {
                                            stream.getVideoTracks().forEach(function (track) {
                                                track.stop();
                                            });
                                        }
                                        resolve(url);
                                    }, 500);
                                });
                            }
                            catch (e) {
                                reject(e);
                            }
                        });
                    }));
                };
                return DesktopCameraService;
            }());
            exports_1("DesktopCameraService", DesktopCameraService);
        }
    }
});

//# sourceMappingURL=desktop.camera.service.js.map
