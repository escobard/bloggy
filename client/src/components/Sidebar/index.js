import React, { Component } from "react";
import Avatar from "material-ui/Avatar";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble";

import chatPlaceholder from "../../static/guy.jpg";
import styles from "./styles.scss";

const Sidebar = () => (
	<div className="sidebar col-md-3">
		<List>
			<Subheader>Recent chats</Subheader>
			<ListItem
				primaryText="Brendan Lim"
				leftAvatar={<Avatar src={chatPlaceholder} />}
				rightIcon={<CommunicationChatBubble />}
			/>
			<ListItem
				primaryText="Eric Hoffman"
				leftAvatar={<Avatar src={chatPlaceholder} />}
				rightIcon={<CommunicationChatBubble />}
			/>
			<ListItem
				primaryText="Grace Ng"
				leftAvatar={<Avatar src={chatPlaceholder} />}
				rightIcon={<CommunicationChatBubble />}
			/>
			<ListItem
				primaryText="Kerem Suer"
				leftAvatar={<Avatar src={chatPlaceholder} />}
				rightIcon={<CommunicationChatBubble />}
			/>
			<ListItem
				primaryText="Raquel Parrado"
				leftAvatar={<Avatar src={chatPlaceholder} />}
				rightIcon={<CommunicationChatBubble />}
			/>
		</List>
		<Divider />
		<List>
			<Subheader>Previous chats</Subheader>
			<ListItem
				primaryText="Chelsea Otakan"
				leftAvatar={<Avatar src={chatPlaceholder} />}
			/>
			<ListItem
				primaryText="James Anderson"
				leftAvatar={<Avatar src={chatPlaceholder} />}
			/>
		</List>
	</div>
);

export default Sidebar;
