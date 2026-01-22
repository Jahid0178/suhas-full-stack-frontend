import React from "react";

interface Args {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: Readonly<Args>) => {
  return (
    <React.Fragment>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default ClientLayout;
