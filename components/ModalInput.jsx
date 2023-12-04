import { View, Text, TextInput, StyleSheet, Pressable, Modal } from 'react-native';
import { MdCancel } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { BlurView } from 'expo-blur';

const ModalInput = ({
    visibleModalInput,
    setVisibleModalInput,
    animatioTypeProp,
}
) => {
    return (
        <Modal
            animationType={animatioTypeProp}
            visible={visibleModalInput}
            transparent={true}>
            <BlurView style={styles.blur}>
                <View style={styles.container}>

                    {console.log(visibleModalInput)}

                    <TextInput
                        style={styles.title}
                        placeholder='Titulo' />
                    <TextInput
                        style={styles.bodyText}
                        placeholder='Agregar Texto' />

                    <View style={styles.buttons}>
                        <Pressable>
                            <IoMdCheckmarkCircle color='#1BBCF2'  />
                        </Pressable>

                        <Pressable onPress={() => setVisibleModalInput(false)}>
                            <MdCancel color='#F2881B' />
                        </Pressable>
                    </View>

                </View>
            </BlurView>
        </Modal >
    );
};

const styles = StyleSheet.create({
    blur: {
        marginTop: 300,
        borderRadius: 100,
    },
    container: {
        alignItems: 'center',
        borderRadius: 100,

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

export default ModalInput;