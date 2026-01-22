import React from "react";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Header/Footer/Footer";

interface Args {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: Readonly<Args>) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default ClientLayout;
