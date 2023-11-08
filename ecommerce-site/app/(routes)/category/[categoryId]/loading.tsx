import Container from "@/components/ui/container";
import LoadingCard from "@/components/loading/loading-card";
import LoadingFilter from "@/components/loading/loading-filter";
import LoadingMobileFilter from "@/components/loading/loading-mobile-filter";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <div className="bg-white">
            <Container>
                <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
                    <Skeleton className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover" />
                </div>
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <LoadingMobileFilter />
                        <div className="hidden lg:block">
                            <LoadingFilter />
                            <LoadingFilter />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                <LoadingCard />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Loading;
