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
          onClick={onClickMarked}
          type="bold"
          iconName="Bold"
          active={markActive("bold")}
          colors={colors}
        />
        <FormatButton
          onClick={onClickMarked}
          type="italic"
          iconName="Italic"
          active={markActive("italic")}
          colors={colors}
        />
        <FormatButton
          onClick={onClickMarked}
          type="strikethrough"
          iconName="Strikethrough"
          active={markActive("strikethrough")}
          colors={colors}
        />
        <FormatButton
          onClick={onClickBlock}
          type="heading-two"
          iconName="HeadingTwo"
          active={blockActive("heading-two")}
          colors={colors}
        />
        <FormatButton
          onClick={onClickBlock}
          type="heading-three"
          iconName="HeadingThree"
          active={blockActive("heading-three")}
          colors={colors}
        />
        <FormatButton
          onClick={onClickBlock}
          type="block-quote"
          iconName="BlockQuote"
          active={blockActive("block-quote")}
          colors={colors}
        />
        <FormatButton
          onClick={onClickLink}
          type="link"
          iconName="Link"
          active={linkActive()}
          colors={colors}
        />
      </View>
    )}
  </Theme.Consumer>
);

FormatOptions.displayName = "FormatOptions";

export default FormatOptions;
