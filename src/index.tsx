import React from 'react'
import { ScrollView, StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import useData from './useData'

export default () => {
  const data = useData()

  return (
    <SafeAreaView style={styles.scroll}>
      <ScrollView style={styles.scroll} maintainVisibleContentPosition={{ minIndexForVisible: 0 }}>
        {data.data.map((item, index) => (
          <View style={{ backgroundColor: item.color, height: item.size }} key={index}>
            <Text>{item.key}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.action} onPress={data.prepend}>
          <Text>Prepend</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action} onPress={data.append}>
          <Text>Append</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#333',
    flexDirection: 'row',
  },
  action: {
    flex: 1,
    margin: 20,
    backgroundColor: '#ccc',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
})