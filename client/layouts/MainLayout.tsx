import React from "react";
import clsx from "clsx";
import LeftMenu from "../components/LeftMenu";
import Header from "../components/Header";
import SideComments from "../components/SideComments";

interface MainLayoutProps {
  hideComments?: boolean;
  contentFullWidth?: boolean;
  children?: React.ReactNode;
  hideMenu?: boolean;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  hideComments,
  contentFullWidth,
  hideMenu,
  className,
}) => {
  return (
    <>
      <Header />
      <div className={clsx("main", className)}>
        {!hideMenu && (
          <div className="leftSide">
            <LeftMenu />
          </div>
        )}
        <div className={clsx("content", { "content--full": contentFullWidth })}>
          {children}
        </div>
        {!hideComments && (
          <div className="rightSide">
            <SideComments />
          </div>
        )}
      </div>
    </>
  );
};

export default MainLayout;
