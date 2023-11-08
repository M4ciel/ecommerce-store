import { Skeleton } from "../ui/skeleton";

const LoadingCartItem = () => {
    return (
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Skeleton className="h-full w-full" />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <Skeleton className="h-4 w-4 rounded-full" />
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0 space-y-1">
                    <div className="flex justify-between">
                        <Skeleton className="h-7 w-[100px]" />
                    </div>
                    <div className="mt-1 flex text-sm">
                        <Skeleton className="h-6 w-7" />
                        <Skeleton className="h-6 w-7 ml-4" />
                    </div>
                    <Skeleton className="h-6 w-[100px]" />
                </div>
            </div>
        </li>
    );
};

export default LoadingCartItem;
