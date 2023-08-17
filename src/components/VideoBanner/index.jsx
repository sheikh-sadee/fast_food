import React from "react";
import { startTransition } from "react";
import { VideoSection } from "./VideoBanner.styles";
import ReactPlayer from "react-player";
import { Container } from "@/styles/common";

function VideoBanner() {
  const [showVideo, setShowVideo] = React.useState(false);

  React.useEffect(() => {
    startTransition(() => {
      setShowVideo(true);
    });
  }, []);

  return (
    <>
      <VideoSection>
        <Container>
          <div className="holder">
            <iframe
              src="https://share.synthesia.io/embeds/videos/236ef147-ec47-4896-af70-ea9781710994"
              loading="lazy"
              title="Synthesia video player - Your AI video"
              allow="encrypted-media; fullscreen;"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                border: "none",
                padding: "0",
                margin: "0",
                overflow: "hidden",
              }}
            ></iframe>
          </div>
        </Container>
      </VideoSection>
    </>
  );
}

export default VideoBanner;
