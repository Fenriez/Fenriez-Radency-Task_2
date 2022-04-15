import {
    faCircleExclamation,
    faLightbulb,
    faPoo
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface categoryProps {
  categoryName: string;
  categoryTotalCount: number;
  categoryArchivedCount: number;
}

const Category = ({ ...props }: categoryProps) => {
  let tag: React.ReactNode;

  switch (props.categoryName) {
    case "Task":
      tag = <FontAwesomeIcon icon={faCircleExclamation} />;
      break;
    case "Idea":
      tag = <FontAwesomeIcon icon={faLightbulb} size="lg" />;
      break;
    case "Random Thought":
      tag = <FontAwesomeIcon icon={faPoo} size="lg" />;
      break;
    default:
      break;
  }
  
  return (
    <div className="category">
      <div className="category__cell">{tag}</div>
      <div className="category__cell font_color__black">
        {props.categoryName}
      </div>
      <div className="category__cell">{props.categoryTotalCount}</div>
      <div className="category__cell">{props.categoryArchivedCount}</div>
    </div>
  );
};

export default Category;
