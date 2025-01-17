import { NavItemProps } from "@/app/types/NavDataTypes";

export default function NavItem({
  name = "Overview",
  onClick,
  icon,
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
          <div className="text-black font-light text-base font-[family-name:var(--font-plex-sans)]">
            {name}
          </div>
        </div>
      </div>
    </>
  );
}
