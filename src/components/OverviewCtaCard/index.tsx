import * as React from "react";

import Icon from "../Icon";
import View from "../View";

export interface Props {
  backgroundImage?: string;
  likes: number;
  dislikes: number;
}

const OverviewCtaCard: React.SFC<Props> = ({
  backgroundImage,
  likes = 0,
  dislikes = 0,
  ...props
}: Props) => (
  <View boxShadow="crisp" backgroundColor="background" width="300px" {...props}>
    <View
      height="150px"
      width="100%"
      css={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
    <View padding={4} height="200px" width="100%">
      <View flexDirection="row" alignItems="center">
        <Icon name="ThumbsUp" paddingX={1} />
        {likes}
        <Icon name="ThumbsDown" paddingX={1} marginLeft={3} />
        {dislikes}
      </View>
    </View>
  </View>
);

OverviewCtaCard.displayName = "Overview CTA Card";

export default OverviewCtaCard;
