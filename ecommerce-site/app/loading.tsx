import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";
import LoadingList from "@/components/loading/loading-list";

const Loading = () => {
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
                    <Skeleton className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover" />
                </div>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <LoadingList />
                </div>
            </div>
        </Container>
    );
};

export default Loading;
