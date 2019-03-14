import * as React from "react";
import Icon from "../Icon";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface SessionProps extends ViewProps {
  start:  Date | string;
  end?:  Date | string;
  onClick?: ((evt: React.SyntheticEvent) => void);
  active?: boolean;
  location: {
    title: string;
    thoroughfare?: string;
    administrative_area?: string;
    locality?: string;
    country?: string;
  };
}

const formatTime = (timestamp) => {
  const time = new Date(timestamp);
  const min = time.getMinutes();
  const hours = time.getHours();
  if (hours > 12) {
    return `${hours-12}:${min}PM`;
  }
  return `${hours}:${min}AM`;
}

const EventDate: React.SFC<SessionProps> = ({
  start,
  end,
  location,
  onClick,
  active,
  ...props
}: SessionProps) => {
  const locationString = `${location.thoroughfare && `${location.thoroughfare}, `} ${location.locality && `${location.locality}, `} ${location.administrative_area && `${location.administrative_area}, `} ${location.country && `${location.country}`}`;
  const date = new Date(start);
  const monthAbrv = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const day = date.getDate();
  const month = monthAbrv[(date.getMonth()+1)];
  const year = date.getFullYear();
  const startTime = formatTime(start);
  const endTime = formatTime(end);
  return (
    <View
      backgroundColor="background"
      overflow="hidden"
      borderRadius={2}
      boxShadow="crisp"
      color="default"
      flexDirection="row"
      marginX={1}
      marginBottom={3}
      flexGrow={1}
      onClick={onClick}
      borderColor={active ? "accent" : "transparent"}
      border={1}
      css={{
        cursor: onClick && "pointer"
      }}
      {...props}
    >
      <View
        flexDirection="column"
        width="30%"
        maxWidth={80}
        alignItems="center"
        justifyContent="center" 
        padding={3}
        >
        <Text color="accent" fontSize={3}>
          {day}
        </Text>
        <Text fontSize={3}>
          {month.toUpperCase()}
        </Text>
      </View>
      <View
        flexGrow={1}
        flexDirection="column"
        paddingY={3}
        width="70%">
        <View flexDirection="row" paddingTop={1}>
          <View width="15%" maxWidth={25} minWidth={20}>
            <Icon name="MapPin" display="inline" color="faded" marginRight={3} />
          </View>
          <View width="85%">
            <Text fontSize={1} ellipsis={true}>
              {location.title}
            </Text>
            <Text fontSize={1} color="subtle" ellipsis={true}>
              {locationString}
            </Text>
          </View>
        </View>
        <View flexDirection="row" paddingTop={1}>
          <View width="15%" maxWidth={25} minWidth={20}>
            <Icon name="Clock" display="inline" color="faded" marginRight={3} />
          </View>
          <View width="85%">
            <Text fontSize={1} ellipsis={true}>
              {day} {month} {year} {" • "} {startTime}{endTime && ` - ${endTime}`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default EventDate;
