import { StyleSheet, View, Text } from 'react-native';

const TableCell = ({ content = "-", flex = 4 }) => (
  <View style={[styles.tableCell, { flex, borderRightWidth: flex === 1 ? 1 : 0 }]}>
    <Text>{content}</Text>
  </View>
);

const TableRow = ({ index, set, hasWeight, isLast }) => (
  <View key={index} style={[styles.tableRow, { borderBottomWidth: isLast ? 0 : styles.tableRow.borderBottomWidth }]}>
    <TableCell content={index + 1} flex={1} />
    <TableCell content={set.reps} />
    {hasWeight && <TableCell content={set.weight} />}
    <TableCell content={set.restMin} />
  </View>
);

function WorkoutInfo({ sets }) {
  const hasWeight = sets.some(set => 'weight' in set);

  return (
    <View style={styles.tableContainer}>

      {/* Headre */}
      <View style={styles.tableRow}>
        <TableCell content="Set" flex={1} />
        <TableCell content="Reps" />
        {hasWeight && <TableCell content="Weight (kg)" />}
        <TableCell content="Rest" />
      </View>


      {/* Rows */}
      {
        sets.map((set, index) => (
          <TableRow
            index={index}
            set={set}
            hasWeight={hasWeight}
            isLast={index + 1 == sets.length} />
        ))
      }

    </View >
  );
}

export default WorkoutInfo;

const styles = StyleSheet.create({
  tableContainer: {
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 7
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1
  },
  tableCell: {
    padding: 5,
    flex: 4,
    alignItems: 'center',
  },
});
