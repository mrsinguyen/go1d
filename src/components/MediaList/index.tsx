import * as React from "react";

import { breakpoints } from "../../foundations";
import View, { ViewProps } from "../View";

export interface MediaListProps extends ViewProps {
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

const MediaList: React.SFC<MediaListProps> = ({
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

  color,
  fontSize = 2,
  marginBottom = 20,
  children,
  ...props
}: MediaListProps) => (
  <View
    flexDirection="row"
    flexWrap="wrap"
    css={{
      marginBottom: -marginBottom,
    }}
    {...props}
  >
    {React.Children.map(children, (child: React.ReactElement<any>, index) => {
      const childImage = child.props.image || image;
      const childImageSize = child.props.imageSize || imageSize;
      const childScaleSize = child.props.scaleSize || scaleSize;
      const childIconName = child.props.iconName || iconName;

      const childTitle = child.props.title || title;
      const childTitleSize = child.props.titleSize || titleSize;

      const childSubTitle = child.props.subTitle || subTitle;
      const childSubTitleSize = child.props.subTitleSize || subTitleSize;
      const childSubTitleMarginTop =
        child.props.subTitleMarginTop || subTitleMarginTop;

      const childDescription = child.props.description || description;
      const childDescriptionSize =
        child.props.descriptionSize || descriptionSize;
      const childDescriptionMarginTop =
        child.props.descriptionMarginTop || descriptionMarginTop;

      return React.cloneElement(child as React.ReactElement<any>, {
        image: childImage,
        imageSize: childImageSize,
        scaleSize: childScaleSize,
        iconName: childIconName,

        title: childTitle,
        titleSize: childTitleSize,

        subTitle: childSubTitle,
        subTitleSize: childSubTitleSize,
        subTitleMarginTop: childSubTitleMarginTop,

        description: childDescription,
        descriptionSize: childDescriptionSize,
        descriptionMarginTop: childDescriptionMarginTop,

        color,
        fontSize,
        width: [1, 1 / 2, 1 / 2],
        css: {
          marginBottom,
          [breakpoints.md]: {
            paddingRight: 20,
          },
        },
      });
    })}
  </View>
);

export default MediaList;
