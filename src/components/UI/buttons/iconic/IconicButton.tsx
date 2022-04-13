import {
    faBoxArchive,
    faPencil,
    faTrashCan
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type iconicButtonProps = {
    type: string
}

const IconicButton = ({type}: iconicButtonProps) => {
  let icon: React.ReactNode;

  if (type === "edit") {
    icon = <FontAwesomeIcon icon={faPencil} />;
  } else if (type === "archive") {
    icon = <FontAwesomeIcon icon={faBoxArchive} />;
  } else if (type === "delete") {
    icon = <FontAwesomeIcon icon={faTrashCan} />;
  }

  return <button className={"iconic_button"}>{icon}</button>;
};

export default IconicButton;
