import { View, StyleSheet, SafeAreaView, Image, Pressable } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import Text from "../components/text/text";

import { spacing } from "../theme/spacing";

export default function Home({ navigation }) {
  const printAlert = () => {
    navigation.navigate("Details");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoImage}>
          <Image style={styles.logo} source={require("../images/D.png")} />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View>
          <View style={styles.logoAlign}>
            <View style={styles.contentLogo}>
              <Image
                style={styles.vectorLogo}
                source={require("../images/Vector.png")}
              />
            </View>
          </View>
          <View>
            <Text preset="h1" style={{ textAlign: "center" }}>
              Non-Contact{"\n"}
              <Text preset="h1">Deliveries</Text>
            </Text>
          </View>
          <View>
            <Text
              preset="small"
              style={{ textAlign: "center", letterSpacing: 1 }}
            >
              When placing the order,select the option{"\n"}
              <Text preset="small">
                "Contactless Delivery" and the courier will leave
              </Text>
              {"\n"}
              <Text preset="small">your order at the door</Text>
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <Pressable onPress={printAlert} style={styles.orderButtonContainer}>
              <Text style={styles.orderButton} preset="h6">
                ORDER NOW
              </Text>
            </Pressable>
            <View>
              <Text
                preset="h6"
                style={{
                  textAlign: "center",
                  color: colors.lightBiolet,
                  marginTop: 17,
                }}
              >
                Dismiss
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: colors.biolet,
    marginTop: spacing[5],
  },
  logoContainer: {
    flex: 1,
  },
  logoImage: {
    height: 50,
    width: 50,
    backgroundColor: colors.green,
    borderRadius: 50,
    marginTop: 63,
    marginLeft: 20,
  },
  logo: {
    margin: 10,
  },
  contentContainer: {
    flex: 2,
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  contentLogo: {
    height: 104,
    width: 104,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
  },
  logoAlign: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  vectorLogo: {
    marginTop: 30,
    marginLeft: 30,
  },
  orderButtonContainer: {
    height: 56,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: colors.green,
    borderRadius: 8,
  },
  orderButton: {
    textAlign: "center",
    color: colors.white,
    marginTop: 15,
    letterSpacing: 0.5,
  },
});
