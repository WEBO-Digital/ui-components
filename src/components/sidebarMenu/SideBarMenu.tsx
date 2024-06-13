import React, { useState } from "react";
import IconsComponent, { icons } from "../icons/IconsComponent";
import ImageComponent from "../Image/Image";

type MenuItem = {
  name: string;
  link: string;
  icons: string;
  children?: MenuItem[];
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

type SideBarMenuProps = {
  classes?: string;
  expandSideBar: boolean;
  sidebarMenus: MenuSection[];
  imageSrc?: string;
};

const SideBarMenu: React.FC<SideBarMenuProps> = ({
  classes,
  expandSideBar,
  sidebarMenus,
  imageSrc,
}) => {
  return (
    <div
      className={`sidebar-menu min-h-screen transition duration-150 ease-in-out ${
        classes || ""
      } ${expandSideBar ? "expanded w-[288px]" : "w-[96px]"} bg-gray-950 text-white py-6 fixed top-0 bottom-0 left-0 overflow-y-auto`}
    >
      <div className="grid grid-cols-1 place-content-between h-full">
        <div>
          <div className="logo px-6 mb-5">
            <ImageComponent
              src={`${imageSrc ? imageSrc : "../src/assets/images/placeholder-image.png"}`}
              width={expandSideBar ? 84 : 48}
            />
          </div>
          {sidebarMenus.map((section, index) => (
            <div key={index} className="menu-section mb-6">
              {expandSideBar && (
                <h3 className="px-6 text-xs text-gray-500 mb-3">
                  {section.title}
                </h3>
              )}
              <ul className="list-none">
                {section.items.map((item, itemIndex) => (
                  <SideBarItem
                    item={item}
                    key={itemIndex}
                    expandSideBar={expandSideBar}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/*bottom menu*/}
        <div>
          <ul className="list-none">
            <li className={`menu-item relative px-6`}>
              <a
                href={``}
                className="flex items-center justify-start gap-2 p-3 hover:bg-black"
              >
                <span className="icon-wrap">
                  <IconsComponent
                    icon="fill-website"
                    size="md"
                    fill="#ffffff"
                  />
                </span>
                {expandSideBar && (
                  <span className="text-4 text-gray-300">Visit website</span>
                )}
                {expandSideBar && (
                  <span className="icon-wrap ml-auto">
                    <IconsComponent icon="reg-link" size="md" fill="#ffffff" />
                  </span>
                )}
              </a>
            </li>
            <li className={`menu-item relative px-6`}>
              <a
                href={``}
                className="flex items-center justify-start gap-2 p-3 hover:bg-black"
              >
                <span className="icon-wrap">
                  <IconsComponent icon="fill-logout" size="md" fill="#ffffff" />
                </span>
                {expandSideBar && (
                  <span className="text-4 text-gray-300">Logout</span>
                )}
              </a>
            </li>
          </ul>
        </div>
        {/*bottom menu end*/}
      </div>
    </div>
  );
};

export default SideBarMenu;

type SideBarItemProps = {
  item: MenuItem;
  expandSideBar: boolean;
};

const SideBarItem: React.FC<SideBarItemProps> = ({ item, expandSideBar }) => {
  const [toggleData, setToggleData] = useState<boolean>(false);

  return (
    <>
      <li
        className={`menu-item relative ${
          item?.children && expandSideBar ? "pl-6 pr-12" : "px-6"
        }`}
      >
        <a
          href={item.link}
          className="flex items-center justify-start gap-2 p-3 hover:bg-black"
        >
          <span className="icon-wrap">
            <IconsComponent
              icon={item?.icons as keyof typeof icons}
              size="md"
              fill="#ffffff"
            />
          </span>
          {expandSideBar && (
            <span className="text-4 text-gray-300">{item.name}</span>
          )}
        </a>
        {item.children && expandSideBar && (
          <>
            <span
              className={`toggle flex items-center justify-center w-4 h-4 ${
                toggleData ? "rotate-0" : "rotate-180"
              } absolute top-4 right-5`}
              onClick={() => setToggleData(!toggleData)}
            >
              <IconsComponent fill="#D1D5DB" icon="reg-chevron-up" size="xs" />
            </span>

            <ul
              className={`${
                toggleData ? "open-true max-h-[1000px]" : "open-false max-h-0"
              } overflow-hidden duration-150 ease-in-out`}
            >
              {item.children.map((child, childIndex) => (
                <li
                  key={childIndex}
                  className="submenu-item pl-10 mt-3 first:mt-1"
                >
                  <a href={child.link} className="text-4 text-gray-300">
                    {child.name}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </li>
    </>
  );
};
