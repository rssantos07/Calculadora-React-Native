import { StyleSheet } from "react-native";






export const styles = StyleSheet.create({

    header: {
        height:150,
        backgroundColor: 'red',
        fontSize: 60,
        justifyContent: 'center',
        alignItems: 'center',
        color:'white'
    },
    content: {
        height:600,
        backgroundColor:'grey',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'flex-start',
    
    },
    content1: {
        
        flexDirection: 'row',
        backgroundColor: '#1e1e1e',
        justifyContent: 'center',
        borderRadius:60,
        width:400,
        flexWrap:'wrap',
       

    


    },
    content2: {
        
        flexDirection: 'row',
        backgroundColor: '#1e1e1e',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:60,
        width: 450,
        height:80

    },
    result: {
      
        backgroundColor: 'white',
        width: 250,
        alignItems: 'center',
        textAlign: 'right',
        borderRadius:60,
        fontSize:20,
        height:30

    },


    entrada: {
        borderRadius: 5,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth:1,
        margin:20,
        textAlign:'right',
        width:150
        
    },

    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#dadce0',
        width: 80,
        margin: 4
    },
    buttonText: {
       
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    footer: {
        height:100,
        backgroundColor: '#A39785',
        alignItems:"center",
        justifyContent:"center"

    },
  
})