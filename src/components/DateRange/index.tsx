import * as React from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import ButtonMinimal from "../ButtonMinimal";
import Icon from "../Icon";
import Theme from "../Theme";
import View from "../View";

import { color } from "style-value-types";
import "../DatePicker/css";

class DatePicker extends React.Component<any, any> {
  public static defaultProps = {
    size: "md",
    borderRadius: 2,
  };

  public state = {
    startDate: null,
    endDate: null,
    focusedInput: null,
  };

  public getBorderColor = () => {
    const { focusedInput } = this.state;
    const { borderColor } = this.props;

    if (focusedInput !== null) {
      return "accent";
    }

    return borderColor ? borderColor : "soft";
  };

  public handleDateChange = ({ startDate, endDate }) =>
    this.setState({
      startDate,
      endDate,
    });

  public handleFocusChange = focusedInput =>
    this.setState({
      focusedInput,
    });

  public render() {
    const {
      borderRadius,
      borderColor, // Do not pass
      disabled,
      ...remainingProps
    } = this.props;

    return (
      <Theme.Consumer>
        {({ colors, spacing, type, shadows }) => (
          <View
            css={[
              {
                ".DateRangePickerInput": {
                  width: "100%",
                  flexDirection: "row",
                  display: "flex",
                  fontSize: type.scale.md[2],
                  color: colors.default,
                  overflow: "hidden",
                  borderRadius: spacing[borderRadius],
                  backgroundColor: colors.background,
                  boxShadow:
                    this.state.focusedInput !== null
                      ? shadows.strong
                      : shadows.soft,
                  opacity: disabled ? "disabled" : null,
                },
                ".DateInput": {
                  flexGrow: 1,
                  flexShrink: 1,
                },
                ".DateInput_input": {
                  color: colors.default,
                  fontSize: type.scale.md[2],
                  paddingTop: spacing[3],
                  paddingLeft: spacing[2],
                  paddingRight: spacing[4],
                  paddingBottom: spacing[3],
                  textAlign: "center",
                },
                "#start_date_ID": {
                  paddingLeft: spacing[4],
                  paddingRight: spacing[2],
                },
                ".DateRangePickerInput_arrow": {
                  alignSelf: "center",
                },
                ".DateRangePickerInput__showClearDates": {
                  paddingRight:
                    this.state.endDate || this.state.startDate ? 30 : 0,
                },
                ".DateRangePickerInput_clearDates": {
                  padding: 0,
                  margin: 0,
                },
                ".DateRangePicker_picker": {
                  top: "42px !important",
                  borderRadius: spacing[2],
                  overflow: "hidden",
                  boxShadow: shadows.strong,
                },
                ".DayPicker_weekHeaders": {
                  paddingBottom: spacing[2],
                },
                ".CalendarDay": {
                  verticalAlign: "middle",
                  border: "none",
                },
                ".DayPickerNavigation_button, .CalendarMonth_caption": {
                  padding: `${spacing[5]}px`,
                  "padding-bottom": `${spacing[7]}px`,
                },
                ".CalendarDay__selected_span": {
                  background: colors.highlight,
                  color: colors.default,
                },
                ".CalendarDay__selected_start": {
                  background: colors.accent,
                  color: colors.background,
                  borderRadius: "50% 0 0 50%",
                },
                ".CalendarDay__selected_end": {
                  background: colors.accent,
                  color: colors.background,
                  borderRadius: "0 50% 50% 0",
                },
              },
            ]}
            {...remainingProps}
          >
            <DateRangePicker
              numberOfMonths={1}
              hideKeyboardShortcutsPanel={true}
              inputIconPosition="after"
              showClearDates={true}
              noBorder={true}
              navNext={<Icon name="ChevronRight" size={2} color="subtle" />}
              navPrev={<Icon name="ChevronLeft" size={2} color="subtle" />}
              weekDayFormat="dd"
              verticalSpacing={5}
              verticalHeight={7}
              horizontalMonthPadding={0}
              customArrowIcon={"-"}
              customCloseIcon={
                this.state.endDate || this.state.startDate ? (
                  <ButtonMinimal
                    iconName="Close"
                    color="accent"
                    backgroundColor="transparent"
                    data-testid="clearButton"
                    aria-label="Clear Icon"
                  />
                ) : null
              }
              customInputIcon={
                this.state.endDate || this.state.startDate ? null : (
                  <Icon name="ChevronDown" size={3} color="muted" />
                )
              }
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="start_date_ID" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="end_date_ID" // PropTypes.string.isRequired,
              onDatesChange={this.handleDateChange} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={this.handleFocusChange} // PropTypes.func.isRequired,
            />
          </View>
        )}
      </Theme.Consumer>
    );
  }
}

export default DatePicker;
