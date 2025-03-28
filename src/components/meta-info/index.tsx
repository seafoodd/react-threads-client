import React from "react";
import { IconType } from "react-icons";

type Props = {
  count: number;
  Icon: IconType;
};

const MetaInfo: React.FC<Props> = ({ count = 0, Icon }) => {
  return (
    <div className="flex items-center gap-1 cursor-pointer">
      <p className="text-default-400 text-xl hover:text-2xl ease-in duration-100">
        <Icon />
      </p>
      {count > 0 && (
        <p className="font-semibold text-default-400 text-l">{count}</p>
      )}
    </div>
  );
};

export default MetaInfo;
