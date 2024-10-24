import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContainer:{
        backgroundColor: '#ffffff',
        width:'100%',
        height:'100%',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: '30'
    },
    form:{
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10
    },
    label:{
        fontSize: 18,
        color: '#000000',
        paddingLeft: 20
    },
    input:{
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    buttonCalculator:{
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#FF0043',
        paddingTop:14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30
    },

    textButton:{
        fontSize: 20,
        color: '#ffffff',
    },
    errorMsg:{
         color: '#ff0043',
         fontSize: 12,
         paddingLeft: 18,
         fontWeight: "bold",
         //display: "none"
    },
    exibitionResult:{
        width: '100%',
        height: '50%'
    },
    listImcs:{
        backgroundColor: "lightgrey",
        width: '90%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor:'#e0e5e5',
    },
    resultImcItem:{
        fontSize: 24,
        color:'#ff0043',
        height: 50,
        width: '100%',
        fontWeight: "bold",
        paddingTop: 5
        
    },
    textResultItemList:{
        fontSize: 18
    }
})

export default styles