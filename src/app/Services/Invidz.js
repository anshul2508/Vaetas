"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var index_1 = require("../actions/index");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
var BASE_URL = 'https://api.invidz.com/api/';
var LOGIN_TOKEN_KEY = 'my_login_token';
var InvidzService = (function () {
    function InvidzService(http, router, store) {
        this.http = http;
        this.router = router;
        this.store = store;
    }
    InvidzService.prototype.login = function (email, password) {
        var _this = this;
        var options = new http_1.RequestOptions({ headers: new http_1.Headers(), params: new URLSearchParams() });
        options.headers.append('my_awesome_header_key', 'My awesome header value');
        options.headers.append('another_header', 'another header value');
        options.params.append('email', email);
        options.params.append('password', password);
        return this.http.get(BASE_URL + 'authenticate', options)
            .map(function (value) {
            var res = value.json();
            localStorage.setItem(LOGIN_TOKEN_KEY, res.token);
            _this.store.dispatch(new index_1.LoginAction(res.user));
            console.log('action fired');
            return res.user;
        }).catch(this.handleError.bind(this));
    };
    InvidzService.prototype.signup = function (firstName, password, password_confirmation, lastName, email) {
        this.http.post(BASE_URL + 'register', { firstName: firstName, password: password, password_confirmation: password_confirmation, lastName: lastName, email: email });
        console.log(firstName + ' ' + lastName + ' is registered successfully');
    };
    InvidzService.prototype.getVideos = function () {
        var _this = this;
        return this.http.get(BASE_URL + 'videos', this.requestOptions()).map(function (value) {
            var videos = value.json().data;
            _this.store.dispatch(new index_1.VideosLoadedAction(videos));
            return videos;
        }).catch(this.handleError.bind(this));
    };
    InvidzService.prototype.getProfile = function () {
        var _this = this;
        return this.http.get(BASE_URL + 'me', this.requestOptions()).map(function (value) {
            var user = value.json().data;
            _this.store.dispatch(new index_1.UserUpdateAction(user));
            return user;
        }).catch(this.handleError.bind(this));
    };
    InvidzService.prototype.logout = function () {
        localStorage.removeItem(LOGIN_TOKEN_KEY);
        this.router.navigate(['login']);
    };
    InvidzService.prototype.requestOptions = function () {
        var options = new http_1.RequestOptions({ headers: new http_1.Headers() });
        if (localStorage.getItem(LOGIN_TOKEN_KEY)) {
            options.headers.append('Authorization', 'bearer ' + localStorage.getItem(LOGIN_TOKEN_KEY));
        }
        return options;
    };
    InvidzService.prototype.handleError = function (error) {
        if (error.type === 3) {
            throw { message: 'Internet not available' };
        }
        else if (error.type === 2) {
            if (error.status === 401) {
                localStorage.removeItem(LOGIN_TOKEN_KEY);
                this.router.navigate(['/login']);
            }
            var message = error.json().message;
            console.log(error, message);
            throw { message: message };
        }
        else {
            throw { message: 'unknown error occurred' };
        }
    };
    InvidzService.prototype.addVideo = function (video) {
        this.store.dispatch(new index_1.VideoAddedAction(video));
    };
    InvidzService.prototype.deleteVideo = function (index) {
        this.store.dispatch(new index_1.VideoDeletedAction(index));
    };
    return InvidzService;
}());
InvidzService = __decorate([
    core_1.Injectable()
], InvidzService);
exports.InvidzService = InvidzService;
