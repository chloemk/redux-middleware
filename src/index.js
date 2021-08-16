import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import postsReducer from './reducer';
//로깅 해주는 미들웨어
import logger from 'redux-logger';
//redux-thunk
import thunk from 'redux-thunk';
//devtools
import { composeWithDevTools } from 'redux-devtools-extension';

//미들웨어 사용
const store = createStore(
	postsReducer,
	composeWithDevTools(applyMiddleware(logger, thunk))
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
