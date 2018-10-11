import * as React from "react";

import { brandGreys, tint } from "../../foundations";
import ButtonMinimal from "../ButtonFilled";
import Container from "../Container";
import Icon from "../Icon";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  type: "success" | "warning" | "danger";
  children: React.ReactChild;
  close?: ((evt: React.SyntheticEvent) => void);
  floating?: boolean;
}

const Banner: React.SFC<Props> = ({
  type,
  children,
  close,
  floating,
  ...props
}: Props) => {
  const iconType = type.charAt(0).toUpperCase() + type.slice(1);
  const tintLevel = type === "success" ? 0.1 : type === "warning" ? 0.2 : 0.2;
  return (
    <Container>
      <Theme.Consumer>
        {({ colors }) => (
          <View
            padding={4}
            marginTop={3}
            marginBottom={3}
            borderRadius={2}
            boxShadow={floating && "distant"}
            justifyContent="space-between"
            data-testid="banner"
            css={{
              backgroundColor: `${
                floating ? brandGreys.lightest : tint(colors[type], tintLevel)
              }`,
              borderLeft: `4px solid ${colors[type]}`,
              flexDirection: "row",
              justifyContent: "justify",
              transition: "all 0.2s linear",
            }}
          >
            <Icon name={iconType} color={type} marginTop={1} />
            <View
              flexWrap="wrap"
              flexGrow={1}
              paddingLeft={5}
              paddingRight={5}
              alignItems={floating ? "center" : "left"}
            >
              {children}
            </View>
            {close && (
              <ButtonMinimal
                borderRadius={10}
                boxShadow="none"
                size="sm"
                height="1.05rem"
                onClick={close}
                data-testid="close"
              >
                <Icon name="Cross" color={type} />
              </ButtonMinimal>
            )}
          </View>
        )}
      </Theme.Consumer>
    </Container>
  );
};

export default Banner;
