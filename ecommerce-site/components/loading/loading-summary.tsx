import { Skeleton } from "../ui/skeleton";

const LoadingSummary = () => {
    return (
        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 space-y-4">
            <Skeleton className="h-7 w-[200px]" />
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <Skeleton className="h-6 w-[100px]" />
                    <Skeleton className="h-6 w-[100px]" />
                </div>
            </div>
            <Skeleton className="w-full h-10" />
        </div>
    );
};

export default LoadingSummary;
