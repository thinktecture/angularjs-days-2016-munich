System.register(['angular2/core', '../../services/camera.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, camera_service_1;
    var PictureItComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (camera_service_1_1) {
                camera_service_1 = camera_service_1_1;
            }],
        execute: function() {
            PictureItComponent = (function () {
                function PictureItComponent(_cameraService) {
                    this._cameraService = _cameraService;
                    this._onPictureTaken = new core_1.EventEmitter();
                }
                PictureItComponent.prototype.takePicture = function () {
                    var _this = this;
                    this.hasError = false;
                    this._cameraService.getPhoto()
                        .subscribe(function (picture) { return _this._onPictureTaken.emit(_this.pictureUrl = picture); }, function () { return _this.hasError = true; });
                };
                __decorate([
                    core_1.Output('onPictureTaken'), 
                    __metadata('design:type', core_1.EventEmitter)
                ], PictureItComponent.prototype, "_onPictureTaken", void 0);
                PictureItComponent = __decorate([
                    core_1.Component({
                        selector: 'picture-it',
                        templateUrl: 'app/components/pictureit/pictureit.html'
                    }), 
                    __metadata('design:paramtypes', [camera_service_1.CameraService])
                ], PictureItComponent);
                return PictureItComponent;
            }());
            exports_1("PictureItComponent", PictureItComponent);
        }
    }
});

//# sourceMappingURL=pictureit.js.map
