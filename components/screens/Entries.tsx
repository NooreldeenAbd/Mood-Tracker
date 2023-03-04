import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function EntriesScreen() {

    const entries = ['Happy', 'Sad', 'Angry'];
    const list = []

    for (const [i, entry] of entries.entries()) {
        list.push(<View style={{
            borderRadius: 5,
            margin: 10,
            marginTop: 10,
            backgroundColor: '#3A3B3C',
            padding: 10,
        }} key={i}>
            <Text style={{ color: 'white' }}>{entry}</Text>
        </View>)
    }

    return (
        <ScrollView style={{ backgroundColor: '#000' }}>{list}</ScrollView>
    );
}

export default EntriesScreen;
