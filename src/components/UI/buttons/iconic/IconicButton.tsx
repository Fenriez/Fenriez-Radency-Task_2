import {
  faBoxArchive,
  faPencil,
  faTrashCan
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../../store/actions/modalActions";

interface iconic_button_props {
  type: string;
  onClick: any;
  targetID?: number;
}

const IconicButton = ({ type, ...props }: iconic_button_props) => {
  const dispatch = useDispatch();
  let icon: React.ReactNode;
  let onClick: Function;

  if (type === "edit") {
    icon = <FontAwesomeIcon icon={faPencil} />;
    onClick = (): void => {
      dispatch(props.onClick(props.targetID));
      dispatch(toggleModal())
    }
  } else if (type === "archive") {
    icon = <FontAwesomeIcon icon={faBoxArchive} />;
    onClick = (): void => {
      dispatch(props.onClick(props.targetID));
    }
  } else if (type === "archiveAll") {
    icon = <FontAwesomeIcon icon={faBoxArchive} />;
    onClick = (): void => {
      dispatch(props.onClick());
    }
  } else if (type === "delete") {
    icon = <FontAwesomeIcon icon={faTrashCan} />;
    onClick = (): void => {
      dispatch(props.onClick(props.targetID));
    }
  } else if (type === "deleteAll") {
    icon = <FontAwesomeIcon icon={faTrashCan} />;
    onClick = (): void => {
      dispatch(props.onClick());
    }
  }

  return (
    <button
      className={"iconic_button"}
      onClick={() => {
        onClick()
      }}
    >
      {icon}
    </button>
  );
};

export default IconicButton;
