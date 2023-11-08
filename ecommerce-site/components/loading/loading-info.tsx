import { Skeleton } from "../ui/skeleton";

const LoadingInfo = () => {
    return (
        <div className="flex-col">
            <Skeleton className="h-9 w-[200px]" />
            <div className="mt-3 flex items-center justify-start">
                <p className="text-2xl text-gray-900">
                    <Skeleton className="h-8 w-[150px]" />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <Skeleton className="h-6 w-[100px]" />
                    <Skeleton className="h-6 w-[100px]" />
                </div>
                <div className="flex items-center gap-x-4">
                    <Skeleton className="h-6 w-[100px]" />
                    <Skeleton className="h-6 w-6 rounded-full" />
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Skeleton className="h-10 w-[100px]" />
            </div>
        </div>
    );
};

export default LoadingInfo;
