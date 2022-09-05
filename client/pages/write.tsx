import { NextPage } from "next";
import React from "react";
import WriteForm from "../components/WriteForm";
import MainLayout from "../layouts/MainLayout";

const Write: NextPage = () => {
  return (
    <MainLayout hideMenu hideComments className="main--background--white">
      <WriteForm />
    </MainLayout>
  );
};

export default Write;
