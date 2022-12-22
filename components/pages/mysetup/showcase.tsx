import React from 'react';


const ShowCase:React.FC = () =>{
	return(
		<div className="w-[70vw] min-h-[40vh] grid grid-cols-2 auto-rows-[minmax(350px,_1fr)] gap-4">
			<div className="test border-2 border-black w-full h-full"></div>
			<div className="test border-2 border-black w-full h-full"></div>
			<div className="test border-2 border-black w-full h-full"></div>
			<div className="test border-2 border-black w-full h-full"></div>
		</div>
	);
};

export default ShowCase;