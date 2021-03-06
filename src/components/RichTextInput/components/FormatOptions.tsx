import * as React from "react";
import { Colors } from "../../../foundations/foundation-types";
import Button from "../../Button";
import Theme from "../../Theme";
import View from "../../View";

export interface Props {
  onClickMarked: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  onClickBlock: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  onClickLink: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  blockActive: (type: string) => boolean;
  markActive: (type: string) => boolean;
  linkActive: () => boolean;
}

const FormatButton: React.SFC<any> = ({
  type,
  iconName,
  onClick,
  active,
  colors,
  ...props
}: {
  iconName: string;
  type: string;
  active: boolean;
  colors: Colors;
  onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <Button
      color="accent"
      data-value={type}
      onClick={onClick}
      active={active}
      iconName={iconName}
      css={[
        {
          svg: {
            color: colors.subtle,
          },
          "&:hover": {
            color: colors.contrast,
            svg: {
              color: colors.contrast,
            },
          },
          "&:focus, &:active": {
            color: colors.accent,
            svg: {
              color: colors.accent,
            },
          },
        },
        active
          ? {
              svg: {
                color: colors.accent,
              },
            }
          : {},
      ]}
      {...props}
    />
  );
};

const FormatOptions: React.SFC<Props> = ({
  onClickMarked,
  onClickBlock,
  blockActive,
  markActive,
  linkActive,
  onClickLink,
}: Props) => (
  <Theme.Consumer>
    {({ colors }) => (
      <View flexDirection="row">
        <FormatButton
          data-testid="markBold"
          onClick={onClickMarked}
          type="bold"
          iconName="Bold"
          active={markActive("bold")}
          colors={colors}
        />
        <FormatButton
          data-testid="markItalic"
          onClick={onClickMarked}
          type="italic"
          iconName="Italic"
          active={markActive("italic")}
          colors={colors}
        />
        <FormatButton
          data-testid="markUnderline"
          onClick={onClickMarked}
          type="underline"
          iconName="Underline"
          active={markActive("underline")}
          colors={colors}
        />
        <FormatButton
          data-testid="markStrikethrough"
          onClick={onClickMarked}
          type="strikethrough"
          iconName="Strikethrough"
          active={markActive("strikethrough")}
          colors={colors}
        />
        <FormatButton
          data-testid="blockHeadingTwo"
          onClick={onClickBlock}
          type="heading-two"
          iconName="HeadingTwo"
          active={blockActive("heading-two")}
          colors={colors}
        />
        <FormatButton
          data-testid="blockHeadingThree"
          onClick={onClickBlock}
          type="heading-three"
          iconName="HeadingThree"
          active={blockActive("heading-three")}
          colors={colors}
        />
        <FormatButton
          data-testid="blockBlockquote"
          onClick={onClickBlock}
          type="block-quote"
          iconName="BlockQuote"
          active={blockActive("block-quote")}
          colors={colors}
        />
        <FormatButton
          data-testid="inlineLink"
          onClick={onClickLink}
          type="link"
          iconName="Link"
          active={linkActive()}
          colors={colors}
        />
        <FormatButton
          data-testid="blockNumberedList"
          onClick={onClickBlock}
          type="numbered-list"
          iconName="OlList"
          active={blockActive("numbered-list")}
          colors={colors}
        />
        <FormatButton
          data-testid="blockBulletedList"
          onClick={onClickBlock}
          type="bulleted-list"
          iconName="UlList"
          active={blockActive("bulleted-list")}
          colors={colors}
        />
      </View>
    )}
  </Theme.Consumer>
);

FormatOptions.displayName = "FormatOptions";

export default FormatOptions;
