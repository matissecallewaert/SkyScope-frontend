import ReactModal from "react-modal";
import "./dialog.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Dialog({
  isOpen,
  children,
  onRequestClose,
  title,
  size,
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEsc = true,
}) {
  const classNames = ["dialog-body"];
  if (size === "small") {
    classNames.push("is-small");
  }
  if (size === "wide") {
    classNames.push("is-wide");
  }
  if (size === "slide") {
    classNames.push("is-slide");
  }
  if (size === "xsmall") {
    classNames.push("is-xsmall");
  }
  if (size === "large") {
    classNames.push("is-large");
  }
  if (size === "msmall") {
    classNames.push("is-msmall");
  }

  return (
    <ReactModal
      isOpen={isOpen}
      appElement={window.document.getElementById("root")}
      onRequestClose={onRequestClose}
      className={classNames.join(" ")}
      overlayClassName="dialog-overlay"
      bodyOpenClassName="dialog-open"
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      shouldCloseOnEsc={shouldCloseOnEsc}
    >
      <div className={"dialog-header items-center"}>
        <div className="flex items-center">
          <div className="dialog-title">{title}</div>
        </div>
        <div
          className="close-button ml-auto"
          title="Close dialog"
          onClick={() => {
            onRequestClose();
          }}
        >
          <AiOutlineClose />
        </div>
      </div>
      <div className="dialog-content">{isOpen ? children : null}</div>
    </ReactModal>
  );
}