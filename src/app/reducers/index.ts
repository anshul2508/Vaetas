import {User} from '../models/user';
import {Video} from '../models/video';
import {LOGIN, UPDATE_PROFILE, VIDEO_ADDED, VIDEO_DELETED, VIDEOS_LOADED} from '../actions/index';
import {Action} from '@ngrx/store';
import {storeFreeze} from 'ngrx-store-freeze';
import {environment} from '../../environments/environment';

export interface State {
  user: User;
  videos: Video[];
}

const initialState: State = {
  user: null,
  videos: []
}

export function reducer(oldState: State, action: Action): State {
  switch (action.type) {
    case UPDATE_PROFILE:
    case LOGIN:
      return {...oldState, ...{user: action.payload}};
    case VIDEOS_LOADED:
      return {...oldState, ...{videos: action.payload}};
    case VIDEO_ADDED:
      return {...oldState, ...{videos: [...oldState.videos, action.payload]}};
    case VIDEO_DELETED:
      const newVideos = [...oldState.videos];
      newVideos.splice(action.payload, 1);
      return {...oldState, ...{videos: newVideos} };
    default:
      return oldState;
  }
}

export function myReducer(oldState: State = initialState, action: Action) {
  if (environment.production) {
    return reducer(oldState, action);
  } else {
    const devReducer = storeFreeze(reducer);
    return devReducer(oldState, action);
  }
}


export const getUser = (state: State) => state.user;
export const getVideos = (state: State) => state.videos;
