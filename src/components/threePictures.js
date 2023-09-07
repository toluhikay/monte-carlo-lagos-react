import React from "react";
import First from "../assets/images/main.jpeg";
import Second from "../assets/images/second.jpeg";
import Third from "../assets/images/third.jpeg";
import Fourth from "../assets/images/fourth.jpeg";
import Fifth from "../assets/images/fifth.jpeg";
import sixth from "../assets/images/sixth.jpeg";
import seventh from "../assets/images/seventh.jpeg";
import first from "../assets/images/first.jpeg";
import { commonStyle } from "../common/commonStyles";
import { useDispatch } from "react-redux";
import { SetModalOpen } from "../features/pictureModalSlice";

const ThreePictures = () => {
	const ImagesArray = [
		{ id: 1, img: First },
		{ id: 2, img: Second },
		{ id: 3, img: Third },
		{ id: 4, img: Fourth },
		{ id: 6, img: sixth },
		{ id: 8, img: first },
		{ id: 5, img: Fifth },
		{ id: 7, img: seventh },
	];
	const dispatch = useDispatch();
	return (
		<div className={`${commonStyle}`}>
			<div className='flex justify-between flex-wrap'>
				{ImagesArray.map((item, index) => {
					return (
						<div data-aos={index % 2 === 0 ? "flip-left" : "flip-right"} data-aos-easing='ease-out-cubic' data-aos-duration='2000' key={item.id} className={`lg:w-[23%] md:w-[48%] w-full md:mb-12 mb-12 md:border-[10px] border-[4px] rounded-lg`}>
							<img src={item.img} alt='' onClick={() => dispatch(SetModalOpen(item.img))} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ThreePictures;
