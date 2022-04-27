import { styled } from "@stitches/react";
import * as Popover from "@radix-ui/react-popover";

export const Content = styled(Popover.Content, {
  width: "18rem",
  height: "12rem",
  borderRadius: "0.31rem",
  fontSize: 14,
  backgroundColor: "#FFFFFF",
  color: "#1A202E",
  padding: "0.5rem 0",
  overflow: "auto",
  boxShadow:
    "0 0.625rem 1rem rgba(29, 36, 46, 0.15), 0 0.25rem 0.5rem rgba(29, 36, 46, 0.1)",

  "&::-webkit-scrollbar": {
    width: "0.25rem",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#C9D2DE",
    borderRadius: "0.125rem",
  },
});

export const Label = styled("label", {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 400,
});

export const InputContent = styled("div", {
  position: "relative",
  boxShadow: "0 0.06rem 0.125rem rgba(16, 24, 40, 0.05)",
});

export const Input = styled("input", {
  width: "16rem",
  height: "2.5rem",
  border: "0.06rem solid #D0D5DD",
  fontSize: "1rem",
  borderRadius: "0.5rem",
  padding: "0 1rem",
  outline: "none",
});

export const Trigger = styled(Popover.Trigger, {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  right: "1rem",
  padding: 0,
  border: "none",
  background: "transparent",
  cursor: "pointer",
});

export const Arrow = styled("img", {});

export const Anchor = styled(Popover.Anchor, {});

export const UList = styled("ul", {
  marginBlockStart: 0,
  paddingInlineStart: 0,
  listStyle: "none",
});

export const List = styled("li", {
  padding: "0.5rem 1rem",
  cursor: "pointer",
  lineHeight: "160%",
  "&:hover": {
    backgroundColor: "#EBEEF1",
  },
});
