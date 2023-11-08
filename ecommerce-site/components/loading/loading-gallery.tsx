import { Skeleton } from "../ui/skeleton";

const LoadingGallery = () => {
    return (
        <div className="space-y-2">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <div className="grid grid-cols-4 gap-6">
                    <Skeleton className="w-[592px] h-[592px]" />
                </div>
            </div>
            <div className="aspect-square w-full">
                <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden flex gap-2">
                    <Skeleton className="w-[130px] h-[130px]" />
                    <Skeleton className="w-[130px] h-[130px]" />
                    <Skeleton className="w-[130px] h-[130px]" />
                </div>
            </div>
        </div>
    );
};

export default LoadingGallery;
