import React, { useEffect, useState } from 'react';
import images from './data2';
import { SRLWrapper } from 'simple-react-lightbox';
import './MainGallery.css';

function MainGallery2() {
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
				<TagButton name="Wedding" tagActive={tag === 'Wedding' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="Retro-View" tagActive={tag === 'Retro-View' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="Library" tagActive={tag === 'Library' ? true : false} handleSetTag={setTag} />
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

export default MainGallery2;
