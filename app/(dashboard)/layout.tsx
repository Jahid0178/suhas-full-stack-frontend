import React from "react";

interface Args {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Readonly<Args>) => {
  return (
    <React.Fragment>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default DashboardLayout;
