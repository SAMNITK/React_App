import React, { useEffect, useState } from 'react';
import images from './data';
import { SRLWrapper } from 'simple-react-lightbox';
import './MainGallery.css';

function MainGallery() {
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
				<TagButton name="Pre-Wedding" tagActive={tag === 'Pre-Wedding' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="Post-Wedding" tagActive={tag === 'Post-Wedding' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="Ring-Ceremony" tagActive={tag === 'Ring-Ceremony' ? true : false} handleSetTag={setTag} />
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

export default MainGallery;
