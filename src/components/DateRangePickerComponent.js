import React from 'react';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
class DateRangePickerComponent extends React.Component {

    state = {
        calendarFocused: false
    };

    onDateChange = (startDate) => {
        if (startDate) {
            this.props.handleDateChange({ startDate });
        }
      };
      onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
      };

    render() {
        return (
            <div>
                <SingleDatePicker
                    date={this.props.startDate}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    placeholder="Start Date"
                />
            </div>
        );
    }
}

export default DateRangePickerComponent;