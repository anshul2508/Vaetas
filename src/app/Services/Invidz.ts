
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Video} from '../Models/Video';
import {User} from '../Models/User';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {getVideos, State} from '../reducers/index';
import {
  LoginAction, UserUpdateAction, VIDEO_ADDED, VideoAddedAction, VideoDeletedAction,
  VideosLoadedAction
} from '../actions/index';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {Error} from '../models/error';


const BASE_URL = 'https://api.invidz.com/api/';
const LOGIN_TOKEN_KEY = 'my_login_token';

@Injectable()
export class InvidzService {

  constructor(private http: Http, private router: Router,
              private store: Store<State>
  ) {
  }

  login(email: string, password): Observable<User> {
    const options = new RequestOptions({headers: new Headers(), params: new URLSearchParams()});

    options.headers.append('my_awesome_header_key', 'My awesome header value');
    options.headers.append('another_header', 'another header value');

    options.params.append('email', email);
    options.params.append('password', password);

    return this.http.get(BASE_URL + 'authenticate', options)
      .map((value) => {
        const res = value.json();
        localStorage.setItem(LOGIN_TOKEN_KEY, res.token);
        this.store.dispatch(new LoginAction(res.user));
        console.log('action fired');
        return res.user;
      }).catch(this.handleError.bind(this));
  }

  signup(firstName: string, password: string, password_confirmation: string, lastName: string,  email: string) {
    this.http.post(BASE_URL + 'register', {firstName, password, password_confirmation, lastName, email});

    console.log(firstName + ' ' + lastName + ' is registered successfully');
  }

  getVideos(): Observable<Video[]> {
    return this.http.get(BASE_URL + 'videos', this.requestOptions()).map((value) => {
      const videos = value.json().data;
      this.store.dispatch(new VideosLoadedAction(videos));
      return videos;
    }).catch(this.handleError.bind(this));
  }


  getProfile(): Observable<User> {
    return this.http.get(BASE_URL + 'me', this.requestOptions()).map((value) => {
      const user = value.json().data;
      this.store.dispatch(new UserUpdateAction(user));
      return user;
    }).catch(this.handleError.bind(this));
  }

  logout() {
    localStorage.removeItem(LOGIN_TOKEN_KEY);
    this.router.navigate(['login']);
  }

  private requestOptions() {
    const options = new RequestOptions({headers: new Headers()});
    if (localStorage.getItem(LOGIN_TOKEN_KEY)) {
      options.headers.append('Authorization', 'bearer ' + localStorage.getItem(LOGIN_TOKEN_KEY));
    }
    return options;
  }

  handleError(error: any): Observable<Error> {
    if (error.type === 3) {
      throw {message: 'Internet not available'};
    } else if (error.type === 2) {
      if (error.status === 401) {
        localStorage.removeItem(LOGIN_TOKEN_KEY);
        this.router.navigate(['/login']);
      }
      const message = error.json().message;
      console.log(error, message);
      throw {message: message};
    } else {
      throw {message: 'unknown error occurred'};
    }
  }

  addVideo(video: Video) {
    this.store.dispatch(new VideoAddedAction(video));
  }

  deleteVideo(index: number) {
    this.store.dispatch(new VideoDeletedAction(index));
  }

}
