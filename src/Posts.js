import React, { useEffect } from 'react';
import { fetchPosts } from './action';
import { useSelector, useDispatch } from 'react-redux';

const Posts = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	useEffect(() => {
		dispatch(fetchPosts());
	}, []);

	const renderPosts = () => {
		if (state.loading) {
			return <h1>loading...</h1>;
		}
		return state.items.map((cur) => <h4>{cur.title}</h4>);
	};

	return <div>{renderPosts()}</div>;
};

export default Posts;
