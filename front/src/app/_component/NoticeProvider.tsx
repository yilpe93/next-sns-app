"use client";

import { createContext, useContext, useState } from "react";

interface IStates {
  show: boolean;
  isSuccessed: boolean;
  header: string;
  message: string;
  successed: () => void;
  failed: () => void;
  close: () => void;
}

const defaultState: IStates = {
  show: false,
  isSuccessed: false,
  header: "",
  message: "",
  successed: () => {},
  failed: () => {},
  close: () => {},
};

// Provider에 들어갈 value를 생성한다.
const StateContext = createContext(defaultState);

export const NoticeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(defaultState);

  // 작업 성공 시 초록색 알림창을 띄우는 함수
  const successed = () => {
    setState((prev) => ({
      ...prev,
      show: true,
      isSuccessed: true,
      header: "성공",
      message: "성공",
    }));
  };

  // 작업 실패 시 빨간색 알림창을 띄우는 함수
  const failed = () => {
    setState((prev) => ({
      ...prev,
      show: true,
      isSuccessed: false,
      header: "실패",
      message: "실패",
    }));
  };

  // 알림창을 닫는 함수
  const close = () => {
    setState(defaultState);
  };

  const noticeCtx: IStates = {
    show: state.show,
    isSuccessed: state.isSuccessed,
    header: state.header,
    message: state.message,
    successed,
    failed,
    close,
  };
  return (
    <StateContext.Provider value={noticeCtx}>{children}</StateContext.Provider>
  );
};

// 사용하기 편하게 훅으로 만들어준다.
export const useNotice = () => {
  return useContext(StateContext);
};

export default NoticeProvider;
