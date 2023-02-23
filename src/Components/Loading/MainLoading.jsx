import ReactLoading from "react-loading";

function Loading() {
    return (
        <div className="h-screen w-screen justify-items-center grid content-center bg-black">
            <ReactLoading type="cylon" color="#FF007F"
                height={100} width={50} />
        </div>
    );
}

export default Loading;