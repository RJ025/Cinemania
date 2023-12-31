import { Link, useSearchParams } from "react-router-dom";

const Video = ({info}) => {

    const {snippet , statistics} = info;
    const {channelTitle , publishedAt , thumbnails , title} = snippet;
    const {viewCount} = statistics;

    return (
        <Link to={"/watch?v=" + info.id}>
            <div className="flex flex-col w-[100%]  shadow-md sm:p-1 sm:m-2 sm:w-72">
                <img alt="thumbnail" src={thumbnails.medium.url} className="w-[100%] rounded-lg"/>
                <span className="font-bold ">{title}</span>
                <span>{channelTitle}</span>
                <span>{viewCount}</span>
                <span>{publishedAt}</span>
            </div>
        </Link>
    )
}

export default Video;