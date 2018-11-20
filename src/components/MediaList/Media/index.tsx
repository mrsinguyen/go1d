import * as React from "react";

import Avatar from "../../Avatar";
import Text from "../../Text";
import View, { ViewProps } from "../../View";

export interface MediaProps extends ViewProps {
  image?: string;
  imageSize?: number;
  scaleSize?: number;
  iconName?: string;
  title?: string;
  subTitle?: string;
  description?: string;
}

const Media: React.SFC<MediaProps> = ({
  image,
  imageSize,
  scaleSize,
  iconName,
  title,
  subTitle,
  description,
  children,
  fontSize = 2,
  marginBottom = 5,
  paddingY = fontSize < 3 ? fontSize + 1 : 4,
  paddingX = 0,
  color,
  ...props
}: MediaProps) => (
  <View
    color={color}
    fontSize={fontSize}
    marginBottom={marginBottom}
    {...props}
  >
    <View flexDirection="row" alignItems="center">
      {(image || title) && (
        <View paddingRight={5}>
          <Avatar
            src={image}
            size={imageSize}
            scaleSize={scaleSize}
            fullName={title}
            iconName={iconName}
          />
        </View>
      )}

      <View flexGrow={1} flexShrink={1}>
        {title && (
          <View>
            <Text fontSize={3} fontWeight="semibold">
              {title}
            </Text>
          </View>
        )}

        {subTitle && (
          <View marginTop={2}>
            <Text color="muted">{subTitle}</Text>
          </View>
        )}

        {description && (
          <View marginTop={2}>
            <Text>{description}</Text>
          </View>
        )}

        {children && (
          <View marginTop={2}>
            <Text>{children}</Text>
          </View>
        )}
      </View>
    </View>
  </View>
);

export default Media;
