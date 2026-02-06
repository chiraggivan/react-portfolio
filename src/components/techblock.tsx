import type { ReactNode } from "react";
import {
  FaDesktop,
  FaReact,
  FaUserLock,
  FaGithub,
  FaDatabase,
  FaPython,
} from "react-icons/fa6";
import { BiLogoFlask } from "react-icons/bi";

interface Props {
  techIcon: string;
  techName: string;
  techDescp: ReactNode;
}
// Create a mapping object
const iconMap: Record<
  string,
  React.ComponentType<{ className?: string; size?: number }>
> = {
  FaDesktop: FaDesktop,
  FaReact: FaReact,
  FaUserLock: FaUserLock,
  FaGithub: FaGithub,
  FaDatabase: FaDatabase,
  FaPython: FaPython,
  BiLogoFlask: BiLogoFlask,
  // You can also do: ...fa (but better to be explicit for tree-shaking)
};

function Techblock({ techIcon, techName, techDescp }: Props) {
  const IconComponent = iconMap[techIcon] || null;
  return (
    <div className="d-flex align-items-start mb-4">
      <div className="me-3 fs-1 text-primary">
        {IconComponent ? (
          <IconComponent />
        ) : (
          <div className="text-6xl text-gray-500 mb-4">?</div>
        )}
      </div>
      <div>
        <h5 className="mb-1 fs-2">{techName}</h5>
        <p
          className="text-white-50 text-justify mb-0 fs-5"
          style={{ fontFamily: '"Cascadia Code", system-ui, sans-serif' }}
        >
          {techDescp}
        </p>
      </div>
    </div>
  );
}

export default Techblock;
