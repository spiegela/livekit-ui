import '@livekit/components-styles';
import '@livekit/components-styles/prefabs';
import {ConnectionState, LiveKitRoom, VideoConference} from '@livekit/components-react';
import React from "react";

export default function Home() {
  return (
        <LiveKitRoom serverUrl={serverUrl} token={accessToken} connect={true}>
            <ConnectionState/>
            <VideoConference/>
        </LiveKitRoom>
  )
}
