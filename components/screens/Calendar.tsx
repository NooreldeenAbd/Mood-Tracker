import * as React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    View,
    StatusBar,
} from 'react-native';
import { Calendar } from 'react-native-calendars';

function CalendarScreen() {
    return (
        <ScrollView style={{ backgroundColor: '#000' }}>
            <Calendar
                style={{
                    borderRadius: 5,
                    margin: 10,
                    backgroundColor: '#3A3B3C',
                    paddingBottom: 10,
                }}
                theme={{
                    backgroundColor: '#3A3B3C',
                    calendarBackground: '#3A3B3C',
                    textSectionTitleColor: 'white',
                    textDayHeaderFontSize: 13,
                    monthTextColor: '#fff',
                    dayTextColor: '#fff',
                    textMonthFontSize: 30,
                    textDayFontSize: 20,
                    textDisabledColor: '#0000'
                }}></Calendar>
        </ScrollView>
    );
};


export default CalendarScreen;