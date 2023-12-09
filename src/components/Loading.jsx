import React, { cloneElement } from "react";

function Loading({ loading, error, children }) {
  const elementType = children.type.render?.displayName;
  const renderHandler = () => {
    let content;

    if (loading) {
      content =
        elementType === "Button" ? (
          cloneElement(children, { disabled: true }, "Loading")
        ) : (
          <p>loading ....</p>
        );
    } else if (error) {
      content =
        elementType === "Button" ? (
          <>
            {children}
            <br />
            <p>{error.message}</p>
          </>
        ) : (
          <p>{error.message}</p>
        );
    } else {
      content = children;
    }

    return content;
  };

  return renderHandler();
}

export default Loading;
