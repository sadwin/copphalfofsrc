import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const Progress = withStyles({
  root: {
    color: "#778899"
  }
})(CircularProgress);

export default Progress;