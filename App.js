import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { AdMobBanner } from "expo-ads-admob";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  outputArea: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
  },
  outputText: {
    fontSize: 100,
  },
  inputText: {
    fontSize: 50,
  },
  inputArea: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    height: 70,
    borderColor: "gray",
    borderWidth: 1,
    width: "40%",
    fontSize: 50,
    textAlign: "center",
  },
  buttonArea: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    borderColor: "gray",
  },
  bottomContainer: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
  buttonText: {
    fontSize: 40,
  },
  middleContainer: {
    flex: 1,
  },
});

const random_number = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export default App = (props) => {
  const [result, setCount] = React.useState("0");
  const [value1, onChangeText1] = React.useState(null);
  const [value2, onChangeText2] = React.useState(null);

  const onPress = () =>
    setCount((result) => random_number(Number(value1), Number(value2) + 1));
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput
          {...props}
          placeholder="最低値"
          editable
          style={styles.inputBox}
          onChangeText={(text) => onChangeText1(text)}
          value1={value1}
        />
        <TextInput
          {...props}
          editable
          placeholder="最大値"
          style={styles.inputBox}
          onChangeText={(text) => onChangeText2(text)}
          value2={value2}
        />
      </View>
      <View style={styles.outputArea}>
        <Text style={styles.outputText}>{result}</Text>
      </View>
      <View style={styles.middleContainer}></View>
      <TouchableOpacity style={styles.buttonArea} onPress={onPress}>
        <Text style={styles.buttonText}>乱数生成</Text>
      </TouchableOpacity>
      <View style={styles.bottomContainer}></View>
      <AdMobBanner
        adUnitID={
          __DEV__
            ? "ca-app-pub-3940256099942544/6300978111" // テスト広告
            : Platform.select({
                ios: "ca-app-pub-2659333027229908/3197184147",
                android: "ca-app-pub-2659333027229908/3197184147", // android
              })
        }
        onDidFailToReceiveAdWithError={this.bannerError}
      />
    </SafeAreaView>
  );
};
