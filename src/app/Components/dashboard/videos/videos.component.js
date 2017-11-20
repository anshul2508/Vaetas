"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VideosComponent = (function () {
    function VideosComponent(invidz, alertService) {
        this.invidz = invidz;
        this.alertService = alertService;
        this.videos = [];
        this.loading = false;
    }
    VideosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.invidz.getVideos().subscribe(function (videos) {
            _this.videos = videos;
            _this.loading = false;
            _this.alertService.success('videos loaded successfully');
        }, function (error) {
            _this.loading = false;
            _this.alertService.error(error.message);
        });
    };
    VideosComponent.prototype.addVideo = function (video) {
        this.invidz.addVideo(video);
        console.log('add video works');
    };
    VideosComponent.prototype.onShare = function (index) {
        console.log('share works');
    };
    VideosComponent.prototype.onPreview = function (index) {
        console.log(this.videos[index].duration);
        console.log('preview works');
    };
    VideosComponent.prototype.onDelete = function (index) {
        this.invidz.deleteVideo(index);
        console.log('delete works');
    };
    return VideosComponent;
}());
VideosComponent = __decorate([
    core_1.Component({
        selector: 'app-videos',
        templateUrl: './videos.component.html',
        styleUrls: ['./videos.component.css']
    })
], VideosComponent);
exports.VideosComponent = VideosComponent;
