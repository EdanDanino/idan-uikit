import { ReactNode, useEffect, useState } from "react";
import { IconOptions } from "../types";

type useDyanmicImportIconProps = {
  iconsNames: IconOptions[];
};

const useDyanmicImportIcon = ({ iconsNames }: useDyanmicImportIconProps) => {
  const [components, setComponents] = useState<ReactNode[]>([]);

  useEffect(() => {
    iconsNames.forEach(async (name) =>
      import(`../../icons/${name as string}.svg`).then((module) => {
        setComponents((prevState) => [...prevState, module.ReactComponent]);
      })
    );
  }, [iconsNames]);

  if (!components.length) {
    return undefined;
  }

  return components;
};

export default useDyanmicImportIcon;
