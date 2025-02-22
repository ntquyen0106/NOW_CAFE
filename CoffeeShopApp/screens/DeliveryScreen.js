
import React, { useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Dimensions 
} from "react-native";
import Footer from "../components/Footer"; // Thêm Footer
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const addresses = [
  { id: 1, name: "Selenay", phone: "+84 0987654321", address: "123 Quang Trung, Ward 4, Go Vap District, HCMC" },
  { id: 2, name: "Selenay", phone: "+84 0987654321", address: "123 Quang Trung, Ward 4, Go Vap District, HCMC" },
  { id: 3, name: "Selenay", phone: "+84 0987654321", address: "123 Quang Trung, Ward 4, Go Vap District, HCMC" },
];

export default function DeliveryScreen({ navigation }) {
  const [selectedAddress, setSelectedAddress] = useState(addresses[0].id);

  return (
    <View style={styles.mainContainer}>
      {/* Màn hình chính */}
      <View style={styles.container}>
        {/* Thanh điều hướng */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Select delivery location</Text>
        </View>

        {/* Danh sách địa chỉ */}
        <ScrollView style={styles.scrollContainer}>
          {addresses.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={[
                styles.addressCard, 
                selectedAddress === item.id && styles.selectedCard
              ]}
              onPress={() => setSelectedAddress(item.id)}
            >
              <View style={styles.addressRow}>
                <MaterialIcons name="location-pin" size={20} color={selectedAddress === item.id ? "#fff" : "#D83C3D"} />
                <View style={styles.addressText}>
                  <Text style={[styles.name, selectedAddress === item.id && styles.selectedText]}>
                    {item.name}  ({item.phone})
                  </Text>
                  <Text style={[styles.detail, selectedAddress === item.id && styles.selectedText]}>
                    {item.address}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}

          
      {/* Nút thêm địa chỉ mới */}
      <TouchableOpacity 
            style={styles.addAddressCard} 
            onPress={() => navigation.navigate("AddLocation")}
          >
            <Feather name="plus" size={20} color="#000" />
            <Text style={styles.addAddressText}>Thêm địa chỉ mới</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Footer với giỏ hàng được chọn */}
      <Footer selected="cart" navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F9E8D9",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
  },
  addressCard: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  selectedCard: {
    backgroundColor: "#8B5A2B",
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  addressText: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  detail: {
    fontSize: 14,
    color: "#555",
  },
  selectedText: {
    color: "#FFF",
  },
  addAddressCard: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  addAddressText: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "bold",
  },
});



// import React, { useState } from "react";
// import { 
//   View, 
//   Text, 
//   TouchableOpacity, 
//   StyleSheet, 
//   ScrollView, 
//   Dimensions 
// } from "react-native";
// import { Feather } from "@expo/vector-icons";
// import Footer from "../components/Footer";
// import { MaterialIcons } from "@expo/vector-icons";

// const { width } = Dimensions.get("window");

// const addresses = [
//   { id: 1, name: "Selenay", phone: "+84 0987654321", address: "123 Quang Trung, Ward 4, Go Vap District, HCMC" },
//   { id: 2, name: "Selenay", phone: "+84 0987654321", address: "123 Quang Trung, Ward 4, Go Vap District, HCMC" },
//   { id: 3, name: "Selenay", phone: "+84 0987654321", address: "123 Quang Trung, Ward 4, Go Vap District, HCMC" },
// ];

// export default function DeliveryScreen({ navigation }) {
//   const [selectedAddress, setSelectedAddress] = useState(addresses[0].id);

//   return (
//     <View style={styles.container}>
//       {/* Thanh điều hướng */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Feather name="arrow-left" size={24} color="#000" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Select delivery location</Text>
//       </View>

//       {/* Danh sách địa chỉ */}
//       <ScrollView style={styles.scrollContainer}>
//         {addresses.map((item) => (
//           <TouchableOpacity 
//             key={item.id} 
//             style={[
//               styles.addressCard, 
//               selectedAddress === item.id && styles.selectedCard
//             ]}
//             onPress={() => setSelectedAddress(item.id)}
//           >
//             <View style={styles.addressRow}>
//               <MaterialIcons name="location-pin" size={20} color={selectedAddress === item.id ? "#fff" : "#D83C3D"} />
//               <View style={styles.addressText}>
//                 <Text style={[styles.name, selectedAddress === item.id && styles.selectedText]}>
//                   {item.name}  ({item.phone})
//                 </Text>
//                 <Text style={[styles.detail, selectedAddress === item.id && styles.selectedText]}>
//                   {item.address}
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         ))}

//         {/* Nút thêm địa chỉ mới */}
//         <TouchableOpacity style={styles.addAddressCard}>
//           <Feather name="plus" size={20} color="#000" />
//           <Text style={styles.addAddressText}>Thêm địa chỉ mới</Text>
//         </TouchableOpacity>
//       </ScrollView>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F9E8D9",
//     paddingHorizontal: 16,
//     paddingTop: 40,
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginLeft: 12,
//   },
//   scrollContainer: {
//     flex: 1,
//   },
//   addressCard: {
//     backgroundColor: "#FFF",
//     padding: 16,
//     borderRadius: 10,
//     marginBottom: 10,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   selectedCard: {
//     backgroundColor: "#8B5A2B",
//   },
//   addressRow: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   addressText: {
//     marginLeft: 10,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#000",
//   },
//   detail: {
//     fontSize: 14,
//     color: "#555",
//   },
//   selectedText: {
//     color: "#FFF",
//   },
//   addAddressCard: {
//     backgroundColor: "#FFF",
//     padding: 16,
//     borderRadius: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 20,
//   },
//   addAddressText: {
//     fontSize: 16,
//     marginLeft: 8,
//     fontWeight: "bold",
//   },
//   bottomNav: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 12,
//     backgroundColor: "#F9E8D9",
//     borderTopWidth: 1,
//     borderTopColor: "#DDD",
//   },
//   navItem: {
//     padding: 10,
//   },
// });
