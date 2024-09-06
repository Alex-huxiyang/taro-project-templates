import React, { useEffect, useState } from "react";
import { useDidShow, useDidHide } from "@tarojs/taro";
import { ConfigProvider } from "@nutui/nutui-react-taro";
import enUS from "./locales/en-US";
import zhCN from "./locales/zh-CN";
import Index from "./pages/index";
import "./app.scss";

function App(props) {
  const [locale, setLocale] = useState(zhCN);
  const handleSwitchLocale = () => {
    setLocale(locale === zhCN ? enUS : zhCN);
  };
  // 可以使用所有的 React Hooks
  useEffect(() => {});

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});
  console.log(props.children);
  return (
    <ConfigProvider locale={locale}>
      <Index locale={locale} handleSwitchLocale={handleSwitchLocale} />
    </ConfigProvider>
  );
}

export default App;
