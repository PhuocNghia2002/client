import { SwiperSlide } from "swiper/react";
import AutoSwiper from "./AutoSwiper";
import MediaItem from "./MediaItem";
import { Box } from "@mui/material";

const RecommendSlide = ({ medias, mediaType }) => {
	return (
		<AutoSwiper>
			{medias.map((media, index) => (
				<SwiperSlide key={index}>
					<Box
						sx={{
							margin: "0 0.2rem 0 0",
						}}
					>
						<MediaItem
							media={media}
							mediaType={mediaType}
						/>
					</Box>
				</SwiperSlide>
			))}
		</AutoSwiper>
	);
};

export default RecommendSlide;
