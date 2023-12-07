import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { useState } from 'react';


import InputItem from './components/InputItem';
import CheckList from './components/CheckList';


export default function App() {

  const [visibleModalInput, setVisibleModalInput] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemDelete, setItemDelete] = useState('');
  const [checked, setChecked] = useState(false);

  const onChangeTitleHandler = (titleItem) => {
    setTitle(titleItem);
  }
  const onChangeTextHandler = (textItem) => {
    setText(textItem);
  }

  const addItemHandler = () => {
    setItemList(prevItemList => [
      ...prevItemList, 
      { 
      id: Math.random().toString(), 
      title: title,
      text: text }
    ]);
      setTitle('');
      setText('');
  }

  const confirmDeleteHandler = (itemDelete) => {
    setItemList(prevItem => prevItem.filter(item => item.id !== itemDelete.id))
  }

  console.log({itemDelete})

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./images/Background.jpg')}
        style={styles.background}
      />
      <CheckList
        itemList={itemList}
        confirmDeleteHandler={confirmDeleteHandler}
        checked={checked}
        setChecked={setChecked}
      />
      <InputItem
        visibleModalInput={visibleModalInput}
        setVisibleModalInput={setVisibleModalInput}

        title={title}
        text={text}
        onChangeTitleHandler={onChangeTitleHandler}
        onChangeTextHandler={onChangeTextHandler}
        addItemHandler={addItemHandler}
      />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    ...StyleSheet.absoluteFillObject,
  }
});
