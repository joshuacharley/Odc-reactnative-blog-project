import * as React from 'react';
// import * as Colors from './styles/colors';
import { View, Text, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />



export default function HomeScreen({ navigation }) {
    return (
        <ScrollView>
        <View style={{ flex: 1 }} >
          <Card>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content>
                <Title>ODC Lunching</Title>
                <Paragraph>lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, magnam officia? Suscipit quibusdam quisquam, fugit labore architecto enim culpa. Odio dolor nemo quas nisi et quo eveniet architecto deleniti atque. </Paragraph>
            </Card.Content>
            <Card.Actions>
            <Button style = {{color:'#F66B0E'}}>Read</Button>
            </Card.Actions>
            {/* blog 2 */}
                  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content>
                <Title>No to Corruption</Title>
               <Paragraph>lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, magnam officia? Suscipit quibusdam quisquam, fugit labore architecto enim culpa. Odio dolor nemo quas nisi et quo eveniet architecto deleniti atque. </Paragraph>
            </Card.Content>
            <Card.Actions>
            <Button>Read</Button>
            </Card.Actions>
            {/* blog 3 */}
                  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content>
                <Title>Orange New course Office Assistant</Title>
               <Paragraph>lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, magnam officia? Suscipit quibusdam quisquam, fugit labore architecto enim culpa. Odio dolor nemo quas nisi et quo eveniet architecto deleniti atque. </Paragraph>
            </Card.Content>
            <Card.Actions >
            <Button>Read</Button>
            </Card.Actions>


            
        </Card>
            
        </View>
        </ScrollView>
    )

}