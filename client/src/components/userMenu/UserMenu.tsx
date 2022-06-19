import { useEffect, useState } from "react";
import {
  displayMenuData,
  settingMenuData,
  supportMenuData,
} from "../../data/userMenu.data";
import UserMenuDetail from "./UserMenuDetail";
import UserMenuMain from "./UserMenuMain";

export default function UserMenu() {
  const [userMenuMode, setUserMenuMode] = useState("main");
  const [userMenu, setUserMenu] = useState(<></>);

  useEffect(() => {
    console.log(userMenuMode);
    switch (userMenuMode) {
      case "main": {
        setUserMenu(<UserMenuMain setUserMenuMode={setUserMenuMode} />);
        break;
      }
      case "setting": {
        setUserMenu(
          <UserMenuDetail
            title={settingMenuData.title}
            items={settingMenuData.items}
            setUserMenuMode={setUserMenuMode}
          />
        );
        break;
      }
      case "support": {
        setUserMenu(
          <UserMenuDetail
            title={supportMenuData.title}
            items={supportMenuData.items}
            setUserMenuMode={setUserMenuMode}
          />
        );
        break;
      }
      case "display": {
        setUserMenu(
          <UserMenuDetail
            title={displayMenuData.title}
            items={displayMenuData.items}
            setUserMenuMode={setUserMenuMode}
          />
        );
        break;
      }
    }
  }, [userMenuMode]);

  return (
    <div className="bg-white p-2 rounded-lg shadow-xl overflow-y-scoll z-50 w-96">
      {userMenu}
    </div>
  );
}
