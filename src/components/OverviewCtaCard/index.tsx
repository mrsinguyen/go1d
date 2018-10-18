import * as React from "react";

import Avatar from "../Avatar";
import ButtonFilled from "../ButtonFilled";
import ButtonMinimal from "../ButtonMinimal";
import Icon from "../Icon";
import Text from "../Text";
import View, { Props as ViewProps } from "../View";

export interface Props extends ViewProps {
  backgroundImage?: string;
  likes?: number;
  dislikes?: number;
  enrolled?: number;
  buttonLabel?: string;
  onButtonClick?: ((evt: React.SyntheticEvent) => void);
}

const OverviewCtaCard: React.SFC<Props> = ({
  children,
  backgroundImage,
  likes = 0,
  dislikes = 0,
  enrolled = 0,
  buttonLabel,
  onButtonClick,
  ...props
}: Props) => (
  <View boxShadow="soft" backgroundColor="background" width={280} {...props}>
    <View
      backgroundColor="soft"
      height={140}
      css={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
    <View padding={4} paddingTop={3}>
      <View flexDirection="row" alignItems="center">
        <Icon name="ThumbsUp" paddingX={1} />
        {likes}
        <Icon name="ThumbsDown" paddingX={1} marginLeft={3} />
        {dislikes}
        <View flexGrow={1} />
        <ButtonMinimal iconName="Ellipsis" />
      </View>
      <View marginY={3} flexDirection="row" alignItems="center">
        <Avatar size={2} marginRight={2} backgroundColor="highlight" />
        <Text fontSize={2}>{enrolled} enrolled</Text>
      </View>
      <View height={60}>{children}</View>
      {buttonLabel &&
        onButtonClick && (
          <ButtonFilled
            color="accent"
            flexDirection="column"
            onClick={onButtonClick}
          >
            {buttonLabel}
          </ButtonFilled>
        )}
    </View>
  </View>
);

export default OverviewCtaCard;
