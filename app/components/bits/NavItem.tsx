import { NavItemProps } from "@/app/types/NavDataTypes";

export default function NavItem({
  name = "Overview",
  onClick,
  icon,
  showName = true,
}: NavItemProps) {
  return (
    <>
      <div
        className={`${"bg-transparent"} 
        p-3 pl-4 rounded-full flex items-center justify-between cursor-pointer`}
        onClick={() => {
          //router.push(route);
          onClick && onClick();
        }}
      >
        <div className="flex items-center gap-2">
          {icon}
          {showName && (
            <div className="text-black font-light text-base font-ibm-plex-sans">
              {name}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
