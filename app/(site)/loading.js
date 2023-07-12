import React from "react";
import Image from "next/image";
import loading from "../assests/loading.svg";
function GlobalLoading() {
  return (
    <div className="w-full min-h-[90vh] flex items-center justify-center bg-transparent">
      <Image src={loading} width={50} height={50} alt="loading" />
    </div>
  );
}

export default GlobalLoading;
