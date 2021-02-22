import { StatusBar } from "expo-status-bar";
import React from "react";
import {
   Text,
   View,
   Button,
   TouchableOpacity,
   ScrollView,
   SafeAreaView,
   Platform,
   Image,
   StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// Constants est un objet qui fournit des informations sur l'appareil
import Constants from "expo-constants";
// Import du fichier de couleurs
import colors from "./assets/colors";

const { white, lightGrey, middleGrey, darkGrey, blue, green } = colors;
export default function App() {
   return (
      <SafeAreaView style={styles.container}>
         <ScrollView style={styles.scrollView}>
            {/* Header */}
            <View style={[styles.header, styles.bgGrey]}>
               <Image
                  source={require("./assets/logo.png")}
                  style={styles.logo}
                  resizeMode="contain"
               ></Image>
            </View>

            {/* Movies */}
            <View style={styles.movies}>
               <Text style={styles.h1}>Interstellar</Text>
               <View style={styles.movies_Description}>
                  <Text style={styles.movies_Description_Text}>2014</Text>
                  <Text style={styles.movies_Description_Text}>PG-13</Text>
                  <Text style={styles.movies_Description_Text}>2h 49min</Text>
                  <Text style={styles.movies_Description_Text}>
                     Adventure, Drama, Sci-FI
                  </Text>
               </View>
               <View style={styles.summary}>
                  <View>
                     <Image
                        source={require("./assets/interstellar.png")}
                        style={styles.img_Movies}
                        resizeMode="contain"
                     ></Image>
                  </View>
                  <View style={styles.summary_Text_Button}>
                     <Text style={styles.summary_Text}>
                        A team of explorers travel through a wormhole in space
                        in an attempt to ensure humanity's survival.
                     </Text>
                     <TouchableOpacity style={styles.summary_Button}>
                        <Text style={styles.summary_Button_Text}>
                           + ADD TO WATCHLIST
                        </Text>
                     </TouchableOpacity>
                  </View>
               </View>

               <View style={styles.rates}>
                  <View style={styles.rates_block}>
                     <View>
                        <View style={styles.rates_align}>
                           <Ionicons name="star" size={24} color="orange" />
                        </View>
                        <View style={[styles.rates_score, styles.rates_align]}>
                           <Text style={styles.rates_text_Bold}>8.6</Text>
                           <Text style={styles.rates_text}>/10</Text>
                        </View>
                     </View>
                     <View style={styles.rates_align}>
                        <Text style={styles.rates_text_last_line}>1.1M</Text>
                     </View>
                  </View>
                  <View style={styles.rates_block}>
                     <View style={styles.rates_align}>
                        <Ionicons name="star-outline" size={24} color="white" />
                     </View>
                     <View>
                        <View style={styles.rates_align}>
                           <Text style={styles.rates_text_Bold}>RATE THIS</Text>
                        </View>
                     </View>
                  </View>
                  <View style={styles.rates_block}>
                     <View style={styles.rates_align}>
                        <View style={styles.rates_card}>
                           <Text style={styles.rates_card_Text}>74</Text>
                        </View>
                     </View>
                     <View>
                        <View style={styles.rates_align}>
                           <Text style={styles.rates_text}>Metascore</Text>
                        </View>
                     </View>
                     <View style={styles.rates_align}>
                        <Text style={styles.rates_text_last_line}>
                           46 critic reviews
                        </Text>
                     </View>
                  </View>
               </View>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   logo: {
      height: 40,
      width: 100,
      marginTop: 5,
   },
   scrollView: {
      // on applique un marginTop de la hauteur de la statusBar sur Android seulement
      // marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
   },
   container: { backgroundColor: darkGrey },
   header: {
      height: 50,
      flexDirection: "row",
   },
   bgGrey: {
      backgroundColor: middleGrey,
   },
   movies: {
      backgroundColor: darkGrey,
      height: 350,
      flexDirection: "column",
   },
   h1: { color: white, fontSize: 30, marginLeft: 10 },
   movies_Description: { flexDirection: "row", marginTop: 10 },
   movies_Description_Text: { color: lightGrey, fontSize: 10, marginLeft: 10 },
   summary: {
      flexDirection: "row",
      justifyContent: "space-around",
      // borderStyle: "solid",
      // borderColor: white,
      // borderWidth: 1,
      marginTop: 15,
   },

   img_Movies: { height: 180, width: 120, alignSelf: "stretch" },
   summary_Text_Button: { justifyContent: "flex-start" },
   summary_Text: { width: 220, color: white, fontSize: 12, lineHeight: 20 },
   summary_Button: {
      width: 210,
      height: 30,
      backgroundColor: blue,
      color: white,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
   },
   summary_Button_Text: { color: white },
   rates: {
      marginTop: 15,
      flexDirection: "row",
      justifyContent: "center",
      //borderStyle: "solid",
      //borderColor: white,
      //borderWidth: 1,
   },
   rates_align: { alignItems: "center", justifyContent: "center" },
   rates_block: {
      width: 90,
      marginRight: 10,
      marginLeft: 10,
      //borderStyle: "solid",
      //borderColor: white,
      //borderWidth: 1,
   },
   rates_text: { color: white, fontSize: 12, alignItems: "baseline" },
   rates_score: { flexDirection: "row" },
   rates_text_Bold: { fontWeight: "bold", color: white },
   rates_text_last_line: { color: lightGrey, fontSize: 8 },
   rates_card: {
      backgroundColor: green,

      width: 25,
      height: 25,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 3,
   },
   rates_card_Text: {
      alignItems: "center",
      justifyContent: "center",
      color: white,
   },
});
