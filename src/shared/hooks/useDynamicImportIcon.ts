import { ReactNode, useEffect, useState } from "react";
import { IconOptions } from "../types";

type useDyanmicImportIconProps = {
  iconsNames: IconOptions[];
};

const ICONS_PATH = "../../icons";

const useDyanmicImportIcon = ({ iconsNames }: useDyanmicImportIconProps) => {
  const [components, setComponents] = useState<ReactNode[]>([]);

  useEffect(() => {
    iconsNames.forEach(async (name) =>
      import(`${ICONS_PATH}/${name as string}.svg`).then((module) => {
        setComponents((prevState) => [...prevState, module.default]);
      })
    );
  }, [iconsNames]);

  if (!components.length) {
    return undefined;
  }

  return components;
};

export default useDyanmicImportIcon;
