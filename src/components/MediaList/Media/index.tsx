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
  titleSize?: number;

  subTitle?: string;
  subTitleSize?: number;
  subTitleMarginTop?: number;

  description?: string;
  descriptionSize?: number;
  descriptionMarginTop?: number;
}

const Media: React.SFC<MediaProps> = ({
  image,
  imageSize,
  scaleSize,
  iconName,

  title,
  titleSize,

  subTitle,
  subTitleSize,
  subTitleMarginTop,

  description,
  descriptionSize,
  descriptionMarginTop,

  children,
  fontSize = 2,
  color,
  ...props
}: MediaProps) => (
  <View color={color} fontSize={fontSize} {...props}>
    <View flexDirection="row" alignItems="center">
      {(image || title) && (
        <View paddingRight={5}>
          {image && (
            <Avatar
              src={image}
              size={imageSize}
              scaleSize={scaleSize}
              fullName={title}
              iconName={iconName}
              backgroundColor="transparent"
            />
          )}

          {!image && (
            <Avatar
              src={image}
              size={imageSize}
              scaleSize={scaleSize}
              fullName={title}
              iconName={iconName}
            />
          )}
        </View>
      )}

      <View flexGrow={1} flexShrink={1}>
        {title && (
          <View>
            <Text fontSize={titleSize || fontSize} fontWeight="semibold">
              {title}
            </Text>
          </View>
        )}

        {subTitle && (
          <View marginTop={subTitleMarginTop || 2}>
            <Text
              color="muted"
              fontWeight="semibold"
              fontSize={subTitleSize || fontSize}
            >
              {subTitle}
            </Text>
          </View>
        )}

        {description && (
          <View marginTop={descriptionMarginTop || 2}>
            <Text fontSize={descriptionSize || fontSize}>{description}</Text>
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
