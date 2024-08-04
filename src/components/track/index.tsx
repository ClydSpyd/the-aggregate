import Slider from "react-slick";
import ArticleCard from "../article-card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  title: string;
  articles: PerigonArticle[];
}

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Track({ title, articles }: Props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <div className="w-full px-8">
      <h2 className="pl-5 mb-3 text-xl font-semibold">{title}</h2>
      <div className="w-full px-2 gap-3">
        <Slider {...settings}>
          {articles.map((i: PerigonArticle) => (
            <ArticleCard key={i.articleId} article={i} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
