import { Card, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const LoadingCard = () => {
    return (
        <Card className="group p-3 space-y-4">
            <CardHeader className="aspect-square rounded-xl bg-gray-100 relative">
                <Skeleton className="aspect-square object-cover rounded-md" />
            </CardHeader>
            <div>
                <Skeleton className="h-7 w-[200px] mb-1" />
                <Skeleton className="h-5 w-[100px]" />
            </div>
            <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-[100px]" />
            </div>
        </Card>
    );
};

export default LoadingCard;
