import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Modal,
  SectionList,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

export default function App() {
  const [isTrue, setIsTrue] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const listData = [
    { title: "სექცია 1", data: ["SectionList", "Switch"] },
    { title: "სექცია 2", data: ["Modal", "Alert"] },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>საბაზისო დავალება</Text>

      <ActivityIndicator size="small" color="blue" />

      <View style={styles.row}>
        <Text>სვიჩი:</Text>
        <Switch value={isTrue} onValueChange={setIsTrue} />
      </View>

      <Button
        title="გამოჩნდეს Alert"
        onPress={() => Alert.alert("გამარჯობა!")}
      />

      <Button title="გახსენი Modal" onPress={() => setShowModal(true)} />
      <Modal visible={showModal}>
        <View style={styles.modalView}>
          <Text>ეს არის მოდალი!</Text>
          <Button title="დახურვა" onPress={() => setShowModal(false)} />
        </View>
      </Modal>

      <SectionList
        sections={listData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, justifyContent: "center" },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    alignItems: "center",
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#eee",
    padding: 5,
    marginTop: 10,
  },
  item: { padding: 8, fontSize: 14 },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
