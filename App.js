import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image,  ScrollView, SectionList} from 'react-native';

export default function App() {

  const RESUME = [
    {title: 'Email', data: ['bvrlisah@gmail.com']},
    {title: 'Age', data: ['23']},
    {title: 'Gender', data: ['Female']},
    {title: 'Education', data: ['College', 'Iloilo Science and Technology University']},
    {title: 'Work Experience', data: ['Philippine Statistics Authority - Information Analyst I']},
   
    ];

  return (
  <SafeAreaView style= {{
        width: '100%',
        height: '100%',
        
      }}>
      
    <ScrollView style={{
        width : '100%',
        height: '100%'
      }}>
    

      <View style={{
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
      }}>
        
        <Image source={{uri: 'https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-female-2-1024.png' }}
        style={{
          width: 200,
          height: 200,
          margin: 20
            }}
        resizeMode='contain'
        />

        <Text style= {{
          color: "black",
          fontWeight: 'bold',
          fontSize: 30,
          
        }}>Alisah Mae S. Bolivar</Text>

        
      <View style={{ padding: 10, alignItems: 'center',
        justifyContent: 'center', }}>
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Objectives:</Text> 
        {' '}To contribute my positive attitude, adaptability, and strong communication skills to support team goals and deliver quality work.Seeking an opportunity to apply my academic achievements and coursework knowledge to real-world projects and challenges.
      </Text>
      </View>

    <SectionList
        sections={RESUME}
        renderSectionHeader={({section:{title}}) => (
          <Text style={{
            padding: 10,
            color: 'black',
            backgroundColor: 'lightblue',
            fontSize: 15,
            fontWeight: 'bold',
            borderRadius: 12,
            elevation: 5
          }}
          >{title}</Text>
        )} 

          renderItem={({item}) => (
            <Text style= {{
              margin: 10,
              fontSize: 14,
              color: 'black',
              backgroundColor: 'white',
              
              
              
            }}>{item} </Text>
        )}/>

    
       
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
