import { Link, useSearchParams } from "react-router-dom";

const ResultVideoCard = ({info}) => {

    const {snippet} = info;
    const {channelTitle , publishedAt , thumbnails , title} = snippet;

    return (
        <Link to={"/watch?v=" + info.id.videoId}>
            <div className="flex flex-col sm:flex-row w-[100%] sm:w-[50rem] shadow-md sm:p-2 sm:m-2">
                <img alt="thumbnail" src={thumbnails.medium.url} className="w-[100%] rounded-lg sm:w-64"/>
                <div className=" sm:flex sm:flex-col sm:w-[100%] sm:px-3">
                    <span className="font-bold ">{title}</span>
                    <span>{channelTitle}</span>
                    <span>{publishedAt}</span>
                </div>
                
            </div>
        </Link>
    )
}

export default ResultVideoCard;