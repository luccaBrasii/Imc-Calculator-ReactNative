import React, {useState} from "react";
import { 
        TextInput, 
        View, 
        Text, 
        TouchableOpacity, 
        Vibration, 
        Keyboard,
        Pressable,
        FlatList 
      } from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./style";

export default function Form(){

    const [msgImc, setMsgImc] = useState('Preencha o peso e altura')
    const [textButton, setTextButton] = useState('Calcular')
    const [height, setHeigh] = useState(null)
    const [weight, setWeight] = useState(null)
    const [imc, setImc] = useState(null)
    const [errorMsgWeight, setErrorMsgWeight] = useState(null);
    const [errorMsgHeight, setErrorMsgHeight] = useState(null);
    const [listImc, setListImc] = useState([])

    function imcCalculator(){
        const parsedHeight = parseFloat(height.replace(',', '.'));
        let totalImc = (weight/(parsedHeight  * parsedHeight )).toFixed(2)
        setListImc ((arr) =>[{id: new Date().getTime(), imc: totalImc},...arr])
        setImc(totalImc)
    }

    function validationImc() {
        let isValid = true;
    
        // Reseta as mensagens de erro
        setErrorMsgWeight(null);
        setErrorMsgHeight(null);
    
        // Valida o peso
        if (!weight) {
          setErrorMsgWeight('Esse campo é obrigatório');
          Vibration.vibrate(150)
          isValid = false;
        }
    
        // Valida a altura
        if (!height) {
          setErrorMsgHeight('Esse campo é obrigatório');
          Vibration.vibrate(150)
          isValid = false;
        }
    
        // Se ambos os campos estiverem preenchidos, faz o cálculo
        if (isValid) {
          imcCalculator();
          setMsgImc('Seu IMC é igual a: ');
          setTextButton('Calcular novamente');
          setHeigh(null);
          setWeight(null);
          Keyboard.dismiss();
        } else {
          setMsgImc('Preencha o peso e altura');
          setTextButton('Calcular');
          setImc(null)
          isValid = false;
        }
    }

    const handleAlturaChange = (value) => {
      // Remove qualquer ponto existente para evitar conflitos
      const alturaSemPonto = value.replace('.', '');
  
      // Se o valor tiver mais de um dígito, adiciona o ponto após o primeiro dígito
      if (alturaSemPonto.length > 1) {
        const novaAltura = alturaSemPonto[0] + '.' + alturaSemPonto.slice(1);
        setHeigh(novaAltura);
      } else {
        setHeigh(alturaSemPonto); // Apenas o primeiro dígito
      }
    };

    return(
        <View style={styles.formContainer}>       
          {imc == null ? 
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
              <Text style={styles.label}>Peso</Text>
              {errorMsgWeight && <Text style={styles.errorMsg}>{errorMsgWeight}</Text>}
              <TextInput 
                  style={styles.input}
                  onChangeText={setWeight}
                  value={weight}
                  placeholder="Ex. 85.350"
                  keyboardType="numeric" 
                  maxLength={7}   
              />
              
              <Text style={styles.label}>Altura</Text>
              {errorMsgHeight && <Text style={styles.errorMsg}>{errorMsgHeight}</Text>}
              
              <TextInput 
                  style={styles.input}
                  onChangeText={handleAlturaChange}
                  value={height}
                  placeholder="Ex. 1.85"
                  keyboardType="numeric"  
                  maxLength={4}
              />

              <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={()=> validationImc()}
              >
                <Text style={styles.textButton}>{textButton}</Text>       
              </TouchableOpacity>

            </Pressable>
          :
            <View style={styles.exibitionResult}>
              <ResultIMC messageIMC={msgImc} resultIMC={imc}/>

              <TouchableOpacity
                style={{
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '90%',
                  backgroundColor: '#FF0043',
                  paddingTop:14,
                  paddingBottom: 14,
                  marginLeft: 12,
                  marginBottom: 100
                }}
                onPress={()=> setImc(null)}
                
              >
                <Text style={styles.textButton}>{textButton}</Text>       
              </TouchableOpacity>
            </View>
          }
 
          <FlatList
            style = {styles.listImcs}
            data={listImc}
            keyExtractor={item => item.id}
            contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            showsVerticalScrollIndicator = {false}
            renderItem={({item}) =>{
              return(
                <Text style = {styles.resultImcItem}>
                  <Text style = {styles.textResultItemList}>Resultado IMC = </Text>
                  {item.imc}
                </Text>
                
              )
        
            }}
            
          />
          
        </View>
    )
} 