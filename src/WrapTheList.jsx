import { createElement } from "react";

export default function WrapTheList({ list, mainTagName, nestedTags = "" }) {
  if (mainTagName === "ul" || mainTagName === "ol") nestedTags = "li";
  const content = list.map((listItem) => {
    return createElement(
      nestedTags,
      { key: listItem.id },
      listItem.title
    );
  });
  let element = createElement(
    mainTagName,
    { key: mainTagName + nestedTags + list.length },
    content
  );

  return element;
}
