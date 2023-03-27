import Button from "@/components/common/Button";
import { Dispatch, FC, SetStateAction } from "react";

interface SubMenuTabsProps {
  tabs: string[];
  setCurrentTab: Dispatch<SetStateAction<any>>;
  currentTab: string;
}

const SubMenuTabs: FC<SubMenuTabsProps> = ({
  tabs,
  setCurrentTab,
  currentTab,
}) => {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-5">
      {tabs.map((tab, index) => (
        <div key={`tab-${index}`}>
          <Button
            action={() => setCurrentTab(tabs.indexOf(tab))}
            className={
              tab === currentTab
                ? "text-blue-1 phone:text-[8px]"
                : "text-gray-2 phone:text-[8px]"
            }
          >
            {tab}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default SubMenuTabs;
