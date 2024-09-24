import React from "react";
import LoadingWord from "./LoadingWord";
import DotLine from "./DotLine";
import "../css/initialLoading.css"

const InitialLoading = () => {
  return (
    <div className="min-h-screen flex initialLoadingBg justify-center items-center">
      <div>
        <LoadingWord />
        <DotLine />
      </div>
    </div>
  );
};

export default InitialLoading;
