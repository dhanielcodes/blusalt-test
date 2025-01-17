import React from "react";
import NotificationSlip from "@/app/components/bits/NotificationSlip";
import BugIcon from "@/app/icons/bitIcons/BugIcon";
import AvatarIcon from "@/app/icons/bitIcons/AvatarIcon";

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
  return [1, 2, 3, 4]?.map(() => {
    return <NotificationSlip icon={<BugIcon />} />;
  });
};
const ActivitySection = () => {
  return [1, 2, 3, 4, 5]?.map(() => {
    return <NotificationSlip icon={<AvatarIcon />} />;
  });
};
const ContactsSection = () => {
  return [1, 2, 3, 4, 5]?.map(() => {
    return (
      <NotificationSlip
        time=""
        message="Adrian"
        icon={<AvatarIcon showChainLine={false} />}
      />
    );
  });
};

NotificationsTab.propTypes = {};

export default NotificationsTab;
