import React, { useEffect, useState } from 'react';
import images from './data1';
import { SRLWrapper } from 'simple-react-lightbox';
import './MainGallery.css';

function MainGallery1() {
	const [tag, setTag] = useState('All');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			tag === 'All' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
		},
		[tag]
	);

	return (
		<div className="App">
			<div className="tags">
				<TagButton name="All" tagActive={tag === 'All' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="Sun-Set" tagActive={tag === 'Sun-Set' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="Royal-Haweli" tagActive={tag === 'Royal-Haweli' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="Night-Photoshot" tagActive={tag === 'Night-Photoshot' ? true : false} handleSetTag={setTag} />
			</div>
			<SRLWrapper>
				<div className="container">
					{filteredImages.map(image => (
						<div key={image.id} className="image-card">
							<a href={`/images/${image.imageName}`}>
								<img className="image" src={`/images/${image.imageName}`} alt="" />
							</a>
						</div>
					))}
				</div>
			</SRLWrapper>
		</div>
	);
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};

export default MainGallery1;
