import './App.css';
import { Container, Typography} from "@material-ui/core";
import myLogo from './images/autoparts.jpg'
import Order from "./components/Order";

function App() {
  return (
    <Container maxWidth="md">
      <Typography
      gutterBottom
      variant="h2"
      align ="center">
        Auto parts
        <img src={myLogo} width="100%" alt="auto parts logo"/>
      </Typography>
      <Order/>
    </Container>
  );
}

export default App;
