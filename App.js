import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

const categories = [
  { id: 1, name: "Dụng cụ trượt tuyết" },
  { id: 2, name: "Quần áo trượt tuyết" },
  { id: 3, name: "Kính mũ" },
  { id: 4, name: "Giày trượt tuyết" },
]

//TODO Cách sử dụng ScollView
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}>
//         <CategoryListItem />
//         <CategoryListItem />
//         <CategoryListItem />
//         <CategoryListItem />
//         <CategoryListItem />
//         <CategoryListItem />
//       </ScrollView>
//     </View>
//   );
// }

//TODO Cách sử dụng FlatList
export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryListItem category={item}/>}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#fff",
    justifyContent: "center",
  }
})