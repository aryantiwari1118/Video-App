import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
    const { roomID } = useParams();

    const myMeeting = async (element) => {
        const appID = 617745495;
        const serverSecret = "5aac35caabc495f7c87530c38c28bc57";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Aryan Tiwari");

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks : [
                {
                    name : 'Copy Link',
                    url : `http://localhost:3000/room/$[roomID]`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
        });
    };

    return (
        <div>
            <h1>Room {roomID}</h1>
            <div ref={myMeeting} />
        </div>
    );
};

export default RoomPage;
