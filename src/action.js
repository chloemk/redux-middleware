import axios from 'axios';

export const fetchPosts = () => async (dispatch, getState) => {
	dispatch({ type: 'FETCH_POSTS_REQUEST' });
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);
		dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'FETCH_POSTS_FAILURE', error });
	}
};

/*
export const fetchPosts = () => {
	//리덕스 떵크를 사용하면 action creators에서 일반적인 action object 대신에, 함수를 반환할 수 있다.
	//since it's returning a separate function, it allows us to use async/await syntax.
	return async (dispatch, getState) => {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);
		console.log(response.data);
		dispatch({
			type: 'FETCH_POSTS',
			payload: response.data,
		});
	};
};
*/
