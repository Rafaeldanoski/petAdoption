import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet, Button } from 'react-native';
import { DatabaseConnection } from '../database/database-connection';
import RegisterUser from './RegisterUser';

const db = DatabaseConnection.getConnection();

const ViewAllUser = (navigation) => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        }
      );
    });
  }, []);

  let listItemView = (item) => {
    return (
      
      <View
        key={item.user_id}
        style={{ backgroundColor: '#EEE', marginTop: 10, padding: 15, borderRadius: 40 }}>
        <Button
         title="Press me"
         onPress={() => navigation.navigate(RegisterUser)}

        ></Button>
          
     
        <Text style={styles.textheader}>Nome</Text>
        <Text style={styles.textbottom}>{item.user_name}</Text>

        <Text style={styles.textheader}>Contato</Text>
        <Text style={styles.textbottom}>{item.user_contact}</Text>

        <Text style={styles.textheader}>Observações</Text>
        <Text style={styles.textbottom}>{item.user_address}</Text>
      </View>
      
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <FlatList
            style={{ marginTop: 20 }}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            data={flatListItems}
            keyExtractor={(_item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textheader: {
    color: '#111',
    fontSize: 12,
    fontWeight: '700',

  },
  textbottom: {
    color: '#111',
    fontSize: 18,
  },
});

export default ViewAllUser;