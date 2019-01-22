import * as React from "react";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface SkeletonProps extends ViewProps {
  fontSize?: number;
}

const Skeleton: React.SFC<SkeletonProps> = ({
  fontSize = 2,
  height,
  backgroundColor = "muted",
  ...props
}: SkeletonProps) => (
  <Theme.Consumer>
    {({ type }) => (
      <View
        backgroundColor={backgroundColor}
        height={
          height || [
            type.scale.sm[fontSize],
            type.scale.md[fontSize],
            type.scale.lg[fontSize],
          ]
        }
        {...props}
      />
    )}
  </Theme.Consumer>
);

Skeleton.displayName = "Skeleton";

export default Skeleton;
