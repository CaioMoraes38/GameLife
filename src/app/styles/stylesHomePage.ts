import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    margin: 3,
    marginTop: 30,
    padding: 5,
    borderRadius: 30,
    elevation: 10,
    
  },
  viewtitle: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#55CBCD",
  },
  viewXP: {
    flex:1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 30,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#55CBCD",
    borderRightWidth: 6,
    borderRightColor: "#55CBCD",
    justifyContent: "center",

  },
     xpText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#55CBCD",
    textAlign: "center",
    marginTop: 20,
  },  
  viewinfo: {
    flex: 3,
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 15,
    elevation: 10,
    borderWidth: 1,
    borderColor: "#55CBCD",
    borderRightWidth: 6,
    borderRightColor: "#55CBCD",
  },
  input: {
    borderWidth: 1,
    borderColor: "#55CBCD",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  picker: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#55CBCD",
    borderRadius: 5,
  },
  dateButton: {
    backgroundColor: "#55CBCD",
    padding: 12,
    borderRadius: 5,
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: "#55CBCD",
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

});

export default styles;