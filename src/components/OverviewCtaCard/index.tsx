import * as React from "react";

import View from "../View";

export interface Props {
  subtitle?: React.ReactNode;
  backgroundImage?: string;
}

const OverviewCtaCard: React.SFC<Props> = ({
  backgroundImage,
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
    <View padding={4} height="200px" width="100%" />
  </View>
);

OverviewCtaCard.displayName = "Overview CTA Card";

export default OverviewCtaCard;
