import React, { Component } from "react";
import Avatar from "material-ui/Avatar";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble";
import IconButton from "material-ui/IconButton";
import { grey400, darkBlack, lightBlack } from "material-ui/styles/colors";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import chatPlaceholder from "../../static/guy.jpg";
import postPlaceholder from "../../static/post-placeholder.jpg";
import styles from "./styles.scss";
import { GridList, GridTile } from "material-ui/GridList";

// a TON more samples on lists here:
const iconButtonElement = (
	<IconButton touch={true} tooltip="more" tooltipPosition="bottom-left">
		<MoreVertIcon color={grey400} />
	</IconButton>
);

const rightIconMenu = (
	<IconMenu iconButtonElement={iconButtonElement}>
		<MenuItem>Reply</MenuItem>
		<MenuItem>Forward</MenuItem>
		<MenuItem>Delete</MenuItem>
	</IconMenu>
);

const tilesData = [
	{
		img: postPlaceholder,
		title: "Breakfast",
		author: "jill111"
	},
	{
		img: postPlaceholder,
		title: "Tasty burger",
		author: "pashminu"
	},
	{
		img: postPlaceholder,
		title: "Camera",
		author: "Danson67"
	},
	{
		img: postPlaceholder,
		title: "Morning",
		author: "fancycrave1"
	},
	{
		img: postPlaceholder,
		title: "Hats",
		author: "Hans"
	},
	{
		img: postPlaceholder,
		title: "Honey",
		author: "fancycravel"
	},
	{
		img: postPlaceholder,
		title: "Vegetables",
		author: "jill111"
	},
	{
		img: postPlaceholder,
		title: "Water plant",
		author: "BkrmadtyaKarki"
	}
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */

const style = {
	root: {
		display: "flex",
		justifyContent: "space-around"
	},
	gridList: {
		width: 250,
		height: 200,
		overflowY: "auto",
		marginBottom: ""
	}
};

const GridListExampleSimple = () => (
	<div style={style.root} className="sidebar-posts">
		<GridList cellHeight={180} style={style.gridList} cols={1}>
			{tilesData.map(tile => (
				<GridTile
					key={tile.img}
					title={tile.title}
					subtitle={
						<span>
							by <b>{tile.author}</b>
						</span>
					}
					actionIcon={
						<IconButton>
							<StarBorder color="white" />
						</IconButton>
					}
					className="sidebar-post"
				>
					<img src={tile.img} />
				</GridTile>
			))}
		</GridList>
	</div>
);

const Sidebar = () => (
	<div className="sidebar col-md-3">
		<List>
			<Subheader>Recent Chats</Subheader>
			<ListItem
				leftAvatar={<Avatar src={chatPlaceholder} />}
				rightIconButton={rightIconMenu}
				primaryText="Brendan Lim"
				secondaryText={
					<p>
						<span style={{ color: darkBlack }}>Brunch this weekend?</span>
						<br />
						I&apos;ll be in your neighborhood doing errands this weekend. Do you
						want to grab brunch?
					</p>
				}
				secondaryTextLines={2}
			/>
			<Divider inset={true} />
			<ListItem
				leftAvatar={<Avatar src={chatPlaceholder} />}
				rightIconButton={rightIconMenu}
				primaryText="me, Scott, Jennifer"
				secondaryText={
					<p>
						<span style={{ color: darkBlack }}>Summer BBQ</span>
						<br />
						Wish I could come, but I&apos;m out of town this weekend.
					</p>
				}
				secondaryTextLines={2}
			/>
			<Divider inset={true} />
			<ListItem
				leftAvatar={<Avatar src={chatPlaceholder} />}
				rightIconButton={rightIconMenu}
				primaryText="Grace Ng"
				secondaryText={
					<p>
						<span style={{ color: darkBlack }}>Oui oui</span>
						<br />
						Do you have any Paris recs? Have you ever been?
					</p>
				}
				secondaryTextLines={2}
			/>
			<Divider inset={true} />
			<ListItem
				leftAvatar={<Avatar src={chatPlaceholder} />}
				rightIconButton={rightIconMenu}
				primaryText="Kerem Suer"
				secondaryText={
					<p>
						<span style={{ color: darkBlack }}>Birthday gift</span>
						<br />
						Do you have any ideas what we can get Heidi for her birthday? How
						about a pony?
					</p>
				}
				secondaryTextLines={2}
			/>
			<Divider inset={true} />
			<ListItem
				leftAvatar={<Avatar src={chatPlaceholder} />}
				rightIconButton={rightIconMenu}
				primaryText="Raquel Parrado"
				secondaryText={
					<p>
						<span style={{ color: darkBlack }}>Recipe to try</span>
						<br />
						We should eat this: grated squash. Corn and tomatillo tacos.
					</p>
				}
				secondaryTextLines={2}
			/>
		</List>
		<Divider />
		<List>
			<Subheader>Previous chats</Subheader>
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
		</List>
		<Divider />
		<Subheader>Recent posts</Subheader>
		<GridListExampleSimple />
	</div>
);

export default Sidebar;
