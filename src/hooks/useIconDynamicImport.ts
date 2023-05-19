import React, { useEffect, useState } from "react";

const ICONS = require.context("../icons", false, /\.svg$/).keys();

const useIconDynamicImport = () => {
  const [modules, setModules] = useState<any[]>([]);

  useEffect(() => {
    async function importIcon() {
      const modules = await Promise.all<any>(
        ICONS.map((icon) => import(`../icons/${icon.split("/")[1]}`))
      );
      setModules(modules);
    }
    importIcon();
  }, []);

  return modules;
};

export default useIconDynamicImport;
