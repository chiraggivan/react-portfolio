import { ProgressBar } from "react-bootstrap";

interface Props {
  techName: string;
  techPctg: number;
}

const TechProgressBar = ({ techName, techPctg }: Props) => {
  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between mb-1 fs-4">
        <span>{techName}</span>
        <span>{techPctg}%</span>
      </div>
      <ProgressBar
        now={techPctg}
        variant="primary"
        className="mb-4 pill-progress"
      />
    </div>
  );
};

export default TechProgressBar;
