import React from "react";
import { View, Text, Share, TouchableOpacity } from "react-native";
import styles from "./style";

export default function ResultIMC(props){

    const onShare = async () => await Share.share({
        message: "Meu IMC hoje é: " + props.resultIMC
    })

    
    return(
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageIMC}</Text>
            <Text style={styles.numberImc}>{props.resultIMC}</Text>

            <View style={styles.boxShareButton}>  
                <TouchableOpacity
                    onPress={onShare}
                    style={styles.shareButton}
                >
                    <Text style={styles.sharedText}>Compartilhar</Text>
                </TouchableOpacity>
            </View>
                
        </View>
    )
}