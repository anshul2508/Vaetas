"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../actions/index");
var ngrx_store_freeze_1 = require("ngrx-store-freeze");
var environment_1 = require("../../environments/environment");
var initialState = {
    user: null,
    videos: []
};
function reducer(oldState, action) {
    switch (action.type) {
        case index_1.UPDATE_PROFILE:
        case index_1.LOGIN:
            return __assign({}, oldState, { user: action.payload });
        case index_1.VIDEOS_LOADED:
            return __assign({}, oldState, { videos: action.payload });
        case index_1.VIDEO_ADDED:
            return __assign({}, oldState, { videos: oldState.videos.concat([action.payload]) });
        case index_1.VIDEO_DELETED:
            var newVideos = oldState.videos.slice();
            newVideos.splice(action.payload, 1);
            return __assign({}, oldState, { videos: newVideos });
        default:
            return oldState;
    }
}
exports.reducer = reducer;
function myReducer(oldState, action) {
    if (oldState === void 0) { oldState = initialState; }
    if (environment_1.environment.production) {
        return reducer(oldState, action);
    }
    else {
        var devReducer = ngrx_store_freeze_1.storeFreeze(reducer);
        return devReducer(oldState, action);
    }
}
exports.myReducer = myReducer;
exports.getUser = function (state) { return state.user; };
exports.getVideos = function (state) { return state.videos; };
