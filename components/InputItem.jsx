import { View, Text, StyleSheet, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import ModalInput from './ModalInput';


const InputItem = ({

    visibleModalInput,
    setVisibleModalInput,

    title,
    text,
    onChangeTitleHandler,
    onChangeTextHandler,
    addItemHandler,

    }) => {
    return(
        <Pressable
        style={styles.press} 
        onPress={() => setVisibleModalInput(true)}
        >
            <View style={styles.input}>
                <BlurView 
                    intensity={100}
                    style={styles.blur}>
                    <ModalInput
                        visibleModalInput={visibleModalInput}
                        setVisibleModalInput={setVisibleModalInput}
                        animatioTypeProp='fade'

                        title={title}
                        text={text}
                        onChangeTitleHandler={onChangeTitleHandler}
                        onChangeTextHandler={onChangeTextHandler}
                        addItemHandler={addItemHandler}
                    />
                    <FontAwesomeIcon
                    size={50}  
                    color='#1AC2DB'
                    icon={faCirclePlus} />
                </BlurView>
            </View>
        </Pressable>
    ); 
};


export default InputItem;

const styles = StyleSheet.create({
    press: {
        marginTop:'auto',
    },
    input: {
        fontSize:60,
        borderRadius:100,

        color:'#1AC2DB',
    },
    blur: {
        padding:5,
        borderRadius:100,
    }
  });