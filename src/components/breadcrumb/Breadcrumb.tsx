import React, { ReactNode } from "react";
import { slugify } from "../../utils/slugify";

interface BreadcrumbsProps {
  title: string | ReactNode;
  path?: { id: number; link: string; label: string }[];
  children?: ReactNode;
  previcon?: React.JSX.Element;
  onClick?: () => void;
}
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  title,
  path,
  children,
  previcon,
  onClick,
}) => {
  return (
    <div
      className={`breadcrumb  bg-danger-0 px-6 py-4 flex  items-center gap-5 breadcrumb-${
        title ? slugify(title) : "default"
      }`}
    >
      {previcon && (
        <div
          className="icon w-[36px] h-[36px] inline-flex items-center justify-center border border-neutral-200 rounded cursor-pointer"
          onClick={onClick}
        >
          {previcon}
        </div>
      )}
      <div
        className={`inline-flex flex-wrap items-center justify-between  ${
          previcon ? "w-[calc(100%_-_50px)]" : "w-full"
        }`}
      >
        <div className="title-wrap">
          {title && (
            <h1 className="text-2xl text-neutral-500 font-semibold">{title}</h1>
          )}

          {path && (
            <ul className="breadcrumb list-none flex items-center gap-1">
              {path
                .filter((path) => path?.label !== "")
                .map((segment) => (
                  <>
                    {segment.label === "" ? undefined : (
                      <li
                        key={segment?.id}
                        className="breadcrumb-item font-normal text-sm inline-flex after:content-['/'] after:block last:after:content-none after:ml-1 after:text-gray-500"
                      >
                        {(() => {
                          switch (true) {
                            case segment?.id !== path.length - 1:
                              return (
                                <a
                                  href={segment?.link ?? "/"}
                                  className="text-gray-500"
                                >
                                  {segment?.label}
                                </a>
                              );
                            default:
                              return (
                                <span className="text-gray-800">
                                  {segment?.label}
                                </span>
                              );
                          }
                        })()}
                      </li>
                    )}
                  </>
                ))}
            </ul>
          )}
        </div>
        {children && (
          <div className="other-accessories ml-auto flex flex-wrap gap-4">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Breadcrumbs;
