"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN = 'Login Action';
exports.VIDEOS_LOADED = 'Videos loaded Action';
exports.UPDATE_PROFILE = 'Update User Profile';
exports.VIDEO_ADDED = 'Video added';
exports.VIDEO_DELETED = 'Video deleted';
var LoginAction = (function () {
    function LoginAction(payload) {
        this.payload = payload;
        this.type = exports.LOGIN;
    }
    return LoginAction;
}());
exports.LoginAction = LoginAction;
var UserUpdateAction = (function () {
    function UserUpdateAction(payload) {
        this.payload = payload;
        this.type = exports.UPDATE_PROFILE;
    }
    return UserUpdateAction;
}());
exports.UserUpdateAction = UserUpdateAction;
var VideosLoadedAction = (function () {
    function VideosLoadedAction(payload) {
        this.payload = payload;
        this.type = exports.VIDEOS_LOADED;
    }
    return VideosLoadedAction;
}());
exports.VideosLoadedAction = VideosLoadedAction;
var VideoDeletedAction = (function () {
    function VideoDeletedAction(payload) {
        this.payload = payload;
        this.type = exports.VIDEO_DELETED;
    }
    return VideoDeletedAction;
}());
exports.VideoDeletedAction = VideoDeletedAction;
var VideoAddedAction = (function () {
    function VideoAddedAction(payload) {
        this.payload = payload;
        this.type = exports.VIDEO_ADDED;
    }
    return VideoAddedAction;
}());
exports.VideoAddedAction = VideoAddedAction;
