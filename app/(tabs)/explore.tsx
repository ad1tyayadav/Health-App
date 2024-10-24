import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#BFDBFE', dark: '#BFDBFE' }}
      headerImage={<Ionicons size={250} name="heart" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.titleText}>Explore Health Tips</ThemedText>
      </ThemedView>

      <ThemedText style={styles.description}>
        Welcome to the health exploration section! Stay informed with tips and resources to maintain a healthy lifestyle.
      </ThemedText>

      <Collapsible title="Healthy Eating" style={styles.collapsible}>
        <ThemedText>
          Discover tips and recipes for maintaining a balanced diet and a healthy body.
        </ThemedText>
        <ExternalLink href="https://www.choosemyplate.gov/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Exercise Routines" style={styles.collapsible}>
        <ThemedText>
          Find various exercise routines that fit your fitness level and goals.
        </ThemedText>
        <ExternalLink href="https://www.acefitness.org/">
          <ThemedText type="link">Explore routines</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Mental Health Resources" style={styles.collapsible}>
        <ThemedText>
          Access resources and techniques to improve mental well-being and manage stress.
        </ThemedText>
        <ExternalLink href="https://www.mentalhealth.gov/">
          <ThemedText type="link">Find support</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Track Your Health" style={styles.collapsible}>
        <ThemedText>
          Use the app's features to track your workouts, meals, and overall progress towards a healthier life.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Latest Health News" style={styles.collapsible}>
        <ThemedText>
          Stay informed with the latest news, trends, and research in the health industry.
        </ThemedText>
        <ExternalLink href="https://www.who.int/news">
          <ThemedText type="link">Read more</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BFDBFE',
  },
  headerImage: {
    color: '#FF6347', // A more vibrant color to match the health theme
    position: 'absolute',
    bottom: -70,
    left: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  titleText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#BFDBFE', // Dark text for light mode, easily adjustable for dark mode
  },
  description: {
    fontSize: 16,
    color: '#BFDBFE',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  collapsible: {
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});
