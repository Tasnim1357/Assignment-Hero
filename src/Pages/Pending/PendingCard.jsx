import React from 'react';

const PendingCard = ({item}) => {
    const {title, marks, userName}=item;

    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 border-2">
	
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide font-poppins">{title}</h2>
			<div>
            <p className="dark:text-gray-800 text-xl font-poppins">Marks : {marks}</p>
            <p className="dark:text-gray-800 text-xl font-poppins">Examinee Name: {userName}</p>
            </div>
		</div>
		{/* <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button> */}
        <a href="#_"className="relative inline-block px-4 py-2 font-medium group">
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
<span className="relative text-black group-hover:text-white">Give Mark</span>
</a>
    </div>


</div>
    );
};

export default PendingCard;