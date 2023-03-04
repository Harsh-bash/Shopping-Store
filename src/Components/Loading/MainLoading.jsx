import ReactLoading from "react-loading";

function Loading() {
    return (
        <div className="h-screen w-screen justify-items-center grid content-center">
            <ReactLoading type="cylon" color="#225ac9"
                height={100} width={50} />
        </div>
    );
}

export default Loading;