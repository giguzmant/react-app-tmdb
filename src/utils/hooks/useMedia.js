import { useState, useEffect } from 'react';

const useMedia = (url) => {
	const [data, setData] = useState([]);
		
	
	useEffect(() => {
		const loadMedia = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setData(data.results);
			} catch (error) {
				console.log(error)
			}
		}
		loadMedia();
		}, [url])
		
	return [data];
}

export default useMedia;