import { useEffect } from "react";

export default function NotFound() {
    useEffect(() => {
        document.title = "Not Found! - Galeria";
    }, []);

    return (
        <div className="flex bg-gray-background items-center justify-center h-screen">
            <div className="mx-auth max-w-screen-lg ">
                <p className="text-center text-2xl">Not Found!</p>
            </div>
        </div>
    );
}
