import React from "react";
import NotificationSlip from "@/app/components/bits/NotificationSlip";
import BugIcon from "@/app/icons/bitIcons/BugIcon";
import AvatarIcon from "@/app/icons/bitIcons/AvatarIcon";
import { activities, contacts, notifications } from "../libs/NotificationsData";

function NotificationsTab() {
  return (
    <div className=" bg-[#FFF8F8] rounded-2xl p-6 h-[85vh] overflow-hidden overflow-y-scroll">
      <div className="mb-5">
        <div className="text-base text-medium mb-8">Notifications</div>
        <NotificationSection />
      </div>

      <div className="mb-5">
        <div className="text-base text-medium mb-8">Activities</div>
        <ActivitySection />
      </div>

      <div className="mb-5">
        <div className="text-base text-medium mb-8">Contacts</div>
        <ContactsSection />
      </div>
    </div>
  );
}

const NotificationSection = () => {
  return notifications?.map((item) => {
    return <NotificationSlip {...item} />;
  });
};
const ActivitySection = () => {
  return activities?.map((item, index: number) => {
    return <NotificationSlip {...item} />;
  });
};
const ContactsSection = () => {
  return contacts?.map((item) => {
    return <NotificationSlip {...item} />;
  });
};

NotificationsTab.propTypes = {};

export default NotificationsTab;
