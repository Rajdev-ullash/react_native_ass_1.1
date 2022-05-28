import { View, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
export default function ProductDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../images/Media.png")} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={{ margin: 20 }}>
          <View>
            <Text preset="h2">Boston Lettuce</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text preset="h2" style={{ fontSize: 32 }}>
                110
              </Text>
              <Text
                preset="h5"
                style={{ color: colors.lightBiolet, marginLeft: 5 }}
              >
                € / piece
              </Text>
            </View>
            <Text preset="small" style={{ color: colors.green }}>
              ~ 150 gr / piece
            </Text>
            <View style={{ marginTop: 20 }}>
              <Text
                preset="h5"
                style={{ color: colors.blue, fontWeight: "700" }}
              >
                Spain
              </Text>
              <Text
                preset="small"
                style={{ marginTop: 10, lineHeight: 22, letterSpacing: 0.3 }}
              >
                Lettuce is an annual plant of the daisy family, Asteraceae. It
                is most often grown as a leaf vegetable, but sometimes for its
                stem and seeds. Lettuce is most often used for salads, although
                it is also seen in other kinds of food, such as soups,
                sandwiches and wraps; it can also be grilled.
              </Text>
            </View>
          </View>
          <View style={styles.widgetContainer}>
            <View style={styles.loveWidget}>
              <Image
                style={{ marginTop: 15, marginLeft: 25 }}
                source={require("../images/love.png")}
              />
            </View>
            <View style={styles.cartButton}>
              <Image source={require("../images/shopping-cart.png")} />
              <Text style={{ color: "white", marginLeft: 20 }}>
                ADD TO CART
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    marginTop: 25,
  },
  imageContainer: {
    flex: 1,
  },
  detailsContainer: {
    flex: 2,
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  widgetContainer: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  loveWidget: {
    height: 50,
    width: 70,
    borderWidth: 1,
    borderColor: "#D9D0E3",
    color: "#FFFFFF",
    borderRadius: 8,
  },
  cartButton: {
    flexDirection: "row",
    height: 50,
    width: 250,
    backgroundColor: colors.green,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
