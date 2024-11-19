import { useLoaderData } from "react-router-dom";


const CampDetails = () => {
    const data = useLoaderData()
    console.log(data);
    
    return (
        <div>
            <div className="text-center my-20 text-4xl">camp details </div>
        </div>
    );
};

export default CampDetails;