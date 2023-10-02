import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const Schedules = () => {
  const [selectedDate, setSelectedDate] = useState('');

  // Sample list of maintenance tasks
  const maintenanceTasks = [
    'Change oil filter',
    'Inspect spark plugs',
    'Check coolant levels',
    'Replace air filter',
    // Add more tasks here
  ];

  // Function to handle date selection on the calendar
  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={handleDateSelect}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: 'blue' },
          }}
        />
      </View>
      <View style={styles.tasksContainer}>
        <Text style={styles.heading}>Maintenance Tasks for {selectedDate}</Text>
        {selectedDate ? (
          <View>
            {maintenanceTasks.map((task, index) => (
              <TouchableOpacity key={index} style={styles.taskItem}>
                <Text>{task}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <Text>Select a date to view tasks</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop:30
  },
  calendarContainer: {
    // flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },
  tasksContainer: {
    marginTop: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  taskItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default Schedules;
