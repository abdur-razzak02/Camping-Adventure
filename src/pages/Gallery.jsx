import { Helmet } from "react-helmet-async";

const Gallery = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-355px)] bg-slate-100">
      <Helmet><title>Blog | Camping Adventure</title></Helmet>
      <h1 className="font-play font-semibold text-4xl text-red-600">
        No Photos available now!
      </h1>
    </div>
  );
};

export default Gallery;
