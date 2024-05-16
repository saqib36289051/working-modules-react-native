import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import * as Haptics from "expo-haptics";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {useRouter } from "expo-router";

type Props = {};

const Login = (props: Props) => {
  const [code, setCode] = React.useState<number[]>([]);
  console.log("🚀 ~ Login ~ code:", code);
  const codeLength = Array(6).fill(0);
  const router = useRouter();

  useEffect(() => {
    if (code.length === 6) {
      router.navigate("/home");
    }
  }, [code]);

  function onNumberPress(num: number) {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCode((prev) => [...prev, num]);
  }

  function onBackspacePress() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCode((prev) => prev.slice(0, -1));
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <Text style={[styles.greetings]}>Complete Sing-In</Text>
      <View style={[styles.codeView]}>
        {codeLength.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.codeEmpty,
                {
                  backgroundColor:
                    code[index] !== undefined ? "black" : "darkgray",
                },
              ]}
            />
          );
        })}
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <View style={[styles.numbersView]}>
          <View style={styles.buttonRow}>
            {[1, 2, 3].map((num) => onPressButton(num))}
          </View>
          <View style={styles.buttonRow}>
            {[4, 5, 6].map((num) => onPressButton(num))}
          </View>
          <View style={styles.buttonRow}>
            {[7, 8, 9].map((num) => onPressButton(num))}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={styles.keypadButton}
              onPress={onBackspacePress}
            >
              <MaterialCommunityIcons
                name="fingerprint"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            {onPressButton(0)}
            <TouchableOpacity
              style={styles.keypadButton}
              onPress={onBackspacePress}
            >
              <MaterialCommunityIcons
                name="keyboard-backspace"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  function onPressButton(num: number) {
    return (
      <TouchableOpacity
        style={styles.keypadButton}
        key={num}
        onPress={() => onNumberPress(num)}
      >
        <Text style={styles.numbers}>{num}</Text>
      </TouchableOpacity>
    );
  }
};

export default Login;

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  keypadButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  greetings: {
    fontSize: 24,
    fontWeight: "400",
    marginHorizontal: 8,
    marginTop: 8,
  },
  codeView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginVertical: 100,
  },
  codeEmpty: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  numbersView: {
    display: "flex",
    padding: 20,
    gap: 40,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  numbers: {
    fontSize: 32,
  },
});
