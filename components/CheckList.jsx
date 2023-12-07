import { View, Text, FlatList, StyleSheet, Pressable, CheckBox } from 'react-native';

import { BlurView } from 'expo-blur';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CheckList = ({

    itemList,
    confirmDeleteHandler,
    setChecked,
    checked


}) => {

    const renderItemHandler = ({ item }) => {



        const toggleChecked = () => {
            setChecked(!checked);
        };

        const handleDelete = (item) => {
            confirmDeleteHandler(item);
        };



        return (
            <>
                <View style={styles.list}>
                    <BlurView
                        style={styles.blur}
                        intensity={50}>

                        <View style={styles.checkContainer}>
                            <CheckBox
                                style={styles.check}
                                value={checked}
                                onValueChange={toggleChecked}
                            />
                        </View>

                        <View>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.text}>{item.text}</Text>
                        </View>

                        <Pressable
                            onPress={() => handleDelete(item)}
                            style={styles.trash}>
                            <FontAwesomeIcon
                                size={25}
                                icon={faTrash}
                                color='#DB701A' />
                        </Pressable>
                    </BlurView>



                </View>
            </>
        )
    }

    return (
        <>
            <FlatList
                style={styles.flatList}
                data={itemList}
                renderItem={renderItemHandler}
                keyExtractor={item => item.id}
            />
        </>
    );
};

export default CheckList;

const styles = StyleSheet.create({

    flatList: {
        width: '90%',
        marginTop: 10,

        borderRadius: 30,
    },
    list: {
        flexDirection: 'row',
        marginBottom: 5,
        width: '100%',
        marginRight: 'auto',
        borderRadius: 30,
        justifyContent: 'space-around',
        gap: 3,
        alignItems: 'center',


        backgroundColor: 'rgba(57,87,92,0.5)',
    },
    blur: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 30,
        alignItems: 'center',
    },
    checkContainer: {
        padding:8,
        borderRadius:10,
    },
    check: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
    },
    title: {
        fontSize: 20,
        padding: 5,
        paddingLeft: 25,

        color: 'white',
        fontWeight: 'Bold',

    },
    text: {
        fontSize: 18,
        paddingHorizontal: 15,
        paddingBottom: 15,

        color: 'white',
    },
    trash: {
        padding: 10,
        marginLeft: 'auto',
    }
});