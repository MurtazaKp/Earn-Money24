"use client";
import { http } from "@/client";
import LayoutComponent from "@/components/layout";
import WorkTable from "@/components/worksTable";
import { theme } from "antd";
import { useEffect, useState } from "react";
import LoginForm from "../components/login";

export default function Home() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return <LoginForm />;
}
