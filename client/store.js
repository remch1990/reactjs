import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// reducers

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data

const defaultState = {
	posts,
	comments
};


const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);


const store = createStore(rootReducer, defaultState, enhancers);


export const history = syncHistoryWithStore(browserHistory, store);


// hot full reloading
if(module.hot) {
	module.hot.accept('./reducers/'), () => {
		const nextRootREducer = require('./reducers/index').default;
		store.replaceReducer(nextRootREducer);
	}
}


export default store;