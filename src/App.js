import './App.css';
import Grid, {
  GridTemplate,
  GridArea
} from './components/Grid'

function App() {
  return (
    <Grid template={GridTemplate}>
      <GridArea
        column="1 / 3"
        row="1"
      >
      1
      </GridArea>
    </Grid>
  );
};

export default App;