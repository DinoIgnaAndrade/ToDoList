import { View, Text, StyleSheet, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';

import { AiFillPlusCircle } from "react-icons/ai";
import ModalInput from './ModalInput';


const InputItem = ({

    visibleModalInput,
    setVisibleModalInput
   
    }) => {
    return(
        <Pressable
        style={styles.press} 
        onPress={() => setVisibleModalInput(!visibleModalInput)}
        >
            <View style={styles.input}>
                <BlurView 
                    intensity={50}
                    style={styles.blur}>
                    <ModalInput
                        visibleModalInput={visibleModalInput}
                        setVisibleModalInput={setVisibleModalInput}
                        animatioTypeProp='fade'
                    />
                    {console.log(visibleModalInput)}
                    <AiFillPlusCircle />
                </BlurView>
            </View>
        </Pressable>
    ); 
};


const styles = StyleSheet.create({
    press: {
        marginTop:'auto',
    },
    input: {
        fontSize:50,
        borderRadius:100,

        backgroundColor:'rgba(57,87,92, 0.4)',
        color:'#1AC2DB',
    },
    blur: {
        padding:20,
        borderRadius:100,
    }
  });

export default InputItem;