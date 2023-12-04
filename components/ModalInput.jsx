import { View, Text, TextInput, StyleSheet, Pressable, Modal } from 'react-native';


const ModalInput = ({
    visibleModalInput,
    setVisibleModalInput,
    animatioTypeProp,
}
) => {
    return (
        <Modal animationType={animatioTypeProp} visible={visibleModalInput}>
            <View style={styles.container}>
                {console.log(visibleModalInput)}
                <TextInput/>
                <Pressable>
                    <Text>Add</Text>
                </Pressable>
            </View>
        </Modal >
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
    },
}
);

export default ModalInput;