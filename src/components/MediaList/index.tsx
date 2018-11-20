import * as React from "react";

import { breakpoints } from "../../foundations";
import View, { ViewProps } from "../View";

export interface MediaListProps extends ViewProps {
  image?: string;
  imageSize?: number;
  scaleSize?: number;
  iconName?: string;
  title?: string;
  subTitle?: string;
  description?: string;
}

const MediaList: React.SFC<MediaListProps> = ({
  image,
  imageSize,
  scaleSize,
  iconName,
  title,
  subTitle,
  description,
  color,
  fontSize = 2,
  children,
  ...props
}: MediaListProps) => (
  <View flexDirection="row" flexWrap="wrap" {...props}>
    {React.Children.map(children, (child: React.ReactElement<any>, index) => {
      const childImage = child.props.image || image;
      const childImageSize = child.props.imageSize || imageSize;
      const childScaleSize = child.props.scaleSize || scaleSize;
      const childIconName = child.props.iconName || iconName;
      const childTitle = child.props.title || title;
      const childSubTitle = child.props.subTitle || subTitle;
      const childDescription = child.props.description || description;

      return React.cloneElement(child as React.ReactElement<any>, {
        width: [1, 1 / 2, 1 / 2],
        image: childImage,
        imageSize: childImageSize,
        scaleSize: childScaleSize,
        iconName: childIconName,
        title: childTitle,
        subTitle: childSubTitle,
        description: childDescription,
        marginBottom: index !== 0 ? 5 : 0,
        color,
        fontSize,
        css: {
          [breakpoints.md]: {
            paddingRight: 20,
          },
        },
      });
    })}
  </View>
);

export default MediaList;
