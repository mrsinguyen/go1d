import * as React from "react";

enum BLOCK_TAGS {
  blockquote = "block-quote",
  p = "paragraph",
  h2 = "heading-two",
  h3 = "heading-three",
}

// Add a dictionary of mark tags.
enum MARK_TAGS {
  strong = "bold",
  em = "italic",
  s = "strikethrough",
}

const rules = [
  {
    deserialize(el: any, next: any) {
      const type = BLOCK_TAGS[el.tagName.toLowerCase()];
      if (type) {
        return {
          object: "block",
          type,
          data: {
            className: el.getAttribute("class"),
          },
          nodes: next(el.childNodes),
        };
      }
    },
    serialize(obj: any, children: any) {
      if (obj.object === "block") {
        switch (obj.type) {
          case "heading-two":
            return <h2>{children}</h2>;
          case "heading-three":
            return <h3>{children}</h3>;
          case "paragraph":
            return <p className={obj.data.get("className")}>{children}</p>;
          case "block-quote":
            return <blockquote>{children}</blockquote>;
        }
      }
    },
  },

  {
    deserialize(el: any, next: any) {
      const type = MARK_TAGS[el.tagName.toLowerCase()];
      if (type) {
        return {
          object: "mark",
          type,
          nodes: next(el.childNodes),
        };
      }
    },
    serialize(obj: any, children: any) {
      if (obj.object === "mark") {
        switch (obj.type) {
          case "bold":
            return <strong>{children}</strong>;
          case "italic":
            return <em>{children}</em>;
          case "strikethrough":
            return <s>{children}</s>;
        }
      }
    },
  },
  {
    // special case for links to grab href
    deserialize(el: any, next: any) {
      if (el.tagName.toLowerCase() === "a") {
        return {
          object: "inline",
          type: "link",
          nodes: next(el.childNodes),
          data: {
            href: el.getAttribute("href"),
          },
        };
      }
    },
    serialize(obj: any, children: any) {
      if (obj.object === "inline") {
        switch (obj.type) {
          case "link":
            const { data } = obj;
            const href = data.get("href");
            return <a href={href}>{children}</a>;
        }
      }
    },
  },
];

const DEFAULT_NODE = "paragraph";

export const serializerUtil = {
  DEFAULT_NODE,
  rules,
  MARK_TAGS,
  BLOCK_TAGS,
};
