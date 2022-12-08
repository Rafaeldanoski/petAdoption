import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet, Image, btnIcon} from 'react-native';
import { DatabaseConnection } from '../database/database-connection';
import MyButtonAdd from './components/MyButtonAdd';
import MyImage from './components/MyImage';
import MyImageButton from './components/MyImageButton';

const db = DatabaseConnection.getConnection();

const ViewAllUser = ({ navigation }) => {
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
        key={item.user_name}
        style={{ backgroundColor: '#FFD177', marginTop: 10, padding: 40, borderRadius: 80 }}>
      
     
      
      <MyImageButton
        btnIcon="pencil"
        btnColor='#DCDCDC'
        customClick={() => navigation.navigate('Update')}
      ></MyImageButton>
      <MyImageButton
        btnIcon="trash"
        btnColor='#F08080'
        customClick={() => navigation.navigate('Delete')}
      ></MyImageButton>  
      
      
        <Text style={styles.textbottom}>{item.user_name}</Text>
      
        <Text style={styles.textbottom}>{item.user_contact}</Text>

        <Text style={styles.textheader}>Observações</Text>
        <Text style={styles.textbottom}>{item.user_address}</Text>
        <MyImageButton
        btnIcon="whatsapp"
        btnColor='#34af23'
      ></MyImageButton>   
      </View>
      
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
  
        <MyButtonAdd
              title="Cadastrar Pet"
              btnIcon="dog"
              btnColor='#9ACD32'
              customClick={() => navigation.navigate('Register')} 
            />
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
    marginTop: 2,
    marginLeft: 0,
    marginRight: 1,
    borderRadius: 10,
  },
});

export default ViewAllUser;