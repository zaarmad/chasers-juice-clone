import { Box, Flex, useMediaQuery, Image, AspectRatio } from '@chakra-ui/react';
import Slider from 'react-slick';
import { ContentContainer } from '~/shared/components';
import { useGalleryContext } from './context/GalleryContext';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const InstagramSwiper = () => {
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');
  const { data } = useGalleryContext();

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: isLargerThanTablet ? 4 : 2,
    slidesToScroll: isLargerThanTablet ? 3 : 2,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <Box>
      <Slider {...sliderSettings}>
        {data.map((post) => {
          return (
            <Flex key={post.id}>
              <AspectRatio ratio={1 / 1}>
                <Image
                  boxSize='xs'
                  fit='scale-down'
                  src={post.media_url}
                  alt='Instagram Post by @chasersjuicetoronto'
                  mx='auto'
                />
              </AspectRatio>
            </Flex>
          );
        })}
      </Slider>
    </Box>
  );
};

export const InstagramGallery = () => {
  return (
    <Box>
      <ContentContainer maxW='container.2xl' py='12' px="0">
        <InstagramSwiper />
      </ContentContainer>
    </Box>
  );
};

export default InstagramGallery;
