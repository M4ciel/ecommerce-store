import { Skeleton } from "../ui/skeleton";
import LoadingCard from "./loading-card";

const LoadingList = () => {
    return (
        <div className="space-y-4">
            <Skeleton className="h-9 w-[250px]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
            </div>
        </div>
    );
};

export default LoadingList;
