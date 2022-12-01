import * as SQLite from 'expo-sqlite';

// SQqlite conection
export const DatabaseConnection = {
  getConnection: () => SQLite.openDatabase("database.db"),
};