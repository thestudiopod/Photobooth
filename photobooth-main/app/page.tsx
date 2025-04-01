import CanvasClientContainer from "@/components/canvas-client-wrapper";
import UploadImageComponent from "@/components/upload-image-component";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-row flex-[0_0_200px]">
        <UploadImageComponent />
      </div>
      <div className="flex flex-row">
        <CanvasClientContainer />
      </div>
    </div>
  );
}
