import AvatarIcon from "../icons/bitIcons/AvatarIcon";
import BroadCastIcon from "../icons/bitIcons/BroadcastIcon";
import BugIcon from "../icons/bitIcons/BugIcon";
import PersonIcon from "../icons/bitIcons/PersonIcon";

const notifications = [
  {
    message: "You fixed a bug",
    time: "Just now",
    Icon: <BugIcon />,
  },
  {
    message: "New User registered",
    time: "59 minutes ago",
    Icon: <PersonIcon />,
  },
  {
    message: "You fixed a bug",
    time: "12 hours ago",
    Icon: <BugIcon />,
  },
  {
    message: "Andi Lane subscribed to you.",
    time: "Today, 11:59 AM",
    Icon: <BroadCastIcon />,
  },
];

const activities = [
  {
    message: "Changed the style.",
    time: "Just now",
    Icon: <AvatarIcon />,
  },
  {
    message: "Released a new version.",
    time: "59 minutes ago",
    Icon: <AvatarIcon />,
  },
  {
    message: "Submitted a bug.",
    time: "12 hours ago",
    Icon: <AvatarIcon />,
  },
  {
    message: "Modified A data in Page X.",
    time: "Today, 11:59 AM",
    Icon: <AvatarIcon />,
  },
  {
    message: "Deleted a page in Project X.",
    time: "Feb 2, 2024",
    Icon: <AvatarIcon showChainLine={false} />,
  },
];

const contacts = [
  {
    message: "Natali Craig",
    Icon: <AvatarIcon showChainLine={false} />,
  },
  {
    message: "Drew Cano",
    Icon: <AvatarIcon showChainLine={false} />,
  },
  {
    message: "Andi Lane",
    Icon: <AvatarIcon showChainLine={false} />,
  },
  {
    message: "Koray Okumus",
    Icon: <AvatarIcon showChainLine={false} />,
  },
  {
    message: "Kate Morrison",
    Icon: <AvatarIcon showChainLine={false} />,
  },
  {
    message: "Melody Macy",
    Icon: <AvatarIcon showChainLine={false} />,
  },
];

export { notifications, activities, contacts };
