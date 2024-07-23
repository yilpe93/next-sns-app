"use client";

import React, { useEffect } from "react";
import { useNotice } from "./NoticeProvider";

const Notice: React.FC = () => {
  // Context 사용
  const { show, isSuccessed, header, message, close } = useNotice();

  // 3초뒤에 알림창을 스스로 닫는다.
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        close();
      }, 3000);
    }

    return () => {
      close();
    };
  }, [close, show]);

  return (
    <div>
      {show && (
        // className={ isSuccessed ? styles.successed : styles.failed }
        <div>
          <div>
            <div>{header}</div>
            <button onClick={close}>✕</button>
          </div>
          <div>{message}</div>
        </div>
      )}
    </div>
  );
};

export default Notice;
