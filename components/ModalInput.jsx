import { View, Text, TextInput, StyleSheet, Pressable, Modal } from 'react-native';

import { BlurView } from 'expo-blur';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';


const ModalInput = ({
    visibleModalInput,
    setVisibleModalInput,
    animatioTypeProp,

    title,
    text,
    onChangeTitleHandler,
    onChangeTextHandler,
    addItemHandler,

}
) => {
    return (
        <Modal
            animationType={animatioTypeProp}
            visible={visibleModalInput}
            transparent={true}>
            <BlurView
            intensity={50} 
            style={styles.blur}>
                <View style={styles.container}>

                    <TextInput
                        style={styles.title}
                        placeholder='Titulo'
                        onChangeText={onChangeTitleHandler}
                        value={title}
                         />


                    <TextInput
                        style={styles.bodyText}
                        placeholder='Agregar Texto' 
                        onChangeText={onChangeTextHandler}
                        value={text}
                        />


                    <View style={styles.buttons}>
                        <Pressable onPress={addItemHandler}>
                            <FontAwesomeIcon 
                            size={50}
                            color='#1BBCF2'
                            icon={faCircleCheck} />
                        </Pressable>

                        <Pressable onPress={() => setVisibleModalInput(false)}>
                            <FontAwesomeIcon 
                            size={50}
                            color='#F2881B'
                            icon={faCircleXmark} />
                        </Pressable>
                    </View>

                </View>
            </BlurView>
        </Modal >
    );
};

export default ModalInput;

const styles = StyleSheet.create({
    blur: {
        marginTop: 250,
        borderRadius: 50,
    },
    container: {
        alignItems: 'center',
        borderRadius: 50,

        backgroundColor: 'rgba(70, 104, 115,0.5)',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        height: 50,
        width: 300,
        margin: 15,
        borderRadius: 30,
        borderWidth: 2,
        borderBlockColor: '#F2881B',
    },
    bodyText: {
        fontSize: 25,
        textAlign: 'center',
        height: 100,
        width: 340,
        margin: 15,
        borderRadius: 30,
        borderWidth: 2,
        borderBlockColor: '#9D7246',
    },
    buttons: {
        margin: 10,
        fontSize: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 50,
    }

}
);