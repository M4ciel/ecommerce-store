import { Skeleton } from "../ui/skeleton";

const LoadingFilter = () => {
    return (
        <div className="mb-8">
            <Skeleton className="h-7 w-[150px]" />
            <hr className="my-4" />
            <div className="flex flex-wrap gap-2">
                <Skeleton className="h-10 w-[100px]" />
                <Skeleton className="h-10 w-[100px]" />
                <Skeleton className="h-10 w-[100px]" />
            </div>
        </div>
    );
};

export default LoadingFilter;
