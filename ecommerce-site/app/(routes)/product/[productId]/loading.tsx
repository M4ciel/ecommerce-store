import Container from "@/components/ui/container";
import LoadingList from "@/components/loading/loading-list";
import LoadingGallery from "@/components/loading/loading-gallery";
import LoadingInfo from "@/components/loading/loading-info";

const Loading = () => {
    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <LoadingGallery />
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <LoadingInfo />
                        </div>
                    </div>
                    <hr className="my-10" />
                    <LoadingList />
                </div>
            </Container>
        </div>
    );
};

export default Loading;
