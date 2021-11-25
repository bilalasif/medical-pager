import React from "react";
import { Channel, useChatContext } from "stream-chat-react";

import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from "./";

const ChannelContainer = ({
  isCreating,
  setIsCreating,
  setCreateType,
  isEditing,
  createType,
  setIsEditing,
}) => {
  const { channel } = useChatContext();

  if (isCreating) {
    return (
      <div className="channel__contianer">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    );
  }
  if (isEditing) {
    return (
      <div className="channel__contianer">
        <EditChannel setIsEditing={setIsEditing} />
      </div>
    );
  }
  const EmptyState = () => (
    <div className="channel-empty__container">
      <p className="channel-empty__first">
        This is the begenning of your chat history.
      </p>
      <p className="channel-empty__second">
        Send messages, attachments, links, emojis and more!
      </p>
    </div>
  );
  return (
    <div className="channel__container">
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(messageProps, i) => <TeamMessage key={i} {...messageProps} />}
      >
        <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
    </div>
  );
};

export default ChannelContainer;
