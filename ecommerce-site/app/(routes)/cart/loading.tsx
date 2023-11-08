import LoadingCartItem from "@/components/loading/loading-cart-item";
import LoadingSummary from "@/components/loading/loading-summary";
import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <Skeleton className="h-9 w-[200px]" />
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            <ul>
                                <LoadingCartItem />
                                <LoadingCartItem />
                                <LoadingCartItem />
                            </ul>
                        </div>
                        <LoadingSummary />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Loading;
